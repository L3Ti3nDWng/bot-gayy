const { MessageEmbed } = require('discord.js')
const { ApplicationCommandOptionType } = require('discord-api-types/v9');

module.exports = {
  name: "remove",
  description: "Xóa hàng chờ!",
  inVc: true,
  sameVc: true,
  
  run: async (client, interaction, args) => {
 
    const memberChannel = interaction.member.voice.channel.id

    const player = client.poru.players.get(interaction.guild.id)

    if(!player.queue.length){
      interaction.reply({ embeds: [{
      color: 'fbc2ff',
      description: `Không có gì trong hàng chờ!`
    }]})
    }
    
    let queueLength = player.queue.length

    player.queue.clear();

    interaction.reply({ embeds: [{
      color: 'fbc2ff',
      description: `Đã xóa \`${queueLength}\` từ hàng chờ`
    }]})
  }
} // try it 