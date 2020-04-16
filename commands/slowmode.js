const Discord = module.require('discord.js');
//const emoji = require('./../emojis.json');

module.exports.run = async (bot, message, args) => {
  if(!args[0]) return message.channel.send("especifique um tempo (1 a 21600 segundos)")
  let duration = args[0]
  message.channel.setRateLimitPerUser(duration)
  .catch(() => {
    message.channel.send("erro ao adicionar o Modo lento.")
  })
  message.channel.send("você setou o Modo lento para: " + duration + " segundos1!")
}