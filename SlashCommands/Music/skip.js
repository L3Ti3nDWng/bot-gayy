const { MessageEmbed } = require('discord.js')
const { ApplicationCommandOptionType } = require('discord-api-types/v9');

module.exports = {
  name: "skip",
  description: "Bỏ qua nhạc!",
  inVc: true,
  sameVc: true,
  
  run: async (client, interaction, args) => {
   const player = client.poru.players.get(interaction.guild.id);
    player.stop()
    interaction.reply( { color: 'fbc2ff', description: 'Đã bỏ qua bài hiện tại!'});
  }
} // try it 