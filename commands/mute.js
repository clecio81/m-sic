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
        .setDescription("| Você não tem permissão para usar esse comando.")
        .setColor("0xe80005")
    if (!message.member.hasPermissions ('KICK_MEMBERS')) return message.channel.send(perm)
    const mod = message.author;
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let infocmd = new Discord.RichEmbed()
        .setTitle(":white_check_mark: Comando: mute")
        .addField(":no_entry_sign: Uso:", "**c!mute** `<@user>` `<motivo>`")
        .addField ("⏰ mute por tempo","use **c!tempmute** `<@user>` `<tempo>`")
        .addField(":page_facing_up:  Exemplo:", "c!mute @User#1234 Spawn")
        .setColor("0xe80005")
        .setFooter("Informações do comando: \"mute\"")
    if (!user) return message.channel.send(infocmd)
    let reason = message.content.split(" ").slice(2).join(" ");
    let msgreason = new Discord.RichEmbed()
        .setDescription("Especifique um motivo para poder mutar.")
        .setColor("0xe80005")
    if (!reason) return message.channel.send(msgreason)
    let muterole = message.guild.roles.find(`name`, "Muted");
  if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "Muted",
                color: "#ff0000",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: true
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }

    let mutetime = args[1];

    await (user.addRole(muterole.id));
    const muteembed = new Discord.RichEmbed()
            .setAuthor(' ação| Mute', `https://images-ext-2.discordapp.net/external/Wms63jAyNOxNHtfUpS1EpRAQer2UT0nOsFaWlnDdR3M/https/image.flaticon.com/icons/png/128/148/148757.png`)
            .addField('usuário', `<@${user.id}>`)
            .addField('motivo', `${reason}`)
            .addField('executor', `${mod}`)
            .setColor('BLACK')
    message.channel.send("usuário silenciado com sucesso")
        giriscikiskanali.send(muteembed)
  } catch (e) { 
    return console.log(e)
  }
  
  
}


module.exports.config = {
    name: "mute",
    description: "Pulls the serverinfo of the guild!",
    usage: "!serverinfo",
    accessableby: "Members",
    aliases: ["silenciar,"silencio"]
}
