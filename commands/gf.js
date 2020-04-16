const Discord = require ('discord.js')
exports.run = function(client, message, args) {
  if (!(message.author.id == '578956574480007183' || message.author.id == '467472722491080724')) return message.channel.send(`comando em desenvolver`)
  let arg = args.join(' ');
 let gg = new Discord.RichEmbed()
  .setTitle("sobre,status personalizado")
 .setDescription("use c!streming <status que você deseja colocar>",'cada status personalizado custa 5.000 clCoins')
  if(!arg){ 
    return message.channel.send(gg)
    console.log(`novo status ${arg}`)
    } else if(arg){
client.user.setGame(arg, 'https://www.twitch.tv/Clécio');
let bb = new Discord.RichEmbed()
  .setTitle('status adicionado')
  .setDescription(`status setado para: ${arg}`)
   return message.channel.send(bb)
 
      
}
}