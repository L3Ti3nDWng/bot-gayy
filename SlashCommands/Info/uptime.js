const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
let cpuStat = require("cpu-stat");
const os = require("os");

module.exports = {
  name: "uptime",
  description: "Xem thời gian uptime của bot",
  type: "CHAT_INPUT",
  cooldown: 60,

  run: async (client, interaction) => {
    await interaction.deferReply({
ephemeral: false,
    });

    const uptime = moment
.duration(interaction.client.uptime)
.format(" D [ngày], H [giờ], m [phút], s [giây]");
    let channelCount = client.channels.cache.size;
    let serverCount = client.guilds.cache.size;
    let memberCount = 0;
    client.guilds.cache.forEach((guild) => {
memberCount += guild.memberCount;
    });
    cpuStat.usagePercent(function (err, percent, seconds) {
if (err) {
return console.log(err);
}

const embed = new MessageEmbed()
.setTitle(`\`${client.user.username} Uptime\``)
.setDescription(`\n[ ${uptime} ]\n`)
.setColor('#fbc2ff')
.setFooter({
  text: "Developer: dunggvn | discord.gg/chaoscircus",
  iconURL: "https://cdn.discordapp.com/attachments/1194956798814343249/1196853949454626877/Snaptik.app_73179170072471995063.jpg",
})
.setTimestamp();
interaction.editReply({
embeds: [embed],
});
    });
  },
};
