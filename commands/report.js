const {RichEmbed} = require("discord.js")
const moment = require("moment")
const fs = require ('fs')
moment.locale("pt-br")
exports.run = async (client, message, args) => {
  let giriscikis = JSON.parse(fs.readFileSync("./cargo/cargos.json", "utf8"));  
  if (!giriscikis[message.guild.id].kanal) {
    return;
  }
  try {
    let giriscikiskanalID = giriscikis[message.guild.id].kanal;
    let giriscikiskanali = client.guilds.get(message.guild.id).channels.get(giriscikiskanalID);
  let canal = message.guild.channels.get(giriscikiskanalID)
  if (!canal) return message.channel.send("não consigo achar o canal onde irei anunciar as punição do servidor,**utilize c!setlogs ``<nome do canal>`` para que eu possa anunciar**");
  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
  if (!rUser) return message.channel.send("você precisa mencionar um usuário.");
  let reason = args.join(" ").slice(22);
  let embed = new RichEmbed()
  .setDescription("Reports")
  .setColor("#7289DA")
  .addField("Usuários reportado ", `${rUser} ID: ${rUser.id}`)
  .addField("Reportado por", `${message.author} ID: ${message.author.id}`)
  .addField ("No canal", message.channel)
  .addField ("Horário",`${moment(message.guild.createdAt).format('LLLL')}`)
  .addField ("Motivo", reason)
 giriscikiskanali.send(embed);
    message.delete()
  return;
  } catch (e) { 
    return console.log(e)
  }
module.exports.config = {
    name: "report",
    description: "Pulls the serverinfo of the guild!",
    usage: "!serverinfo",
    accessableby: "Members",
    aliases: ["reporta","r"]
}
