const db = require('quick.db')
const Discord = require('discord.js')
module.exports.run = async(client, message, args) => {
  var gg = message.author;
  let author = db.fetch(`moneys_${message.author.id}`)
  if (author ==! 10) return message.reply("você não possue dinheiro suficiente para comprar um background, você precisa de 1000 Cl's")
  let agora = args.join(" ")
    let user = message.author || message.mentions.members.first()
    let agoras = await db.fetch(`im_${user.id}`);
    if(!args[0]){
        message.channel.send("Você precisa colocar um link de uma imagem!");
    }else{
        db.set(`im_${user.id}`, agora);
      db.subtract(`money_${message.author.id}`,1000)
        let bio = new Discord.RichEmbed()
        .addField("cada background atualizada tem um valor a ser gasto",'valor da biografia ``1000$``')
        message.channel.send(bio)
      let gg = new Discord.RichEmbed()
      let invite = await message.channel.Create.Invite()
      .setDescription(`Sua Carteira acaba de ser acessada a partir de um novo servidor  ${message.guild.name}/${message.channel}, Você está recebendo este mensagem para garantir que foi você.`)
      .addField("© Todos os direitos reservados",`[verificar atividade](https://discord.gg/k4yCnTN)`)
      message.author.send(gg)
      message.delete()
      };
 
//return message.channel.send("limite de 50 caracterís ultrapassado")
 }
                                                     
   
module.exports.config = {
    name: "im",
    description: "Pulls the serverinfo of the guild!",
    usage: "!serverinfo",
    accessableby: "Members",
    aliases: ["setbackground", "background"]
}

