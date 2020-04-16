const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (client, message, args) => {
  let numero = Math.floor(Math.random() * 9837) + 1;
  db.fetch(`https://clecio.gifts/${numero}`)
  let gg = new Discord.RichEmbed()
  .setDescription("vip adicionado")
  .addField(`código`,`https://clecio.gifts/${numero}`)
  message.channel.send(gg);
   db.set(`https://clecio.gifts/${numero}`,true)
};