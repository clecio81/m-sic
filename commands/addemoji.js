const Discord = require('discord.js');

exports.run = function(client, message, args) {
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`você não tem permissão para isso.`);
  let guild = message.guild
  let [link, ad] = args.join(" ").split(" ");
  if (!link) return message.channel.send(`adicione um link .`)
  if (!ad) return message.channel.send(`adicione um nome para o emiji comum espaço.`)
  
  guild.createEmoji(link, ad)
    .then(emoji => message.channel.send(`${emoji.name} adicionado com sucesso. (${emoji})`))
    .catch(console.error);
  message.delete();
};

module.exports.config = {
    name: "addemoni",
    description: "Pulls the serverinfo of the guild!",
    usage: "!serverinfo",
    accessableby: "Members",
    aliases: ["add-emoji","adicionaremojii"]
}
