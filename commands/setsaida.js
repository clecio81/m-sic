const fs = require ('fs')
const Discord = require('discord.js')
var sunucuyaözelayarlarOtorol = JSON.parse(fs.readFileSync("././saida/saida.json", "utf8"));


exports.run = async (bot, message, args) => {
 if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("você não tem permissão de ``gerenciar canais`` para usar este comando");
 
  	let profil = JSON.parse(fs.readFileSync("././saida/saida.json", "utf8"));
  let mentionedChannel = message.mentions.channels.first();
  const o1 = new Discord.RichEmbed()
  .setTitle('sitema de saida:')
  .setDescription('sistema de saida,use c!setsaida ``<canal>``')
  .setColor('RANDOM')
 if (!mentionedChannel && args[0] !== "sıfırla") return message.reply(o1);

    
  if (!message.member.hasPermission(["MANAGE_CHANNELS"])) return message.channel.send("**Você não tem permissão de ``gerenciar mensagens`` para usar este comando!**");
  {
     /* let mentionedRole = message.mentions.roles.first();
      if (!mentionedRole) return message.reply('mencione o cargo que irei da assim que o membro entrar no servidor').then(msg => msg.delete(5000));
      */

	if(!profil[message.guild.id]){
    
		profil[message.guild.id] = {
      
		//	sayi: mentionedRole.id,
      kanal: mentionedChannel.id
		};
	}
	
	//profil[message.guild.id].sayi = mentionedRole.id
  profil[message.guild.id].kanal = mentionedChannel.id
	
	fs.writeFile("././saida/saida.json", JSON.stringify(profil), (err) => {
		console.log(err)

	})

	const embed = new Discord.RichEmbed()
  .setTitle('sistema de saida ativado!')
		.setDescription(`sistema ativado, para o canal ${mentionedChannel}`)
		.setColor("RANDOM")
		.setTimestamp()
	message.channel.send({embed})
}

}



exports.conf =
{
  enabled: true,
  guildOnly: true,
  aliases: ["setbem-vindo", "welcome", "bem-vindo","bemvindo"],
  permLevel: 3,
  kategori: "moderasyon"
}

exports.help =
{
  komut: 'otorol',
  description: 'Sunucuya Girenlere Verilecek Olan Otorolü Ayarlar.',
  usage: 'otorolayarla'
}