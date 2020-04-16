const db = require('quick.db')
const ms = require('parse-ms')
const Discord = require('discord.js')

exports.run = async (client, message, args, ) =>{
  let ownerID = ''
  if(message.author.id !== ownerID) return message.channel.send("código já resgatado")
      let dinheiro = 4000;
    let embed = new Discord.RichEmbed()
    .setAuthor(`vale presente`, message.author.displayAvatarURL)
    .setColor("GREEN")
    .setDescription(`comando secreto`)
    .setDescription(`você ganhou um vale resgate de  ${dinheiro}`)
    message.channel.send(embed)
  message.delete()
    db.add(`money_${message.author.id}`, dinheiro)
  
      }
    



