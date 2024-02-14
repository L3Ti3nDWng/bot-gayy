const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const moment = require("moment");
let cpuStat = require("cpu-stat");
require("moment-duration-format");
const os = require("os");

module.exports = {
  name: "stat",
  description: "Xem trạng thái bot",
  type: 'CHAT_INPUT',

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

    cpuStat.usagePercent(function(err, percent, seconds) {
    if (err) {
      return console.log(err);
  }

  const statusEmbed = new MessageEmbed()
      .setTitle(`\`🔎 Số liệu thống kê của ${client.user.username}\``)
      .setColor(client.embedColor)
      .setFields([
        {
          name: "**`💻 Máy chủ`**",
          value: `\`\`\`css\n[ ${serverCount} ]\n\`\`\``,
          inline: true,
        },
        {
          name: "**`📁 Kênh`**",
          value: `\`\`\`css\n[ ${channelCount} ]\n\`\`\``,
          inline: true,
        },
        {
          name: "**`👪 Thành Viên`**",
          value: `\`\`\`css\n[ ${memberCount} ]\n\`\`\``,
          inline: true,
        },
        {
          name: "**`⌚️ Thời Gian Hoạt Động`**",
          value: `\`\`\`css\n[ ${uptime} ]\n\`\`\``,
          inline: true,
        },
        {
          name: "**`👾 Discord.js`**",
          value: `\`\`\`css\n[ ${Discord.version} ]\n\`\`\``,
          inline: true,
        },
        {
          name: "**`🔰 NodeJS`**",
          value: `\`\`\`css\n[ ${process.version} ]\n\`\`\``,
          inline: true,
        },
        {
          name: "**`⏳ RAM`**",
          value: `\`\`\`css\n[ ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}/ ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB ]\n\`\`\``,
          inline: true,
        },
        {
          name: "**`🤖 CPU Đang Dùng`**",
          value: `\`\`\`css\n[ ${percent.toFixed(2)} % ]\n\`\`\``,
          inline: true,
        },
        {
          name: "**`🤖 CPU`**",
          //value: `\`\`\`css\n[ Intel(R) Core(TM) i9-14900K @ 3.20GHz ]\n\`\`\``, 
          value: `\`\`\`css\n[ ${os.cpus().map((i) => `${i.model}`)[0]} ]\n\`\`\``,
          inline: false,
        },
      ])
      .setColor('#fbc2ff')
      .setImage('https://i.pinimg.com/originals/d3/37/f0/d337f0d8f04a6b1b8278e90d3d6b1d60.gif')
      .setFooter({
        text: "Developer: dunggvn | discord.gg/chaoscircus",
        iconURL: "https://cdn.discordapp.com/attachments/1194956798814343249/1196853949454626877/Snaptik.app_73179170072471995063.jpg",
      })
      .setTimestamp();
    interaction.editReply({ embeds: [statusEmbed] });
  })
  },
};