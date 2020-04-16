const Discord = require('discord.js');

exports.run = async (client,message,args)=>{
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("Você não tem permissão.")
    let recado = args.join(" ");
    if(!recado) return message.channel.send('Escreva um recado!')
    message.channel.send('**Aviso enviado para todos dentro do servidor.**')
    message.delete().catch(O_o=>{})
    message.guild.members.map(membro=>{ membro.send(recado)});
}
module.exports.config = {
    name: "aviso",
    description: "Pulls the serverinfo of the guild!",
    usage: "!serverinfo",
    accessableby: "Members",
    aliases: ["aviso", "dm"]
}
