exports.run =(cleint, message,arga) =>{
let  guild = message.guild;
   let ling = {
            'amsterdam': 'us',
            'brazil': 'us',
            'eu-central': ' en',
            'eu-west': 'still in english :flag_eu: Europa Ocidental',
            'frankfurt': 'still in english :flag_de: Frankfurt',
            'hongkong': 'still in english :flag_hk: Hong Kong',
            'japan': '日本人 :flag_jp: 日本',
            'london': 'still in english :flag_gb: Londres',
            'russia': 'русский :flag_ru: Russia',
            'singapore': 'still in english :flag_sg: Singapura',
            'sydney': 'still in english :flag_au: Sydney',
            'us-central': 'en',
            'us-east': 'English  :flag_us: EUA Oriental',
            'us-west': 'English :flag_us: EUA Ocidental',
            'us-south': 'English :flag_us:',
        }[guild.region];
 
module.exports = {
  "region":"ling",
}
}