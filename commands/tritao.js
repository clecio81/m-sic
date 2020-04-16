const Discord = require("discord.js")
const { RichEmbed } = require("discord.js")

module.exports.run = (client, message, args) => {

let roleu = message.mentions.roles.first() || message.guild.roles.get(args[0])
let user = message.mentions.members.first() || message.guild.members.get(args[1])
let role = message.mentions.roles.first() || message.guild.roles.get(args[2])

if (!message.member.guild.roles.find(role => role.name === '⋆Tritão⋆ Cafetão 💸')) {
  
  const embed = new Discord.RichEmbed()
  
  .setTitle('Erro!')
  .setDescription("Você não possui o cargo ${role.name}  para utilizar este comando.")
  .setColor("RED")
  .setTimestamp()
  .setFooter(message.author.tag, message.author.displayAvatarURL)
    
  return message.reply(embed)

}

if(!user) {
  
  const embed = new Discord.RichEmbed()
  
  .setTitle('Erro!')
  .setDescription("Você não mencionou quem deve ser o usuário!")
  .setColor("RED")
  .setTimestamp()
  .setFooter(message.author.tag, message.author.displayAvatarURL)
    
  return message.reply(embed)

} else if(!role) {
  
  const embed = new Discord.RichEmbed()
  
  .setTitle('Erro!')
  .setDescription("Você não mencionou qual o cargo do vip!")
  .setColor("RED")
  .setTimestamp()
  .setFooter(message.author.tag, message.author.displayAvatarURL)
    
  return message.reply(embed)

} else {

  const embed = new Discord.RichEmbed()
  
  .addField("<a:grelinndediao:632213058319679488> • Sistema Vip", "`»` **[Vip adicionado com sucesso!](https://discordapp.com/oauth2/authorize?client_id=606584975566962708&scope=bot&permissions=8)**")
  .addField("<a:hahschupacabea:630212380592439316> Membro", ` ${user}`, true)
  .addField("<a:hahschupacabea:630212380592439316> Dono", ` ${message.author}`, true)
  .addField("<a:hahschupacabea:630212380592439316> Cargo", ` ${role}`, true)
  .setThumbnail(message.author.avatarURL)
  .setFooter(`${message.author.tag}`, message.author.avatarURL)
  .setColor('#9603ff')
  message.delete().catch(O_o=>{});
  
  user.addRole(role)
  console.log(`[ADDVIP.JS] -> ${user} recebeu o Vip ${role}`)
  
  return message.channel.send(embed)
  user.addRole(role)
}
                                          
  
}

module.exports.info = {
name: "addvip"
}