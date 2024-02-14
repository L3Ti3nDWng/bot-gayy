const { MessageEmbed } = require('discord.js')
const { ApplicationCommandOptionType } = require('discord-api-types/v9');

module.exports = {
  name: "join",
  description:"Kéo bot vào voice!",
  inVc: true,
  sameVc: true,
  
  run: async (client, interaction, args) => {

    const player = await client.poru.createConnection({
      guild: message.guild.id,
      voiceChannel: interaction.member.voice.channel.id,
      textChannel: interaction.channel,
      selfDeaf: true,
      selfMute: false,
    })

    interaction.reply({ embeds: [{
      color: '#fbc2ff',
      description: `Đã vào ${interaction.user.voice?.channel}`
    }]})
  }
} // try it 