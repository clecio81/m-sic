var Discord = require('discord.js')
exports.run = (client,message,args)=>{
        var permission = new Discord.RichEmbed()
            .setDescription(" | Você não tem permissão para usar esse comando.")
        if(!message.member.hasPermission("ADMINISTRATOR"))  return message.channel.send(permission)
        var msg = new Discord.RichEmbed()
            .setDescription("Escreva um aviso, assim: **c!aviso** `<mensagem>`")
            .setColor("#0091ff")
        var aviso = args.join(" ");
        if(!aviso) return message.channel.send(msg);
        var embed = new Discord.RichEmbed()
            .setColor("#9500ff")
            .setDescription(`${aviso}`)
    message.channel.send(embed)
    message.delete().catch(O_o=>{});     
}