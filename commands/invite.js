const Discord = require('discord.js');
const moment = require("moment");
moment.locale("pt-BR")

exports.run = async (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setDescription(`**gostou das minhas funções? que tal me adicionar no seu servidor?**\n[clique aqui](https://discordapp.com/oauth2/authorize?client_id=695760577485733910&permissions=8&scope=bot) para me adicionar`)
        .setThumbnail(cliente.avatarURL)
        .setColor("#ffffff")
        .setFooter(`${message.client.tag}`)
      message.delete().catch(O_o=>{})
     message.channel.send(embed);
};
module.exports.config = {
    name: "invite",
    description: "Pulls the serverinfo of the guild!",
    usage: "!serverinfo",
    accessableby: "Members",
    aliases: ["convite,"addbot"]
}
