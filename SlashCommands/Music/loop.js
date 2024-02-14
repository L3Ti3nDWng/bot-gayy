const { MessageEmbed } = require('discord.js')
const { ApplicationCommandOptionType } = require('discord-api-types/v9');

module.exports = {
  name: "loop",
  description: "lặp lại nhạc đang chạy!",
  inVc: true,
  sameVc: true,
  
  run: async (client, interaction, args) => {
   const player = client.poru.players.get(interaction.guild.id);
  
    if (player.loop === 0) {
      player.TrackRepeat();
      interaction.reply( { embeds: [{
        color: 'fbc2ff',
        description: `Đã bật loop 1 bài nhạc`
      }]})
    } else if (player.loop === 1) {
      player.QueueRepeat();
      interaction.reply( { embeds: [{
        color: 'fbc2ff',
        description: `Đã bật loop hàng chờ`
      }]})
    } else if (player.loop === 2) {
      player.DisableRepeat();
      interaction.reply( { embeds: [{
        color: 'fbc2ff',
        description: `Đã tắt loop`
      }]})
    }
  }
} 
