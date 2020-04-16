const db = require('quick.db')
exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("você não possui permissão para isso,desculpe")
  let role = args.join(" ")
  if (!role) return message.reply("especifique o cargo!");
  let gRole = message.guild.roles.find(`name`, role);
  if (!gRole)
    return message.reply(
      "Não consigo achar o cargo verifique se o nome do cargo está com @ se tive retire")
      db.set(`config_${message.guild.id}`,role)
  message.channel.send(`registro configurado cargo: ${role}`)
}