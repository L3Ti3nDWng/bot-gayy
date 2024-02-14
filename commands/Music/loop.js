module.exports = {
  name: "loop",
  args: false,
  inVc: true,
  sameVc: true,
  player: true,
  current: true,
  run: async (client, message, args) => {

    let player = client.poru.players.get(message.guild.id)

    if (player.loop === 0) {
      player.TrackRepeat();
      message.reply("Đã bật loop track hiện tại")
    } else if (player.loop === 1) {
      player.QueueRepeat();
      message.reply("Đã bật loop hàng chờ hiện tại")
    } else if (player.loop === 2) {
      player.DisableRepeat();
      message.reply("Đã tắt loop")
    }
  }
}