const Discord = require('discord.js');
const moment = require("moment");
moment.locale("pt-BR")

exports.run = async (client, message, args) => {
	let user;
	
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }

    let usuario = message.guild.member(message.mentions.users.first() || client.users.get(args[0]) || message.author);

    let owo = message.guild.member(message.mentions.users.first() || client.users.get(args[0]) || message.author);

    let statusmebro;
    if(usuario.presence.status === "dnd") statusmebro = "🔺 Não pertubar";
    if(usuario.presence.status === "idle") statusmebro = "🔸 Ausente";
    if(usuario.presence.status === "stream") statusmebro = "⚜ Transmitindo";
    if(usuario.presence.status === "offline") statusmebro = "⚪ Invisível";
    if(usuario.presence.status === "online") statusmebro = "🍭 Disponível";

    const member = message.guild.member(user);  
	
    const embed = new Discord.RichEmbed()
        .setDescription(`**gostou das minhas funções? que tal me adicionar no seu servidor?**\n\n[clique aqui](https://discordapp.com/oauth2/authorize?client_id=695760577485733910&permissions=8&scope=bot) para me adicionar`)
        .setThumbnail(user.avatarURL)
        .setColor("#ffffff")
        .setFooter(`${message.author.tag}`)
      message.delete().catch(O_o=>{})
     message.channel.send({embed});
};