const db = require('../database')
const config = require('../config.json')
const { Collection } = require('discord.js')
module.exports.run = async (client, message) => {

  if (message.author.bot) return;

  const nd = message.content.toLowerCase();
  if (nd == `hi` || nd == `hello` || nd == `xin chào` || nd == `chào` || nd == `helo` || nd == `halo` || nd == `helow`) {
      message.reply(`Hi cậu ngày hôm nay của cậu ntn? Hãy chia sẻ với chúng tớ nhaa~~. Chúc cậu có 1 ngày tốt lành<3`)
      return
  }
  const serverData= await db.get(message.guildId) || { prefix: config.prefix }
  const prefix = serverData.prefix;
  if (!message.content.startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  const command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));

  const player = client.poru.players.get(message.guild.id);
  const memberChannel = message.member.voice.channelId;
  const botChannel = message.guild.me.voice.channelId;

  if (!command) return
    if (command.inVc && !memberChannel) {
      return message.channel.send('You must be in a Voice Channel to use this Command!')
    }

  if (command.sameVc && player && botChannel !== memberChannel) {
    return message.channel.send('You must be in the same Voice Channel as me!')
  }

  if (command.player && !player) {
    return (`No Player exists for this Guild!`)
  }

  if (command.current && !player.currentTrack) {
    message.channel.send("There is nothing playing right now!")
  }

  if (command.args && !args.length) {
    return message.channel.send(`You didn't provide any arguments!`)
  }
  if (command.owner) {
    if (message.author.id !== "") return;
  }
  if (command) {
    if(!client.cooldown.has(command.name)) client.cooldown.set(command.name, new Collection());
    const now = Date.now();
    const timestamps = client.cooldown.get(command.name);
    const cooldownAmount = (command.cooldown || 3) * 1000;
    if(timestamps.has(message.author.id)) {
        const expiration = timestamps.get(message.author.id) + cooldownAmount;

        if(now < expiration) {
            const timeleft = (expiration - now) / 1000;
            return message.reply(`Bạn vui lòng thử lại sau ${timeleft.toFixed(1)} giây!`);
        }
    }
    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

    command.run(client, message, args, serverData);
  }
}