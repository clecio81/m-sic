const Discord = require ('discord.js')
module.exports.run = (client, message, args) => {
let info = new Discord.RichEmbed()
.setColor('#36393F')
	.setTitle("novidades, em breve")
  .addField("pet","adote um pet")
   .addField("friends","adicione amigos na sua lista")
  .addField("bff", "adicione seu melhor amigo na sua lista de amigos e perfil")
.addField("crush", " o amor está no ar ❤️")
.addField("loja","faça compras de itens que estão disponíveis na loja")
.addField("giftcard", "reinvidique códigos para ganhar itens ou doe para um amigo")
.addField("petshop", "compre itens para o seu pet")
  .setTimestamp()
message.channel.send(info)
}
             