const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) =>{
  let cd = await db.fetch(args[0]) 
 if(cd === null){
      return message.channel.send('código inválido ou já resgatado') 
   
} else if(cd === true){
  let dinheiro = Math.floor(Math.random() * 10000) + 1;
cd = (`você acaba de ganhar ${dinheiro} clCoisn`)
 // let dinheiro = Math.floor(Math.random() * 10000) + 1;
   message.channel.send(`${cd}`)
  let user = message.mentions.members.first() || message.author;
  //db.add(`money_${user.id}`, dinheiro)
  db.delete(args[0])
  
  } 
}