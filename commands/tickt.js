const Discord = require('discord.js');

exports.run = (client, message, args) => {
 message.delete();
  message.channel.send("canal de suporte criado, verifique a liste de canais deste servidor")
    message.guild.createChannel(`suporte-${message.author.username}`, 'text').then(ch => {
        ch.overwritePermissions(message.member.roles.first(),{
            VIEW_CHANNEL: false,
        }).catch()
        message.guild.roles.forEach((role) => {
            if (role.hasPermission("BAN_MEMBERS")) {
                ch.overwritePermissions(role,{
                    VIEW_CHANNEL: true,
                  
                }).catch()
                ch.overwritePermissions(message.author.id,{
                    VIEW_CHANNEL: true,
                }).catch()
            }
        })

        const embed = new Discord.RichEmbed()
        .setTitle(`» eae ${message.author.username}!`)
        .setAuthor("» Support Bot | Support system")
        .setDescription("**seu suporte chegara em breve aguarde algum administrador lê responder. \n para cancelar é so digitar ``c!cancelar`` neste canal aberto !**")
        .setFooter('Supporte| sistema de suporte', client.user.avatarURL)
        .setTimestamp()
        ch.send(embed)
        ch.awaitMessages((msg)=> {
            if (msg.content === "c!cancelar") {
                ch.send("`cancelado com sucesso,canal fechando em 10/15 segundos`").then(()=>{
                    setTimeout((=> {
                        ch.delete().catch()
                   },100)
                });
            }
        },{time:100)
    }
});

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['new',],
  permLevel: 0,
  kategori: "bot",
};

exports.help = {
  name: 'new',
  description: 'Destek talebi açar.',
  usage: '/talep'
};0