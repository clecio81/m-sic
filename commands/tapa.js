var Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
    let user = message.mentions.users.first();
    if(!user) return message.reply("você precisa mencionar alguém para beijar!");
    let gifs = ['https://i.pinimg.com/originals/a5/9d/f3/a59df307e6bb26c6c0f1d726675ee934.gif'] 
    let random = Math.round(Math.random() * gifs.length);
    let embed = new Discord.RichEmbed()
        .setDescription(`:scream_cat: **<@${message.author.id}>** **deu um tapa em** **<@${user.id}>!**`)
        .setImage(gifs[gifs.length == 1 ? 0 : random == 0 ? random + 1 : random - 1])
        .setColor('RANDOM')
        .setFooter(`Clique em 🔁 para retribuir!`)

    message.delete().catch(O_o=>{})
    message.channel.send(embed);
}

module.exports.help = {
    name: "beijar"
    }