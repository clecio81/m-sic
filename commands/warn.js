const Discord = require('discord.js');

const fs = require("fs");



exports.run = (client, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(":x:|Você não tem permissão para isso !");

  let reason = args.slice(2).join(' ');

  let user = message.mentions.users.first();

  if (message.mentions.users.size < 1) return message.reply('Você deve mensioná-lo para que eu possa avisá-lo.');

  if (reason.length < 2) return message.reply('⚙️|Qual o modivo para que eu possa avisá-lo?,sejá bem claro e prevê! .');



  let dmsEmbed = new Discord.RichEmbed()

  .setTitle("Aviso")

  .setColor("#00ff00")

  .setDescription(`${user.tag} Você foi avisado no servidor \`${message.guild.name}\``)

  .addField("avisado por", message.author.tag)

  .addField("Motivo", reason)



  let warnlog = message.guild.channels.find(`name`, "punições");

  if(!warnlog) return message.channel.send(":x:|Não consigo achar o canal`punições`.");



  warnlog.send(dmsEmbed)

  user.send(dmsEmbed);



  message.delete();



  message.channel.send(`${user.tag} **📩 mensagen enviada em privado 🕵️** ,**motivo:** ${reason}`)



}



exports.help = {

  name: 'warn'

};
module.exports.config = {
    name: "warn",
    description: "Pulls the serverinfo of the guild!",
    usage: "!serverinfo",
    accessableby: "Members",
    aliases: ["aviso","advertencia"]
}
