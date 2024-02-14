module.exports = {
  name: "clearqueue",
  aliases: ['cqueue'],
  inVc: true,
  sameVc: true,
  player: true,
  current: true,
  run: async (client, message, args) => {

    const memberChannel = message.member.voice.channel.id

    const player = client.poru.players.get(message.guild.id)

    if(!player.queue.length){
      message.reply("Không có gì trong hàng chờ!")
    }
    
    let queueLength = player.queue.length

    player.queue.clear();

    message.reply(`Đã xóa \`${queueLength}\` từ hàng chờ`)

  }
}