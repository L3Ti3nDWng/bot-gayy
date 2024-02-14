const { MessageEmbed } = require('discord.js')
const { ApplicationCommandOptionType } = require('discord-api-types/v9');

module.exports = {
  name: "shuffle",
  description: "Phát nhạc theo thứ tự ngẫu nhiên!",
  inVc: true,
  sameVc: true,
  
  run: async (client, interaction, args) => {
   const player = client.poru.players.get(interaction.guild.id);

   if(player.queue.length <= 2){
  interaction.reply( { color: 'fbc2ff', description: 'Không thể đảo thứ tự hàng chờ.'});
}
player.queue.shuffle()
 
    return interaction.reply( { color: 'fbc2ff', description: 'Đã đảo thứ tự hàng chờ.'});
  }
}
    
