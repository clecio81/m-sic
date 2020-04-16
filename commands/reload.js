const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  //if(message.author.id !== "472570458756218880") return message.channel.send("<a:no:619235696267362304> | Oops! Esse comando foi temporariamente desativado!").then(msg => msg.delete(10000));

  if (
    !message.guild.members
      .get("627099725337853952")
      .hasPermission("MANAGE_CHANNELS")
  )
    return message.channel
      .send(
        "<a:no:619235696267362304> **»** Oops! Eu não tenho permissão para `Gerenciar Canais`"
      )
      .then(msg => msg.delete(6000));
  if (!message.member.hasPermission("MANAGE_CHANNELS"))
    return message.channel
      .send(
        "<a:no:619235696267362304> **»** Oops! Você não tem a permissão de `Gerenciar Canais` para utilizar este comando."
      )
      .then(msg => msg.delete(6000));

  if (!args[0])
    return message.channel
      .send(
        `> <a:no:619235696267362304> **»** utilize: \`${client.prefix}slowmode\` **<tempo>**`
      )
      .then(msg => msg.delete(6000));

  message.channel.setRateLimitPerUser(args[0]);

  message.channel
    .send(
      `> <a:google:620774879213649953> » O Tempo do **Slowmode** foi alterado para \`${
        args[0]
      }\` com sucesso!`
    )
    .then(msg => msg.delete(10000));
};

module.exports.help = {
  categoria: 'moderação',
  name: 'slowmode'
}

