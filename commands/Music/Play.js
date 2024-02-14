const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "play",
  aliases: ['p'],
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
   
     
  



if(args[0]=="radio") {

   
    //  if (!player.isPlaying && !player.isPaused) {
    //    player.stop()
    // }.then{}
  
  if(args[1]=="1"){
  const resolve = await client.poru.resolve("http://113.164.229.226:7001/stream")
    const { loadType, tracks, playlistInfo } = resolve;
   const track = tracks.shift();
   player.queue.add(track);         message.channel.send({ content: `Phát Radio: \`VOV 1\`` });
      if(player.isPlaying) {
       player.stop()
      } else {
     player.play()
    }
      
    
} 
  if(args[1]=="2"){
  const resolve = await client.poru.resolve("http://113.164.229.226:7003/stream")
    const { loadType, tracks, playlistInfo } = resolve;
   const track = tracks.shift();
   player.queue.add(track);         message.channel.send({ content: `Phát Radio: \`VOV 2\`` });
     
        if(player.isPlaying) {
       player.stop()
      } else {
     player.play()
    }
   
}
  if(args[1]=="3"){
  const resolve = await client.poru.resolve("http://113.164.229.226:7005/stream")
    const { loadType, tracks, playlistInfo } = resolve;
   const track = tracks.shift();
   player.queue.add(track);         message.channel.send({ content: `Phát Radio: \`VOV 3\`` });
      if(player.isPlaying) {
       player.stop()
      } else {
     player.play()
    }
   
}
  if(args[1]=="4"){
  const resolve = await client.poru.resolve("https://www.youtube.com/watch?v=jfKfPfyJRdk")
    const { loadType, tracks, playlistInfo } = resolve;
   const track = tracks.shift();
   player.queue.add(track);         message.channel.send({ content: `Phát Radio: \`Lofi Chill\`` });
      if(player.isPlaying) {
       player.stop()
      } else {
     player.play()
    }
   
}

 
} else {


const resolve = await client.poru.resolve(args.join(' '))
    const { loadType, tracks, playlistInfo } = resolve;


    
    // Adding in queue
    if (loadType === "PLAYLIST_LOADED") {

      for (let x of resolve.tracks) {
         x.info.requester = message.author;
          player.queue.add(x);

      }
      message.channel.send({ content: `Đã thêm: \`${resolve.tracks.length} từ ${resolve.playlistInfo.name}\`` });
      if (!player.isPlaying && !player.isPaused) return  player.play();

    }else if(loadType ==="SEARCH_RESULT"|| loadType ==="TRACK_LOADED"){
      const track = tracks.shift();
    track.info.requester = message.author;

      
      
     player.queue.add(track);         
        message.channel.send({ content: `Đã thêm: \`${track.info.title}\`` });
        if (!player.isPlaying && !player.isPaused) return  player.play();
        
    }else{
      
       return message.channel.send({ content: "Không có kết quả."})
    }

    }
  
  }
}