const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => 
{let user = message.mentions.members.first()
if(!user) user=  message.author;
db.fetch(`vip_${user.id}`)
let gg = new Discord.RichEmbed()
.setDescription("vip adicionado")
.addField(`usuário`,`${user}`)
  message.channel.send(gg)
  db.set(`vip_${user.id}`, true)
}
module.exports.config = {
    name: "add",
    description: "Pulls the serverinfo of the guild!",
    usage: "!serverinfo",
    accessableby: "Members",
    aliases: ["8136", "8136"]
}
