const { MessageEmbed } = require('discord.js')
const { ApplicationCommandOptionType } = require('discord-api-types/v9');

module.exports = {
  name: "disconnect",
  description: "ngắt kết nối bot!",
  inVc: true,
  sameVc: true,
  player:true,
  run: async (client, interaction, args) => {
  const player = client.poru.players.get(interaction.guild.id);
  player.destroy();
  return interaction.reply({ embeds: [{ color: 'fbc2ff', description: '<:checkmark:912259227060437012> |  Đã ngắt kết nối!'}]})  
  }
}
