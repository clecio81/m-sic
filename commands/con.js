var Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
    let user = message.mentions.users.first();
    if(!user) return message.reply("você precisa mencionar alguém para beijar!");
    let gifs = ['https://media.discordapp.net/attachments/495603769317261312/497179148066881576/6fc25fdd3e22d89b19c3ea76d11789e6.gif?width=400&height=224', 'https://media.discordapp.net/attachments/495603769317261312/497213957191237633/giphy_3.gif?width=400&height=225'] 
    let random = Math.round(Math.random() * gifs.length);
    let embed = new Discord.RichEmbed()
        .setDescription(`**${message.author.username}** deu um Beijo em <3 **${user.username}**.`)
        .setImage(gifs[gifs.length == 1 ? 0 : random == 0 ? random + 1 : random - 1])
        .setColor('RANDOM')
        .setFooter(`Quem beijou foi o: ${message.author.tag}`, message.author.avatarURL)
        .setTimestamp()

    message.channel.send(embed);
}

module.exports.help = {
    name: "beijar"
    }