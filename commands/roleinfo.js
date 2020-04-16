const Discord = require("discord.js");
module.exports.run = async (client,message,args) => {
  var rol = message.content.split(" ").slice(1).join(" ");
  let role = message.guild.roles.find("name", `${rol}`)
  var hata = new Discord.RichEmbed()
  .setColor("#36393F")
  .setDescription("❌ | qual o cargo? ele não precisa ser mencionando");
  if(!role) return message.channel.send(hata);
  const moment = require("moment")
  moment.locale("pt-BR")
  var temps = moment(message.createdTimestamp).format("LLLL");
  var roleinfoEmbed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .addField('✏ nome do cargo', role.name, true)
  .addField('🆔 ID', role.id, true)
  .addField('👥 usuários usando', role.members.size, true)
  .addField('#️⃣ cor do cargo', role.hexColor, true)
  .addField('📣 todos podem mencionar?', role.mentionable ? '\nsim' : 'não', true)
  .addField('📅 criado em', moment(role.createdAt).format("LLLL"), true)
  .setFooter("");
  message.channel.send(roleinfoEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['rolinfo', 'rolhakkında', 'rolbilgi'],
  permLevel: 0,
  kategori: "genel"
};

module.exports.config = {
    name: "roleinfo",
    description: "Pulls the serverinfo of the guild!",
    usage: "!serverinfo",
    accessableby: "Members",
    aliases: ["inforole","cargoinfo"]
}
