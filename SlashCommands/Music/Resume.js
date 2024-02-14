const { MessageEmbed } = require('discord.js')
const { ApplicationCommandOptionType } = require('discord-api-types/v9');

module.exports = {
  name: "resume",
  description: "Tiếp tục nhạc hiện tại!",
  inVc: true,
  sameVc: true,
  
  run: async (client, interaction, args) => {
   const player = client.poru.players.get(interaction.guild.id);

    if (!player.isPaused) {
      player.pause(false)
      interaction.reply({ embeds: [{
        color: 'fbc2ff',
        title: `Nhạc đang chạy sẵn`
      }]})
    }
    else {
      if (player.isPaused) {
      player.pause(false)
      return interaction.reply({ embeds: [{
        color: 'fbc2ff',
        title: `Nhạc đã chạy`
      }]})
    }
    }
    
  }
} // try it 

  