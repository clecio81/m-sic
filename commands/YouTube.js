const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {



    let youtube = args.slice(0).join('+');

        let link = `https://www.youtube.com/results?search_query=` + youtube;
        if(!youtube)return message.reply("qual a pesquisa?.")
        if(!link)return message.reply("Console error")
        let embed = new Discord.RichEmbed()
 
         
     .setColor("RED")
         
          .setTimestamp()
        
          .addField('YouTube','© todos os direitos reservados')

          .addField("pesquisa:", `${args.slice(0).join(' ')}`)

          .addField('Link:', `${link}`)
         
          .setFooter(`${message.author.username} `, message.author.avatarURL)
          
              message.channel.send(embed);
              

        
    
}



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['y'],
  permLevel: 0
};

exports.help = {
  name: 'youtube',
  description: '...',
  usage: 'youtube'
};