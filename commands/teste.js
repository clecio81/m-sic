const prefix = "c!";
exports.run = async (client, message, args) => {
  if (!message.content.startsWith(prefix)) return;
    message.delete().catch(O_o=>{})

  message.reply("carregando sistema de hackeamento").then(async msg => {
    setTimeout(() => {
      msg.edit("hackeado...");
    }, 500);
    setTimeout(() => {
      msg.edit("hackeado.... ");
    }, 1000);
    setTimeout(() => {
      msg.edit("hackeado...");
    }, 1500);
    setTimeout(() => {
      msg.edit("hackeado..");
    }, 2000);
    setTimeout(() => {
      msg.edit("hackeado...");
    }, 2500);
    setTimeout(() => {
      msg.edit("hackeado....");
    }, 3000);
    setTimeout(() => {
      msg.edit("hackeado....");
    }, 3500);
    setTimeout(() => {
      msg.edit(`servidor hackeado com sucesso`);
    }, 4000);
  });
};
