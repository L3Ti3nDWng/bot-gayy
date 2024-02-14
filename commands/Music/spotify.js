module.exports = {
  name: "spotify",
  inVc: true,
  sameVc:true,
  args: true,
  run: async (client, message, args) => {

    const memberChannel = message.member.voice.channel.id

    // Spawning lavalink player
    const player = await client.poru.createConnection({
      guild: message.guild.id,
      voiceChannel: message.member.voice.channel.id,
      textChannel: message.channel,
      selfDeaf: true,
      selfMute: false,
    })

    // Getting tracks
    const resolve = await client.poru.spotify.fetch(args.join(' '))
    const { loadType, tracks, playlistInfo } = resolve;

    // Adding in queue
    if (loadType === "PLAYLIST_LOADED") {

      for (let x of resolve.tracks) {
         x.info.requester = message.author;
          player.queue.add(x);

      }
      message.channel.send({ content: `Đã thêm: \`${resolve.tracks.length} từ ${resolve.playlistInfo.name}\`` });
      if (!player.isPlaying && !player.isPaused) return player.play();

    }else if(loadType ==="SEARCH_RESULT"|| loadType ==="TRACK_LOADED"){
      const track = tracks.shift();
    track.info.requester = message.author;

     player.queue.add(track);
        message.channel.send({ content: `Đã thêm: \`${track.info.title}\`` });
        if (!player.isPlaying && !player.isPaused) return player.play();
        
    }else{
      
       return message.channel.send({ content: "Không có kết quả."})
    }


  
  }
}
