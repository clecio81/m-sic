const Discord = require ('discord.js')
exports.run =(cleint, message,arga) =>{
let  guild = message.guild;
   let ling = {
            'amsterdam': 'English :flag_nl: Amsterdã',
            'brazil': 'português-br :flag_br: Brasil',
            'eu-central': ' still in english :flag_eu: Europa Central',
            'eu-west': 'still in english :flag_eu: Europa Ocidental',
            'frankfurt': 'still in english :flag_de: Frankfurt',
            'hongkong': 'still in english :flag_hk: Hong Kong',
            'japan': '日本人 :flag_jp: 日本',
            'london': 'still in english :flag_gb: Londres',
            'russia': 'русский :flag_ru: Russia',
            'singapore': 'still in english :flag_sg: Singapura',
            'sydney': 'still in english :flag_au: Sydney',
            'us-central': 'English :flag_us: EUA Central',
            'us-east': 'English  :flag_us: EUA Oriental',
            'us-west': 'English :flag_us: EUA Ocidental',
            'us-south': 'English :flag_us:',
        }[guild.region];
  let lings = new Discord.RichEmbed()
  .setDescription(ling)
  .setThumbnail('https://cdn.discordapp.com/attachments/695761742344749127/699726881297006741/langclecio.png')
  .setTimestamp()
  message.channel.send(lings)
}