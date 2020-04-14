const { Client, Util } = require("discord.js");
const { TOKEN, PREFIX, GOOGLE_API_KEY } = require("./config");
const YouTube = require("simple-youtube-api");
const ytdl = require("ytdl-core");

const client = new Client({ disableEveryone: true });

const youtube = new YouTube(GOOGLE_API_KEY);

const queue = new Map();

client.on("warn", console.warn);

client.on("error", console.error);

// Set the bot's presence (activity and status)
client.on("ready", () => {
  client.user.setPresence({
    game: {
      name: "c!ajuda",
      type: "LISTENING"
    },
    status: "dnd"
  });
});

client.on("disconnect", () =>
  console.log("Eu apenas desconectei, eu vou me reconectar agora...")
);

client.on("reconnecting", () => console.log("Estou me reconectando!"));

client.on("message", async msg => {
  // eslint-disable-line
  if (msg.author.bot) return undefined;
  if (!msg.content.startsWith(PREFIX)) return undefined;

  const args = msg.content.split(" ");
  const searchString = args.slice(1).join(" ");
  const url = args[1] ? args[1].replace(/<(.+)>/g, "$1") : "";
  const serverQueue = queue.get(msg.guild.id);

  let command = msg.content.toLowerCase().split(" ")[0];
  command = command.slice(PREFIX.length);

  if (command === "play") {
    const voiceChannel = msg.member.voiceChannel;
    if (!voiceChannel)
      return msg.channel.send(
        "você precisa estar em um canal de voz para tocar música!"
      );
    const permissions = voiceChannel.permissionsFor(msg.client.user);
    if (!permissions.has("CONNECT")) {
      return msg.channel.send(
        "Eu não posso me conectar á este canal de voz, verifique se eu tenho  permissão!"
      );
    }
    if (!permissions.has("SPEAK")) {
      return msg.channel.send(
        "parece que alguém me silêncio, verifique minhas  permissão!"
      );
    }

    if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
      const playlist = await youtube.getPlaylist(url);
      const videos = await playlist.getVideos();
      for (const video of Object.values(videos)) {
        const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
        await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
      }
      return msg.channel.send(
        `✅ Playlist: **${playlist.title}** foi adicionada na fila!`
      );
    } else {
      try {
        var video = await youtube.getVideo(url);
      } catch (error) {
        try {
          var videos = await youtube.searchVideos(searchString, 10);
          let index = 0;
          msg.channel.send(`
__**selecione uma música:**__

${videos.map(video2 => `**${++index} -** ${video2.title}`).join("\n")}

por favor diga o número de  1-10 para que eu poça tocar a música.
					`);
          // eslint-disable-next-line max-depth
          try {
            var response = await msg.channel.awaitMessages(
              msg2 => msg2.content > 0 && msg2.content < 11,
              {
                maxMatches: 1,
                time: 100000,
                errors: ["time"]
              }
            );
          } catch (err) {
            console.error(err);
            return msg.channel.send(
              "Nenhum valor ou valor inválido inserido!, Cancelando busca!"
            );
          }
          const videoIndex = parseInt(response.first().content);
          var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
        } catch (err) {
          console.error(err);
          return msg.channel.send("🆘 Não recebi nenhum resultado");
        }
      }
      return handleVideo(video, msg, voiceChannel);
    }
  } else if (command === "pular") {
    if (!msg.member.voiceChannel)
      return msg.channel.send("Você não está em um canal de voz!");
    if (!serverQueue)
      return msg.channel.send("Não tem nada tocando para eu pular pra você!");
    serverQueue.connection.dispatcher.end("Você pulou a música!");
    return undefined;
  } else if (command === "parar") {
    if (!msg.member.voiceChannel)
      return msg.channel.send("Você não está em um canal de voz!");
    if (!serverQueue)
      return msg.channel.send("Não tem nada tocando para eu parar pra você!");
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end("Você parou a música!");
    return undefined;
  } else if (command === "volume") {
    if (!msg.member.voiceChannel)
      return msg.channel.send("Você não está em um canal de voz!");
    if (!serverQueue) return msg.channel.send("Não tem nada tocando!");
    if (!args[1])
      return msg.channel.send(`O volume atual é: **${serverQueue.volume}**`);
    serverQueue.volume = args[1];
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
    return msg.channel.send(`O volume foi setado para: **${args[1]}**`);
  } else if (command === "np") {
    if (!serverQueue) return msg.channel.send("Não tem nada tocando");
    return msg.channel.send(
      `🎶 Tocando agora: **${serverQueue.songs[0].title}**`
    );
  } else if (command === "fila") {
    if (!serverQueue) return msg.channel.send("Não tem nada tocando");
    return msg.channel.send(`
__**Song queue:**__

${serverQueue.songs.map(song => `**-** ${song.title}`).join("\n")}

**Now playing:** ${serverQueue.songs[0].title}
		`);
  } else if (command === "pausar") {
    if (serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
      serverQueue.connection.dispatcher.pause();
      return msg.channel.send("⏸ Pausei a música pra você!");
    }
    return msg.channel.send("Não tem nada tocando");
  } else if (command === "resumir") {
    if (serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume();
      return msg.channel.send("▶ Resumi a música pra você!");
    }
    return msg.channel.send("Não tem nada tocando");
  }

  return undefined;
});

async function handleVideo(video, msg, voiceChannel, playlist = false) {
  const serverQueue = queue.get(msg.guild.id);
  console.log(video);
  const song = {
    id: video.id,
    title: Util.escapeMarkdown(video.title),
    url: `https://www.youtube.com/watch?v=${video.id}`
  };
  if (!serverQueue) {
    const queueConstruct = {
      textChannel: msg.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 5,
      playing: true
    };
    queue.set(msg.guild.id, queueConstruct);

    queueConstruct.songs.push(song);

    try {
      var connection = await voiceChannel.join();
      queueConstruct.connection = connection;
      play(msg.guild, queueConstruct.songs[0]);
    } catch (error) {
      console.error(`Eu não pude entrar no canal de voz: ${error}`);
      queue.delete(msg.guild.id);
      return msg.channel.send(`Eu não pude entrar no canal de voz: ${error}`);
    }
  } else {
    serverQueue.songs.push(song);
    console.log(serverQueue.songs);
    if (playlist) return undefined;
    else return msg.channel.send(`✅ **${song.title}** foi adicionada á fila!`);
  }
  return undefined;
}

function play(guild, song) {
  const serverQueue = queue.get(guild.id);

  if (!song) {
    serverQueue.voiceChannel.leave();
    queue.delete(guild.id);
    return;
  }
  console.log(serverQueue.songs);

  const dispatcher = serverQueue.connection
    .playStream(ytdl(song.url))
    .on("end", reason => {
      if (reason === "A transmissão não está gerando com rápidez o suficiente!")
        console.log("Música encerrada!");
      else console.log(reason);
      serverQueue.songs.shift();
      play(guild, serverQueue.songs[0]);
    })
    .on("error", error => console.error(error));
  dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

  serverQueue.textChannel.send(`🎶 Tocando: **${song.title}**`);
}

client.login(TOKEN);
