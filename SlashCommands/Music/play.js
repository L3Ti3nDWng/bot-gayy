const { ApplicationCommandOptionType } = require('discord-api-types/v9');

module.exports = {
  name: "play",
  description: "Bật nhạc",
  inVc: true,
  sameVc: true,
  options: [{
    name: 'query',
    type: ApplicationCommandOptionType.String,
    description: 'Nhạc bạn muốn bật',
    required: true,
  }],
  run: async (client, interaction, args) => {
    await interaction.deferReply({ content: 'Đang tìm...'}) // this will give time to reply

    const memberChannel = interaction.member.voice.channelId

    // Spawning lavalink player
    const player = await client.poru.createConnection({
      guild: interaction.guildId,
      voiceChannel: interaction.member.voice.channelId,
      textChannel: interaction.channel,
      selfDeaf: true,
      selfMute: false,
    })

    // Getting tracks
    const resolve = await client.poru.resolve(interaction.options.getString('query', true))
    const { loadType, tracks, playlistInfo } = resolve;
    if (loadType === "PLAYLIST_LOADED") {

      for (let x of resolve.tracks) {
         x.info.requester = interaction.member;
          player.queue.add(x);

      }
      interaction.editReply({ content: `Đã thêm: \`${resolve.tracks.length} từ ${resolve.playlistInfo.name}\`` });
      if (!player.isPlaying && !player.isPaused) return player.play();

    }else if(loadType ==="SEARCH_RESULT"|| loadType ==="TRACK_LOADED"){
      const track = tracks.shift();
    track.info.requester = interaction.member;

     player.queue.add(track);
        interaction.editReply({ embeds: [{
          color: 'fbc2ff',
          description: `Đã thêm: \`${track.info.title}\``
        }] });
        if (!player.isPlaying && !player.isPaused) return player.play();
        
    }else{
      
       return interaction.editReply({ content: "**Không có kết quả.**"})
    }

  }}