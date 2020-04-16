const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async (client, message, args) => {
var command = message.content
  if (message.member.hasPermission("MANAGE_MESSAGES")){
    const args = message.content.slice().trim().split(/ +/g);
    const command = args.shift().toLowerCase(); 
    let user = message.mentions.users.first();
    if(!user) user = message.author.id;
    let membro = message.mentions.users.first();
    if (membro){
      if (args[1] === membro.mention){
        let nu = await  db.fetch(`register_${message.guild.id}_${user.id}`)
     // let cargo = await db.fetch(`config_${message.guild.id}`)
      //if(cargo === null) = 0;
       let numeros = Math.floor(Math.random() + 0) + 1;
        if(nu === null) nu = 0;
         // let Role = message.guild.roles.find(`name`,cargo)
          const embed = new Discord.RichEmbed()
          .setTitle(':white_check_mark: | Registro concluído!')
          .setDescription(`Staffer: ${message.author} ${nu} membros registrados\nMembro registrado: ${membro}`)
          .setColor(0xFFD400) 
          message.channel.send({embed})
        .then(m => m.delete(5000));
          message.delete(message.author)
        let gg = new Discord.RichEmbed()
        .setDescription(`você foi registrado no ${message.guild.name}\n registrado por: ${message.author.tag}`)
        .setImage('https://blog.contaazul.com/hubfs/assets/blog/images/2017/blog-contaazul-receba-facil.gif')
        .setTimestamp ()
       // .addField('cargos:',membro.roles.map(r => `${r}`).join(' | '), true)
          user.send(gg)
    db.set(`register_${message.guild.id}_${user.id}`,numeros)
  //membro.removeRole('692964875672223765')
      }
      else{
        const embed = new Discord.RichEmbed()
        .setTitle('Utilize `c!registrar <membro> ` para registrar algum membro.')
        .setColor(0xFF0000) 
        message.channel.send({embed});              
      }
    }
    else{
      const embed = new Discord.RichEmbed()
      .setTitle('Utilize `c!registrar <membro> ` para registrar algum membro.')
      .setColor(0xFF0000) 
      message.channel.send({embed});      
    }
  }
  else{
    const embed = new Discord.RichEmbed()
    .setTitle(`Você não tem permissão para executar este comando.`)
    .setColor(0xFF0000) 
    message.channel.send({embed});
  }

}
module.exports.config = {
    name: "registrar",
    description: "Pulls the serverinfo of the guild!",
    usage: "!serverinfo",
    accessableby: "Members",
    aliases: ["register"]
}
