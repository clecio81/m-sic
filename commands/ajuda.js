const Discord = require('discord.js')
const config = require('../config.json')
exports.run = (bot, message, args) => {
  let guild = message.guild;
   let ling = {
            'amsterdam': 'Check your DM ',
            'brazil': 'verifique suas mensagens diretas (DM) ',
            'eu-central': ' Check your DM',
            'eu-west': 'Check your DM',
            'frankfurt': 'Check your DM',
            'hongkong': 'Check your DM ',
            'japan': 'DMを確認する ",
            'london': 'Check your DM ',
            'russia': 'Проверьте свой DM ',
            'singapore': 'Check your DM',
            'sydney': ' Check your DM ',
            'us-central': '  Check your DM ',
            'us-east': 'Check your DM ',
            'us-west': 'Check your DM ',
            'us-south': ':check your DM ',
        }[guild.region];
let embed = new Discord.RichEmbed()
            .setDescription(ling)
            .setTimestamp()
            .setColor("BLACK")
        message.channel.send(embed)


let embed1 = new Discord.RichEmbed()
        .addField("Alguns dos meus comandos 😉",`\n🛠️┆\`Comandos\`\n🔨┆\`utilitários\`\n🔰┆\`Desenvolvedor\`\n↩️┆\`Voltar ao menu\`\n\n__**achou algum bug? use c!bug 💭\**__`)
        .setColor("#ff0000")
    message.delete().catch(O_o=>{})
    message.author.send(embed1).then(msg=>{
            msg.react('🛠️').then(r=>{
            msg.react('🔨')
            msg.react('🔰')
            msg.react('↩️')
            msg.react('🎵')
          
        })

        const UtilidadesFilter = (reaction, user, ) => reaction.emoji.name === '🛠️' && user.id === message.author.id;
        const ModeraçãoFilter = (reaction, user, ) => reaction.emoji.name === '🔨' && user.id === message.author.id;
        const EntretenimentoFilter = (reaction, user, ) => reaction.emoji.name === '🔰' && user.id === message.author.id;
        const MúsicaFilter = (reaction, user, ) => reaction.emoji.name === '🎵' && user.id === message.author.id;
        const ZueiraFilter = (reaction, user, ) => reaction.emoji.name === '↩️' && user.id === message.author.id;
        const InteraçãoFilter = (reaction, user, ) => reaction.emoji.name === '❤' && user.id === message.author.id;
        const OutrosFilter = (reaction, user, ) => reaction.emoji.name === '🥊' && user.id === message.author.id;
        const pornFilter = (reaction, user, ) => reaction.emoji.name === '🔥' && user.id === message.author.id;
        const BackFilter = (reaction, user, ) => reaction.emoji.name === '↩️' && user.id === message.author.id;
        const utilitários = (reaction, user, ) => reaction.emoji.name === '🔨' && user.id === message.author.id;
        const Utilidades = msg.createReactionCollector(UtilidadesFilter, { time: 80000 });
        const Moderação = msg.createReactionCollector(ModeraçãoFilter, { time: 80000 });
        const Entretenimento = msg.createReactionCollector(EntretenimentoFilter, { time: 80000 });
        const Música = msg.createReactionCollector(MúsicaFilter, { time: 80000 });
        const Zueira = msg.createReactionCollector(ZueiraFilter, { time: 80000 });
        const Interação = msg.createReactionCollector(InteraçãoFilter, { time: 80000 });
        const Outros = msg.createReactionCollector(OutrosFilter, { time: 80000 });
        const porn = msg.createReactionCollector(pornFilter, {time: 80000});
        const Back = msg.createReactionCollector(BackFilter, { time: 90000 });

        Utilidades.on('collect', r2 => { 
            embed = new Discord.RichEmbed()
                .setDescription(`📟Prefixo:** \`c!\`\n\n <:int:634199738975256597>**Comandos de ajuda:**\n\n🤖┆\`BotInfo\`\n🔧┆\`Ajuda\`\n📚┆\`ServerInfo\`\n📸┆\`Avatar\`\n🎱┆\`8ball\`\n🐱┆\`Cat\`\n💰┆\`Coinflip\`\n🏁┆\`Corrida\`\n🐶┆\`Dog\`\n👥┆\`Fake\`\n💎┆\`Mcskin\`\n🤣┆\`Meme\`\n📣┆\`Say\`\n💕┆\`Ship\`\n<:rdr:634185060693835778>┆\`rander\`\n\⚔️┆\`batalha\`\n🚫┆\`Ban\`\n❌┆\`Lock\`\n🔇┆\`Mute\`\n👍┆\`Voteban\`\n🔊┆\`Unmute\`\n💬┆\`Unlock\`\n🗑️┆\`Clear\`\n📢┆\`Anunciar\`\n🔔┆\`invites\`\n🔐┆\`defesa\``)
            .setColor("#ff0000")
            msg.edit(embed);
        })
         
        
        Moderação.on('collect', r2 => {
            embed = new Discord.RichEmbed()
                .setTitle("**__🔨 • utilitários__*")
          
          
                .setDescription(`**comandos de utilitários**\n\n🛠️┆addrole\n📝┆registrar\n📫┆dm\n👑┆vip\n🤖┆uptime\n🎟️┆ticke\n🔩┆bug\n📥┆setwelcome\n🧐┆setlogs\n\n👈┆setsaida🧷┆emojify\n🖇️┆addemoji`)
                .setColor("#ff0000")
            msg.edit(embed);
        })

        Entretenimento.on('collect', r2 => { 
            embed = new Discord.RichEmbed()
                .setTitle("**——🔰 • Desenvolvedor——**")
                .setDescription(`\n\n<a:f5:634431340103598081> **Developer: <@467472722491080724>**,<@578956574480007183>`)
                .setColor("#ff0000")
            msg.edit(embed);
          
        })
Música.on('collect', r2 => { 
            embed = new Discord.RichEmbed()
                .setTitle("**__🎵 • Música:__**")
                .setDescription(`📟Prefixo: \`c!\`\n\n <a:f10:634442886720782353> Comandos de música:\n\n⏸️┆\`play \`\n▶️┆\`pause\`\n\🔎┆\`np\`\n⏯️┆\`resumir\`\n🔈┆\`parar\`\n🔎┆\`fila\`\n📶┆\`volume\``)


                .setColor("#ff0000")
            msg.edit(embed);
        })

        Back.on('collect', r2 => { 
            embed = new Discord.RichEmbed()
            .addField("Alguns dos meus comandos",`\n🛠️┆\`Comandos\`\n🔨┆\`utilitários\`\n🔰┆\`Desenvolvedor\`\n↩️┆\`Voltar ao menu\`\n\n__**achou algum bug? use c!bug 💭\**__`)
            .setColor("#ff0000")
            message.delete().catch(O_o=>{})
            msg.edit(embed);
        
        })
      
    });
    
};
module.exports.config = {
    name: "ajuda",
    description: "Pulls the serverinfo of the guild!",
    usage: "!serverinfo",
    accessableby: "Members",
    aliases: ["help", "ayuda"]
}
