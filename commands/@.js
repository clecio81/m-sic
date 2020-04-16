const db = require('quick.db')
const Discord = require('discord.js')


exports.run = async (client, message, args, config) => {
 // just copy & paste it in here.

    if (!message.member.hasPermission('MANAGE_GUILD')) { // if message.author / member does not have the permission MANAGE_GUILD, return.
        return message.channels.send('você não tem permissão para isso.').then(msg => {
  
        })
    }

    let user = message.mentions.members.first() || message.author

    if (isNaN(args[0])) return message.channel.send(`${message.author}, número inválido.`) // if args[0] (first input) is not a number, return.
    db.delete(`money_${user.id}`, args[0]) // subtract it now
    let money = await db.fetch(`money_${user.id}`)
if(!money === null) money = 0;
    let embed = new Discord.RichEmbed()
    .setAuthor(`dinheiro removi!`, message.author.displayAvatarURL)
    .addField(`Aretirado`, `-${args[0]}$`)
    .addField(`carteira Updated`, `${money}$`)
    .setColor("RED") // random = "RANDOM"
    .setTimestamp()
    // you can change it to args[1] if you want to, but then it's not gonna work like I want it to.

    message.channel.send(embed)
}