const Discord = require("discord.js");
const ms = require("ms");
const fs = require ('fs')
module.exports.run = async (bot, message, args) => {
let giriscikis = JSON.parse(fs.readFileSync("./cargo/cargos.json", "utf8"));  
  if (!giriscikis[message.guild.id].kanal) {
    return;
  }

  try {
    let giriscikiskanalID = giriscikis[message.guild.id].kanal;
    let giriscikiskanali = bot.guilds.get(message.guild.id).channels.get(giriscikiskanalID);
  let canal = message.guild.channels.get(giriscikiskanalID)
  if (!canal) return message.channel.send("não consigo achar o canal onde irei anunciar as punição do servidor,**utilize c!setlogs ``<nome do canal>`` para que eu possa anunciar**");

    let perm = new Discord.RichEmbed()
        .setDescription("❎ **|** Você não tem permissão para usar esse comando.")
        .setColor("#ff0000")
    if (!message.member.hasPermissions ('KICK_MEMBERS')) return message.channel.send(perm)
    const mod = message.author;
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let infocmd = new Discord.RichEmbed()
        .setTitle("🔇 Comando: c!unmute")
        .addField("✅ Uso:", "**c!unmute** `<@user>` `<motivo>`")
        .addField("📄 Exemplo:", "c!unmute @User#1234 spam")
        .setColor("#ff0000")
        .setFooter("Informações do comando: \"unmute\"")
    if (!user) return message.channel.send(infocmd)
    let reason = message.content.split(" ").slice(2).join(" ");
    let msgdeexi = new Discord.RichEmbed()
        .setDescription("este usuário não está mutado")
        .setColor("#ff0000")
    if (!user.roles.find(`name`, "Muted")) return message.channel.send(msgdeexi)
    let msgreason = new Discord.RichEmbed()
        .setDescription("Coloque algum motivo.")
        .setColor("#ff0000")
    if (!reason) return message.channel.send(msgreason)
    let muterole = message.guild.roles.find(`name`, "Muted");

    if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "Muted",
                color: "#000000",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }
  

    let mutetime = args[1];

    await (user.removeRole(muterole.id));
    const muteembed = new Discord.RichEmbed()
            .setAuthor(' Ação | UnMute', `https://images-ext-2.discordapp.net/external/wKCsnOcnlBoNk-__BXsd6BrO6YddfUB-MtmaoaMxeHc/https/lh3.googleusercontent.com/Z5yhBQBJTSJVe5veJgaK-9p29hXm7Kv8LKF2oN0hDnsToj4wTcQbirR94XVpH4Lt5a5d%3Dw300`)
            .addField('Usuário', `<@${user.id}>`)
            .addField('Motivo', `${reason}`)
            .addField('Executor', `${mod}`)
            .setColor('#000000')
    message.channel.send("usuário desmutado com sucesso")
        giriscikiskanali.send(muteembed)
  } catch (e) { 
    return console.log(e)
  }
  
}