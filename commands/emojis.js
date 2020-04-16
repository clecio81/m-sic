const Discord = require('discord.js');

exports.run = async (client, message) => {

  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(message.guild.name, message.guild.iconURL)
  .setDescription(`${message.guild.emojis.map(e => e).join(' **|** ') || "sete servidor não possui emojis"}`)
  return message.channel.send(embed)
};

exports.conf = {
  enabled: true, 
  aliases: ["emojilist"], 
  permLevel: 0, 
  
};

exports.help = {
  name: "emojis", 
  description: "Sunucudaki emojileri gösterir.", 
  usage: "emojiler" 
};