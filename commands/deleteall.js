const Discord = require('discord.js');
exports.run = (client, message, arg) => {
  if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("você não tem permissão para utilizar este comando");
  let gg = message.content.split(" ").slice(1).join(" ")
  if(!gg)  return message.channel.send('esta função ira deletar todos os canais do seu servidor, você deseja continuar? se sim digite c!deleteall sim')
message.guild.channels.forEach(channel => channel.delete())
  
}