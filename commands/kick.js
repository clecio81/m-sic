const {RichEmbed} = require("discord.js")
const moment = require("moment")
moment.locale("pt-br")
const fs = require("fs");
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
  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
  if(!kUser) return message.channel.send("Quem você quer expulsar?");
  let kReason = args.join(" ").slice(22);
  if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("você não tem permissão para isso");
  if (kUser.hasPermission("KICK_MEMBERS")) return message.channel.send("não tenho permissão para isso,o usuário pode ter o cargo mais alto que o meu")
  if (!kReason){kReason = "o motivo não foi informado"}
  let embed = new RichEmbed()
  .setDescription("Kick")
  .setColor("#7289DA")
  .addField("Kicked ", `${kUser} ID ${kUser.id}`)
  .addField("Kickado por", `<@${message.author.id}>  ID ${message.author.id}`)
  .addField("Kickado em", message.channel)
  .addField("Hora", `${moment(message.guild.cratedAt).format('LLLL')}`)
  .addField("Motivo ", kReason)
  message.guild.member(kUser).kick(kReason)
    message.channel.send("usuário chutado com sucesso")
  giriscikiskanali.send(embed)
  } catch (e) { 
    return console.log(e)
  }
 

  
}

module.exports.config = {
    name: "kick",
    description: "Pulls the serverinfo of the guild!",
    usage: "!serverinfo",
    accessableby: "Members",
    aliases: ["k,"chutar"]
}
