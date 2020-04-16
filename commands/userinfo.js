const { RichEmbed } = require("discord.js");
const moment = require("moment");
moment.locale("pt-br")

exports.run = (client, message, args) => {
	let target = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
	let createdAt = moment(target.user.createdAt).format("D MMM YYYY, h:mm a");
	let joinedAt = moment(target.joinedAt).format("D MMM YYYY, h:mm a");

	let embed = new RichEmbed()
		.setColor(target.displayColor)
		.setThumbnail(target.user.displayAvatarURL)
		.addField("Nome do usuário ", target.user.tag, true)
		.addField("Nickname", target.nickname || "Não possue", true)
		.addField("ID", target.id, true)
		.addField("conta criada em", `${moment(message.guild.creatdAt).format('LLLL')}`)
		.addField("entrou no servidor em", `${moment(message.guild.joinedAt).format('LLLL')}`)
  
     .addField("status",target.user.presence.status)
     .addField("jogando🎮",target.user.presence.game || "nada no momento" ,true)

		.setTimestamp();
	message.channel.send(embed);
}

module.exports.config = {
    name: "userinfo",
    description: "Pulls the serverinfo of the guild!",
    usage: "!serverinfo",
    accessableby: "Members",
    aliases: ["ui","infouser"]
}
