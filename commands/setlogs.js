const fs = require ('fs')
const Discord = require('discord.js')
var sunucuyaözelayarlarOtorol = JSON.parse(fs.readFileSync("././cargo/cargos.json", "utf8"));


exports.run = async (bot, message, args) => {
  	let profil = JSON.parse(fs.readFileSync("././cargo/cargos.json", "utf8"));
 //if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("você não tem permissão de ``gerenciar canais`` para usar este comando");
  var mentionedChannel = message.mentions.channels.first();
  const o1 = new Discord.RichEmbed()
  .setTitle('sitema de auditoria:')
  .setDescription('sistema de auditoria ,use c!setlogs  ``<canal>``')
  .setColor('RANDOM')
  if (!mentionedChannel && args[0] !== "sıfırla") return message.channel.send(o1);
  
    
  //  if (!message.member.hasPermission(["ADMINISTRATOR"])) return message.rep("**Você não tem permissão de ``administrador`` para usar este comando!**");
  {
      

	if(!profil[message.guild.id]){
    
		profil[message.guild.id] = {
      
			
      kanal: mentionedChannel.id
		};
	}
	
	
  profil[message.guild.id].kanal = mentionedChannel.id
	
	fs.writeFile("././cargo/cargos.json", JSON.stringify(profil), (err) => {
		console.log(err)

	})

	const embed = new Discord.RichEmbed()
  .setTitle('sistema de auditoria ativado!')
		.setDescription(`sistema de auditoria ativado com sucesso, para o canal: ${mentionedChannel}`)
		.setColor("RANDOM")
		.setTimestamp()
	message.channel.send({embed})
}

}



module.exports.config = {
    name: "setlogs",
    description: "Pulls the serverinfo of the guild!",
    usage: "!serverinfo",
    accessableby: "Members",
    aliases: ["ferramenta"]
}
