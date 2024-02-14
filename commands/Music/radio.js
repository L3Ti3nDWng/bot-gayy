const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "radio",
  inVc: true,
  sameVc:true,
  // args: true,
  run: async (client, message, args) => {


  const embed = new MessageEmbed()
  .setTitle("Radio Stations")
  .setDescription(`
1. VOV 1
2. VOV 2
3. VOV 3
4. Lofi Chill

*Use \`play radio <number>\` to play radio*`)
 message.reply({ embeds: [ embed ] })

    
   
  }
}