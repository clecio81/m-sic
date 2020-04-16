const Discord = require('discord.js');
exports.run = (client, message, args) => {
    if (!message.guild) {
      return message.channel.send(new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle('Eval;')
      .setDescription(message.author.username + ', você não pode usar este comando em uma mensagem direta.')
      .setFooter('', client.user.avatarURL).setTimestamp()); }
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 2) return message.channel.send(new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle('1vs1')
      .setDescription(message.author.tag + ', Use: **c!batalha** \`<@User1>\` \`<@User2>\`')
      .setFooter('', client.user.avatarURL)
      .setTimestamp());
    var sans = ["10'a","1'e","20'ye","30'a","2 ye"]
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
      message.channel.send(new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle('1vs1')
        .setDescription('A guerra começou!')
        .setFooter('Guerra dos perturbados.', client.user.avatarURL)
        .setTimestamp())
      .then(nmsg => nmsg.edit(new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle('1vs1')
        .setDescription('Pat Pat.')
        .setFooter('Guerra dos Profissionais.', client.user.avatarURL)
        .setTimestamp()))
      .then(nmsg => nmsg.edit(new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle('1vs1')
        .setDescription('Pat Pat.')
        .setFooter('Guerra de profissionais está sendo feita.', client.user.avatarURL)
        .setTimestamp()))
      .then(nmsg => nmsg.edit(new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle('1vs1')
        .setDescription('Pat está lutando.')
        .setFooter('Guerra dos Profissionais.', client.user.avatarURL)
        .setTimestamp()))
      .then(nmsg => nmsg.edit(new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle('1vs1')
        .setDescription('A guerra está chegando')
        .setFooter('Guerra dos Profissionais.', client.user.avatarURL)
        .setTimestamp()))
      .then(nmsg => nmsg.edit(new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle('1vs1')
        .setDescription('A guerra acabou!')
        .setFooter('Guerra dos Profissionais.', client.user.avatarURL)
        .setTimestamp()))
      .then(nmsg => nmsg.edit(new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle('1vs1')
        .setDescription('Vencedor da Batalha: **' + user.tag+'** O que diabos você conseguiu? **'+ sonuc +'** E o homem desistiu.')
        .setImage("https://media.giphy.com/media/3oEhmVCSmpW56nR6rm/giphy.gif")
        .setFooter('1vs1 A guerra acabou.', client.user.avatarURL)
        .setTimestamp()))
        };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: '1vs1',
  description: 'Seçtiğiniz 2 kişiyi savaştırırsınız.',
  usage: '1vs1 <@kullanıcı> <@kullanıcı>'
};