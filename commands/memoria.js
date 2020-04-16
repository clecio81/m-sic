exports.run = (client, message, args) => {
    message.reply(`**Memoria usada:** ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}mb :timer:`);
}
module.exports.config = {
    name: "memoria",
    description: "Pulls the serverinfo of the guild!",
    usage: "!serverinfo",
    accessableby: "Members",
    aliases: ["memory","memorybot"]
}
