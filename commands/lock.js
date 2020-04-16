var Discord = require ('discord.js')
module.exports.run = (client, message, args) => {
    var permission = new Discord.RichEmbed()
      .setDescription("❎ **|** Você não tem permissão para usar esse comando.")
    if(!message.member.hasPermission("ADMINISTRATOR"))  return message.channel.send(permission)
    if(!message.guild.members.get(message.author.id).roles.find("name" , "@everyone")) {
        
        }
    var da = message.guild.roles.find("name","@everyone")
    var da1 = message.guild.roles.find('name', "Clécio")
    message.channel.overwritePermissions(da, {
        SEND_MESSAGES: false
        
        
      })
    
      message.channel.overwritePermissions(da1, {
        SEND_MESSAGES: true
    
      })
      var channel = new Discord.RichEmbed()
      .setTitle("__ação__|** trancar canal**")
      .addField("canal",`**${message.channel}**`)
      .addField("executor",`**${message.author}**`)
      .setColor('RANDOM')
      message.channel.send(channel)

}

module.exports.help = {
    name: "chat-off"
}