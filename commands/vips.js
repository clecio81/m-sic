const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) =>{
  let user = message.mentions.members.first() || message.author;
  let vip = await db.fetch(`vip_${message.guild.id}_${user.id}`)
    if(vip === null) vip = 'usuário commum'
    if(vip === true) vip = 'vip'
    message.channel.send(`${vip}`)
  } 
