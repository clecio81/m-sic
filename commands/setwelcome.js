const fs = require ('fs')
const Discord = require('discord.js')
var sunucuyaözelayarlarOtorol = JSON.parse(fs.readFileSync("././bemvindo/bem.json", "utf8"));


exports.run = async (bot, message, args) => {
 if (!message.member.hasPermission('MANAGE_CHANNELS'))
  return message.reply("você não tem permissão de ``gerenciar canais`` para usar este comando");
 
  	let profil = JSON.parse(fs.readFileSync("././bemvindo/bem.json", "utf8"));
  let mentionedChannel = message.mentions.channels.first();
  const o1 = new Discord.RichEmbed()
  .setTitle('sitema de boas vindas:')
  .setDescription('sistema de boas vindas com autorol,use c!setwelcome ``<cargo>`` ``<canal>``')
  .setColor('RANDOM')
 if (!mentionedChannel && args[0] !== "sıfırla") return message.reply(o1);

    
  //if (!message.member.hasPermission(["MANAGE_CHANNELS"])) return message.channel.send("**Você não tem permissão de ``gerenciar mensagens`` para usar este comando!**");
  {
      let mentionedRole = message.mentions.roles.first();
      if (!mentionedRole) return message.reply('mencione o cargo que irei da assim que o membro entrar no servidor').then(msg => msg.delete(5000));
      

	if(!profil[message.guild.id]){
    
		profil[message.guild.id] = {
      
			sayi: mentionedRole.id,
      kanal: mentionedChannel.id
		};
	}
	
	profil[message.guild.id].sayi = mentionedRole.id
  profil[message.guild.id].kanal = mentionedChannel.id
	
	fs.writeFile("././bemvindo/bem.json", JSON.stringify(profil), (err) => {
		console.log(err)

	})

	const embed = new Discord.RichEmbed()
  .setTitle('sistema de boas vindas ativado!')
		.setDescription(`sistema ativado, quando o membro entrar no servidor irei da o cargo ${mentionedRole} assim que o membro entrar irei enviar uma mensagem de boas vindas no canal ${mentionedChannel}`)
		.setColor("RANDOM")
		.setTimestamp()
	message.channel.send({embed})
}

}



module.exports.config = {
    name: "resgatar",
    description: "Pulls the serverinfo of the guild!",
    usage: "!serverinfo",
    accessableby: "Members",
    aliases: ["setbem-vindo", "welcome", "bem-vindo","bemvindo"]
}
