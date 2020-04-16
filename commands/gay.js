const Discord = require('discord.js');
const superagent = require('superagent')

exports.run = (client, msg, args) => {
  if (msg.channel.nsfw === false) return msg.channel.send("tente em um canal NSFW");
  if(msg.channel.nsfw === true){
    let gifs = ['https://18gayteen.com/wp-content/uploads/2018/10/suck.gif','https://lh5.googleusercontent.com/proxy/LitEMwRmwA8EvaLZ4vrtBYjQRA-XzrMQz0RPXW-QjOWs3ZLHIf78PQmMwfECzY8hBXpzCcMY3ICfqIkbEYSi3-b_IJeKLrwvu0jZNjy7XwZt6vfDzRAM8q8Fu6LyZNQHiGVn0lCr_2CNJAEF_0SPhxLn8cXl7N778M2jiFpTGEu8=w358-h411','https://allfreegaycams.com/wp-content/uploads/gif/762.gif']
      let random = Math.round(Math.random() * gifs.length);
    let gg = new Discord.RichEmbed()
      .setImage(gifs[gifs.length == 1 ? 0 : random == 0 ? random + 1 : random - 1])
    .setColor('#36393F')
    msg.channel.send(gg)
   // msg.channel.send("tente em um canal NSFW!")
  }
}