const config = require('../config.json')
const Discord = require ('discord.js');
const ms = require('ms');

exports.run = async (client, message, args) => {
  if (message.member.hasPermission('ADMINISTRATOR')){ 
    const mensagem = args.slice(0).join(" ");
    if (mensagem){
      message.channel.send(`${message.author} | Anúncio geral enviado com sucesso.`)
      message.guild.members.forEach(member => {
        if (member.id != client.user.id){
          if (!member.user.bot){
            const embed = new Discord.RichEmbed()
            .setTitle(`Um anúncio foi enviado`)
            .setDescription(`${mensagem}`)
            .setFooter(`Enviado por ${message.author.username}`, message.author.avatarURL)
            .setColor('RANDOM');
            member.send({embed}).catch(console.error);
            message.delete(message.author);
            }
          }
        });
    }
    else{
      const embed = new Discord.RichEmbed()
      .setTitle('Utilize `c!dm <mensagem>` para enviar uma mensagem direta para todos os membros.')
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
                          

exports.config = {
    name: 'dmall',
    aliases: [''],
    usage: 'dmall',
    desc: 'Utilize para enviar uma mensagem geral'
}