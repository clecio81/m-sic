const Discord = require('discord.js');

exports.run = async (client, message) => {

  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(message.guild.name, message.guild.iconURL)
  .setDescription(`${message.guild.emojis.map(e => e).join(' **|** ') || "sete servidor não possui emojis"}`)
  return message.channel.send(embed)
};


module.exports.config = {
    name: "emojis",
    description: "Pulls the serverinfo of the guild!",
    usage: "!serverinfo",
    accessableby: "Members",
    aliases: ["emojilist"]
}
