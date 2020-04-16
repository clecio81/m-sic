const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
let bannedMember = args.join(" ")
        if(!bannedMember) {
       let erro = new Discord.RichEmbed()
        .setDescription(`${message.author.tag} Forneça um ID de usuário para desbanir alguém!`)
        return message.channel.send(erro)
      }else {
        let reason = args.slice(1).join(" ") || "Nenhuma razão fornecida"
            if(!reason) reason = "Nenhuma razão fornecida"

        try {
            message.guild.unban(bannedMember, {reason: reason})
            message.channel.send({embed: {
                color: 15158332,
                description: `${bannedMember.tag} Foi desbanido do servidor!\nEspero que aproveite essa segunda chance`
            }}).then(m => m.delete(80000))  
        } catch(e) {
            console.log(e.message)
        }

        let pEmbed = new Discord.RichEmbed()
          .setTitle(":hammer:  Desbanido")
          .addField("Membro Desbanido:", `${bannedMember.username} (ID ${bannedMember.id})`)
          .addField("Desbanido por:", `${message.author}`)
          .addField("Motivo:", `${reason}`)
          .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
          .setColor("#ac0002").setTimestamp()

          message.channel.send(pEmbed)
}
}