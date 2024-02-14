module.exports = {
  name: "shuffle",
  args: false,
  inVc: true,
  sameVc: true,
  player: true,
  current: true,
  run: async (client, message, args) => {
    const player = client.poru.players.get(interaction.guild.id);

    if(player.queue.length <= 2){
      message.reply({ color: 'fbc2ff', description: 'Không thể đảo thứ tự hàng chờ.'});
    }
      player.queue.shuffle()
  
     return message.reply( { color: 'fbc2ff', description: 'Đã đảo thứ tự hàng chờ.'});
   }
}