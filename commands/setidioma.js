 const db = require('quick.db')
const Discord = require ('discord.js')
exports.run = async (client, message, args) => {
 let idiomas = await db.fetch(`idioma_${message.guild.id}`)   
 if(idiomas === null) idiomas = 'pt';
 const lang = require(`../idioma/${idiomas}.json`) 
 let erro = new Discord.RichEmbed()
 .setTitle(lang.idioma.idiomaerro2)
 .setDescription(`${lang.idioma.idiomapergunta} \nen 🇺🇲\nes 🇪🇸\npt 🇧🇷 `)
 .setTimestamp()
 if (!['en', 'es', 'pt'].includes(args[0])) {
   return message.channel.send(erro)
 } else {
   let idiomas = await db.fetch(`idioma_${message.guild.id}`)   
 if(idiomas === null) idiomas = 'pt';
   const lang = require(`../idioma/${idiomas}.json`) 
   let texto = args[0]
   let up = new Discord.RichEmbed()
 .setDescription(`${lang.idioma.idiomaup}**${texto}**`)
   .setTimestamp()
 message.channel.send(up)
   db.set(`idioma_${message.guild.id}`,args[0])
 }
}
module.exports.config = {
    name: "setidioma",
    description: "Pulls the serverinfo of the guild!",
    usage: "!serverinfo",
    accessableby: "Members",
    aliases: ["setlanguage","language"]
}
