const { RichEmbed } = require("discord.js");


  
  run: async (client, message, args) => {
    message.channel.send(`${client.emojis.get('641823449043566617')} carregando, por favor aguarde..`).then(m => {
      let ping = m.createdTimestamp - message.createdTimestamp
      let embed = new RichEmbed()
        .setColor([54, 57, 63])
        .setThumbnail(client.user.displayAvatarURL)
        .addField('[**__latência:__**]', `\`🛰️ ${ping}MS\``, true)
        .addField('[**__API tempo de resposta:__**]', `\`🔗 ${Math.round(client.ping)}MS\``, true)
        .addField('[**__Cliente ID__**]', `\`🆔 ${client.user.id}\``)
      m.delete()
      message.channel.send(embed)
      })
    }
  }

module.exports.config = {
    name: "ping",
    description: "Pulls the serverinfo of the guild!",
    usage: "!serverinfo",
    accessableby: "Members",
    aliases: ["ms","lantency"]
}
