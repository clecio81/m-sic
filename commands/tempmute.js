const ms = require("ms");
exports.run = async (client, message, args) => {
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
  if(!tomute) return message.reply("use: c!tempmute <@user> <s/h/d/m>");
  if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("você não tem permissão para utilizar este comando");
 if(client.hasPermission("KICK_MEMBERS")) return message.reply("não tenho permissão para silenciar este usuário");
  let muterole = message.guild.roles.find(`name`, "Muted");
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  
  let mutetime = args[1];
  let tempo = message.content.split(" ").slice(2).join(" ")
  if(!mutetime) return message.reply("especifique um tempo");
  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> foi mutado por ${tempo}`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> foi desmutado pelo **motivo:** o tempo de silêncio do usuário expirou,** tempo de ${tempo}**`);
  }, ms(mutetime));
}

module.exports.config = {
    name: "tempmute",
    description: "Pulls the serverinfo of the guild!",
    usage: "!serverinfo",
    accessableby: "Members",
    aliases: ["tm"]
}
