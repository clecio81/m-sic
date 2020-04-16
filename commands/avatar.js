const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async (client, message, args) => {
   var langg
 const idioma = await db.fetch(`idioma_${message.guild.id}`)
 if (idioma === null) langg = 'pt'
  else langg = idioma       
 const lang = require(`../idioma/${langg}.json`)
 let user   = message.mentions.users.first() || message.author,
        avatar = user.displayAvatarURL,
        embed  = new Discord.RichEmbed()
            .setDescription(`🖼 **${message.author.username}**\n**[${lang.Dow}](${avatar})**`)
            .setImage(avatar)
            .setColor("#aa00ff")
            message.channel.send(`${message.author}`)
            message.delete().catch(O_o=>{})
    message.channel.send(embed);
}
module.exports.config = {
    name: "avatar",
    description: "Pulls the serverinfo of the guild!",
    usage: "!serverinfo",
    accessableby: "Members",
    aliases: ["photograph", "foto"]
}
