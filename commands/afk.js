exports.run = async (client, msg, args) => {
   if (!args[0]) return msg.channel.send({embed: {
       color: Math.floor(Math.random() * (0xFFFFFF + 1)),
       description: (`**afk ativado **__use c!unafk para sair do modo ausente__`)
 }});
  let name = msg.author.username
  if(msg.author.username.startsWith("[AFK]")){
    msg.reply("AFK ativado")
  }
  else {
    msg.reply("afk ativado")
     msg.member.setNickname(`[AFK]${msg.author.username}`);
  }  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['afk'],
  permLevel: 0
};

/*exports.help = {
  name: 'AFK',
  description: 'AFK olmanızı sağlar.',
  usage: '.afk <sebep>'
};*/
module.exports.config = {
    name: "afk",
    description: "Pulls the serverinfo of the guild!",
    usage: "!serverinfo",
    accessableby: "Members",
    aliases: ["si", "serverdesc"]
}