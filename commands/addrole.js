const errors = require("discord.js");
const { RichEmbed } = require("discord.js");
const Discord = require("discord.js");
exports.run = async (client, message, args) => {
 if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("sem permissão, desculpe")
//  return errors.noPerms(message, "MANAGE_ROLES");
  if (!args[0] || args[0] == "help") {
    return message.channel.send("mencione o utilitário");
  }
  let rMember =
    message.guild.member(message.mentions.users.first()) ||
    message.guild.members.get(args[0]);
  if (!rMember) return errors.cantfindUser(message.channel);
  let role = args.join(" ").slice(22);
  if (!role) return message.reply("especifique o cargo!");
  let gRole = message.guild.roles.find(`name`, role);
  if (!gRole)
    return message.reply(
      "Não consigo achar o cargo verifique se o nome do cargo está com @ se tiver o retire."
    );

  if (rMember.roles.has(gRole.id))
    return message.reply("Ele já possue esse cargo 😉.");
  await rMember.addRole(gRole.id);
  const mod = message.author;
  let user = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );
  const muteembed = new Discord.RichEmbed()
    .setAuthor("usuário promovido ✔️")
    .addField("usuário", `<@${user.id}>`)
    .addField("executor", `${mod}`)
    .addField("cargo", `${gRole.name}`)
    .setColor("RANDOM");
  message.channel.send(muteembed);
};

module.exports.config = {
     name:"addrole",
    description: "Pulls the serverinfo of the guild!",
    usage: "!serverinfo",
    accessableby: "Members",
    aliases: ["cargo", "addcargo"]
}
