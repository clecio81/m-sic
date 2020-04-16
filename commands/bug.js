const Discord = require('discord.js'); 
exports.run = async (client, message, args) => {
    let sugestao = args.join(' ');
  
    if (sugestao.length < 1) return message.reply('me diga qual foi o bug que você encontrou,assim podemos trabalhar juntos!')
   message.channel.send('bug enviado com sucesso,assim poderemos evoluir com mais força!')
    let embed = new Discord.RichEmbed()
  .setColor(0xfb91e9)
  .setTitle("**Bug**")
  .setDescription("**Novo relatório:**")
  .addField("Usuário:",`<@${message.author.id}>`,true)
  .addField("ID:",`${message.author.id}`,true)
  .addField("Servidor:",`**${message.guild.name}**`,true)
  .addField("Canal:",`<#${message.channel.id}>`,true)
  .addField("**Assunto:**", `${sugestao}`)
  .setTimestamp();
    let m = await client.channels.get('696466356039581709').send(embed);
    await m.react('👍');
    message.react('👍')
}
