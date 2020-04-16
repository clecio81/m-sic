const db = require('quick.db')
const Discord = require('discord.js')
module.exports.run = async(client, message, args) => {
  var gg = message.author;
  let author = db.fetch(`moneys_${message.author.id}`)
  if(!author >= 99) return message.channel.send("você não possue dinheiro suficiente para comprar uma biografia, você precisa de 100 Cl's")
  let agora = args.join(" ")
    let user = message.author || message.mentions.members.first()
    let sobre = await db.fetch(`sobre_${user.id}`);
    if(!args[0]){
        message.channel.send("Você precisa colocar uma frase")
     // if(message.suffix.length >= 120) return message.channel.sens("&&")
    }else{
        db.set(`sobre_${user.id}`, agora);
      db.subtract(`moneys_${message.author.id}`,100)
        let bio = new Discord.RichEmbed()
        .setDescription(`biogragia atualizada para: ${agora}`)
        .addField("cada bio atualizada tem um valor a ser gasto",'valor da biografia ``100$``')
        message.channel.send(bio)
      let invite = await message.channel.createInvite()
      let gg = new Discord.RichEmbed()
      .setDescription(`Sua Carteira acaba de ser acessada a partir de um novo servidor  ${message.guild.name}/${message.channel}, Você está recebendo este mensagem para garantir que foi você.`)
      .addField("© Todos os direitos reservados",`[verificar atividade](${invite})`)
      message.author.send(gg)
      };
}
 
//return message.channel.send("limite de 50 caracterís ultrapassado")
 
                      


