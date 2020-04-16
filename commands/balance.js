const Discord = require('discord.js')
const db = require('quick.db')
module.exports.run = async (bot, message, args) => {
var user = message.mentions.users.first();
    if (!user) user = message.author;
    let money = await db.fetch(`moneys_${user.id}`);
  let bank = await db.fetch(`bank_${user.id}`)
  if (bank === null) bank = 0;
    if (money === null) money = 0;
  let gg = new Discord.RichEmbed()
  .addField("carteira:",`${money}`)
  .addField("depositado no banco",`${bank}`)
    message.channel.send(gg)


}
module.exports.config = {
    name: "balance",
    description: "Pulls the serverinfo of the guild!",
    usage: "!serverinfo",
    accessableby: "Members",
    aliases: ["carteira", "dinheiro","billetera"]
}
