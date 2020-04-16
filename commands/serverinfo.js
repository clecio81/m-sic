const Discord = require('discord.js')
const moment = require("moment")
moment.locale("pt-BR")
exports.run = (client,message,args)=>{
        
        if (!message.guild.available) return;
        moment.locale('pt-br');
    
    
        let guild;
    
        if (args[0]) {
            guild = client.guilds.get(args[0]);
        } else {
            guild = message.guild;
        }
    
        let serverRegion = {
            'amsterdam': ':flag_nl: Amsterdã',
            'brazil': ':flag_br: Brasil',
            'eu-central': ':flag_eu: Europa Central',
            'eu-west': ':flag_eu: Europa Ocidental',
            'frankfurt': ':flag_de: Frankfurt',
            'hongkong': ':flag_hk: Hong Kong',
            'japan': ':flag_jp: Japão',
            'london': ':flag_gb: Londres',
            'russia': ':flag_ru: Russia',
            'singapore': ':flag_sg: Singapura',
            'sydney': ':flag_au: Sydney',
            'us-central': ':flag_us: EUA Central',
            'us-east': ':flag_us: EUA Oriental',
            'us-west': ':flag_us: EUA Ocidental',
            'us-south': ':flag_us: EUA Sul',
        }[guild.region];

        let online = message.guild.members.filter(a => a.presence.status == "online").size;
        let ocupado = message.guild.members.filter(a => a.presence.status == "dnd").size;
        let stream = message.guild.members.filter(a => a.presence.status == "stream").size;
        let ausente = message.guild.members.filter(a => a.presence.status == "idle").size;
        let offline = message.guild.members.filter(a => a.presence.status == "offline").size;
        let bot = message.guild.members.filter(a => a.user.bot).size;
        let totalmembros = message.guild.memberCount;
        let canaistexto = message.guild.channels.filter(a => a.type === "text").size;
        let canaisvoz = message.guild.channels.filter(a => a.type === "voice").size;
        let msgembed = {
            embed: {
                title: "Informações do Servidor:",
                fields: [
                    {
                        name: "",
                        value: "",
                        inline: true,
                    },
                ]
            }};
        let embed = new Discord.RichEmbed()
            .setTitle("Informações do Servidor:")
            .addField(":globe_with_meridians:__**ID:**__:", `${message.guild.id}`, true)
            .addField(":earth_americas: __**Região:**__:", `${serverRegion}`, true)
            .addField("💻__**Nome do servidor:**__:", `${message.guild.name}`, true)
            .addField(":crown: __**Dono(a):**__:", `<@${message.guild.owner.id}>`, true)
            .addField("😝  __**Emojis:**__:", `\`\`\`${message.guild.emojis.size}\`\`\``, true)
            .addField(":diamond_shape_with_a_dot_inside:  Cargos:", `\`\`\`${message.guild.roles.size}\`\`\``, true)
            .addField(":speech_balloon:  __**Total de Canais:**__", `\`\`\`${canaistexto+canaisvoz}\`\`\``, true)
            .addField(":pencil2: __**Texto:**__:", `\`\`\`${canaistexto}\`\`\``, true)
            .addField(":speaking_head: __**Voz:**__:", `\`\`\`${canaisvoz}\`\`\``, true)
            .addField(":busts_in_silhouette: __**Membros:**__", `\`\`\`${totalmembros}\`\`\``, true)
            .addField(":information_desk_person: __**Pessoas:**__" ,`\`\`\`${message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size}\`\`\``, true)
            .addField("🤖 __**Bots:**__:", `\`\`\`${bot}\`\`\``, true)
            .addField("🍭__**Online:**__:", `\`\`\`${online}\`\`\``, true)
            .addField("🔸__**Ausente:**__:", `\`\`\`${ausente}\`\`\``, true)
            .addField("🔺__**Ocupado:**__:", `\`\`\`${ocupado}\`\`\``, true)
            .addField("⚜__**Transmitindo:**__:", `\`\`\`${stream}\`\`\``, true)
            .addField("⚪__**Offline:**__:", `\`\`\`${offline}\`\`\``)
            .addField(":watch: __**Criado em:**__:", `${moment(message.guild.createdAt).format('LLLL')}`)
            .setThumbnail(`${message.guild.iconURL}?size=2048`)
            .setFooter(`Comando solicitado por: ${message.author.tag}`, message.author.avatarURL)
            .setColor("#ff0022")
            .setTimestamp();

    message.channel.send(embed)    

}
module.exports.config = {
    name: "serverinfo",
    description: "Pulls the serverinfo of the guild!",
    usage: "!serverinfo",
    accessableby: "Members",
    aliases: ["servidor","si"]
}
