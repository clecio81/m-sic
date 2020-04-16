const Discord = require("discord.js");
const fs = require("fs");
exports.run = (bot,message,args) => {
  let giriscikis = JSON.parse(fs.readFileSync("./cargo/cargos.json", "utf8"));  
  if (!giriscikis[message.guild.id].kanal) {
    return;
  }

  try {
    let giriscikiskanalID = giriscikis[message.guild.id].kanal;
    let giriscikiskanali = bot.guilds.get(message.guild.id).channels.get(giriscikiskanalID);
  let canal = message.guild.channels.get(giriscikiskanalID)
  if (!canal) return message.channel.send("não consigo achar o canal onde irei anunciar as punição do servidor,**utilize c!setlogs ``<nome do canal>`` para que eu possa anunciar**");

    if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("Você não tem permissão para usar esse comando!");
    if(args.length === 0) return message.reply("Utilize c!ban <@usuário> <motivo>!")
    let banMember = message.mentions.users.first() || message.guild.users.get(args[0]);
    if(!banMember) return message.reply("Não foi possível encontrar este usuário!");
    let banReason = args.join(" ").slice(22) || args.slice(1).join(" ");
    if(!banReason){
        banReason = "O motivo não foi informado!"
     
  


    }

message.channel.send(`o usuário ${banMember} foi banido com sucesso pelo **motivo**: ${banReason}`)
        giriscikiskanali.send(`o usuário ${banMember} **:tada:| **foi **banido** do servidor pelo **motivo**: ${banReason}`)
    
  } catch (e) { 
    return console.log(e)
  }
        
      
  }
exports.help = {
    name: "ban"
}