const moment = require("moment")


const Discord = require ('discord.js')
exports.run = (client,message,args)=>{
    let usuario = message.guild.member(message.mentions.users.first() || client.users.get(args[0]) || message.author);
    
    let embed = new Discord.RichEmbed()
        .setAuthor(usuario.user.username, message.author.avatarURL)
        .setDescription("Oi! Eu me chamo __**Clécio**__  e fui criado por <@467472722491080724>,<@578956574480007183> Sou apenas um simples bot de administração e moderação para servidores do Discord.\n \nAqui embaixo estão algumas das minhas informaçoes principais:")
        .addField(`__**Servidores:**__`, `\`\`\`js\n${client.guilds.size}\`\`\``, true)
        .addField(`👥__**Membros:**__`, `\`\`\`js\n${client.users.size}\`\`\``, true)
        .addField(`:speech_balloon: __**Canais:**__`, `\`\`\`js\n${client.channels.size}\`\`\``, true)
        .addField(`📡 __**Ping:**__`, `\`${Math.round(client.ping)}ms\``)
        .addField(":notebook_with_decorative_cover: __**Linguagem:**__", `📂 JavaScript`)
        .addField(`💻 __**ID:**__`, `\`\`\`js\n${usuario.user.id}\`\`\``)
        .addField(" __**Prefix:**__", `\`c!\``, true)
        .addField(":exclamation: __**Suporte:**__", "Servidor de suporte [clique aqui](https://discord.gg/PS6aCfz)")
        .setThumbnail(client.user.avatarURL)
        .setColor("#ffa300")
        .setFooter(`Comando solicitado por: ${message.author.tag}`, message.author.avatarURL)
        .setTimestamp()

    message.channel.send(embed)
}