const Discord = require('discord.js')
const db = require('quick.db')
module.exports.run = async (client, message, args) =>{
    if (!message.member.hasPermission("ADMINISTRATOR")){
   return message.channel.send(`você não tem permissão para isso.`);
  let texto = args.join(' ')
  let prefixo = await db.fetch(`prefixos_${message.guild.id}`)
  if(prefixo === null) prefixo = 'c!';
  const gg = new Discord.RichEmbed()
  .setTitle('**configuração de prefixo**')
  .setDescription(`**utilise: ${prefixo}prefixo** <e o prefixo que você deseja colocar`)
  .setTimestamp()
  if(!texto){
    return message.channel.send(gg)
  } else{
    db.set(`prefixos_${message.guild.id}`,args[0])
    const cl = new Discord.RichEmbed()
    .setTitle(`**prefixo atualizado**`)
    .addField('novo prefixo:',`**${texto}**`)
    .setAuthor(message.guild.name)
    .addField('administrador:',`**${message.author.tag}**`)
    .setTimestamp()
    if(texto) return message.channel.send(cl)
  }
}
}