const Discord = require('discord.js');
const Canvas = require('canvas');
const snekfetch = require('node-superfetch');
const db = require('quick.db');
const utils = require("../utils.js");
const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');

	// Declare a base size of the font
	let fontSize = 77;

	do {
		// Assign the font to the context and decrement it so it can be measured again
		ctx.font = `${fontSize -= 1}px Arial`;
		// Compare pixel width of the text to the canvas minus the approximate avatar size
	} while (ctx.measureText(text).width > canvas.width - 300);

	// Return the result to use in the actual canvas
	return ctx.font;
};
exports.run = async (client, message, args) => {
 // if(message.author.id !== "592045792391594061") return message.channel.send("🛠️| Oops! Esse comando foi temporariamente desativado!")
  message.delete()
    let user = message.mentions.users.first() || message.author;
  let level = await db.fetch(`level_${user.id}`);
  let vip = await db.fetch(`vip_${user.id}`)
    if(vip === null) vip = ''
    if(vip === true) vip = 'usuário vip'
 if (level === null) level = '0';
 let xp = await db.fetch(`xp_${user.id}`)  
 if (xp === null) xp = '0';
  let need = utils.need(level+1);
  let users = message.mentions.users.first() || message.author;
  let target = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
  const canvas = Canvas.createCanvas(800, 600);
  const ctx = canvas.getContext('2d');
  let im = await db.fetch(`im_${user.id}`);
  if (im === null) im = 'https://cdn.discordapp.com/attachments/683369820472999991/691741782312091710/11_Sem_Titulo_20200323171444.png';
const gg = await Canvas.loadImage(im);
  ctx.drawImage(gg, 0, 0, 800, 600);
  const fundo = await Canvas.loadImage('https://cdn.discordapp.com/attachments/682318286234714213/690181304041603189/1_Sem_Titulo_20200319095348.png');
  ctx.drawImage(fundo, 0, 0, 800, 600);{
    let sobre = await db.fetch(`sobre_${user.id}`);
    if(sobre === null) sobre = 'use c!bio para add uma biografia';
  let money = await db.fetch(`money_${user.id}`);
    if(money === null) money = '0'
 /* const icon = await Canvas.loadImage('https://twemoji.maxcdn.com/2/72x72/1f4c8.png'); 
  ctx.drawImage(icon, 425, 215, 86, 86);*/
  /*  const applyText = (canvas, text) => {*/
ctx.font = applyText(canvas,`${user.username}`);
 ctx.fillStyle = '#ffffff';         
ctx.fillText(`${user.username}`, 170, 89);
  //mostrar o level
    ctx.font = "60px Arial"
  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.fillText(`level ${level}`,587, 250)
  ctx.font = "60xp Arial";
 ctx.fillStyle = "#ffffff"; 
  ctx.fillText(`XP ${xp}/${need}`,600,179, 200, 150)
  const avatar = await Canvas.loadImage(users.avatarURL);
  ctx.drawImage(avatar, 10, 10, 102, 92);
  /*  ctx.font = applyText(canvas,`${sobre}`)
  ctx.fillText(`${sobre}`, 9, 550);*/
    ctx.font = applyText(canvas, `${sobre}`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${sobre}`,8,550);
    ctx.font = '45px Stencial Std'
    ctx.fillText(` dinheiro: ${money}$`,80, 150)
    ctx.fillText(`${vip}`,73,500)
const bj = new Discord.Attachment(canvas.toBuffer(), 'Clecio.png');
  message.channel.send(bj);
  }
};
                    

                   
module.exports.config = {
    name: "perfil",
    description: "Pulls the serverinfo of the guild!",
    usage: "!serverinfo",
    accessableby: "Members",
    aliases: ["profile","procfile"]
}
