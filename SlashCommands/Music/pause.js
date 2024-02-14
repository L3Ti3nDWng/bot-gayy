const { MessageEmbed } = require('discord.js')
const { ApplicationCommandOptionType } = require('discord-api-types/v9');

module.exports = {
  name: "pause",
  description: "dừng nhạc",
  inVc: true,
  sameVc: true,
  
  run: async (client, interaction, args) => {
    const player = client.poru.players.get(interaction.guild.id);
    if(player.isPaused) {
      return interaction.reply({ embeds: [{
        color: "fbc2ff",
        title: 'Nhạc đã được dừng sẵn'
      }]
         })
    }
      player.pause(true);
    return interaction.reply({ embeds: [{
        color: "fbc2ff",
        title: 'Nhạc đã dừng!'
      }] 
     })

  }} // try it 