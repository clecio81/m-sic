const errors = require("discord.js");

exports.run = async (client, message, args, con) => {
 if (!message.member.hasPermission("BAN_MEMBERS"))
    return errors.noPerms(message, "BAN_MEMBERS");
  let mention = message.mentions.users.first();
  let amount;
  if (mention) {
    amount = 100;
  } else {
    amount = parseInt(args[0]);
    if (!amount || (amount < 1 && amount > 100))
      return message.channel.send(
        ":x:Selecione um número de menssagens para ser apagadas <``número de 1 a 100``>"
      );
    amount = Math.min(amount + 1, 100);
  }

  try {
    let messages = await message.channel.fetchMessages({ limit: amount });
    messages = messages.filter(
      m => m.createdTimestamp >= Date.now() - 1179360000
    );
    let mention = message.mentions.users.first();
    if (mention)
      messages = messages.filter(
        m => m.author.id === mention.id || m.content === message.content
      );
    let pruned = messages.size;
    if (pruned < 2)
      return message.channel.send(
        "Nenhuma mensagem removível foi encontrada ."
      );
    await message.channel.bulkDelete(messages);

    message.channel
      .send(
        `:wastebasket:  |  Sucesso foram removidas ${
          pruned === amount ? pruned - 1 : pruned
        } Mensagens .`
      )
      .then(m => m.delete(5000));
  } catch (e) {
    message.channel.send(`Falha na remoção das mensagens : ${e.message}`);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["pru"],
  permLevel: 0
};

exports.help = {
  name: "limpar",
  description: "Gives you a random response to a question.",
  usage: "8ball [question]"
};
