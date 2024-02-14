const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
module.exports = {
  name: "help",
  run: async (client, message, args, serverData) => {
    const prefix = serverData.prefix;


    if (!args[0]) {
         
      const embed = new MessageEmbed()
        .setTitle("HELP MENU")
        .setDescription(`Danh sách lệnh cho bot **${client.user.username}**\nPrefix của bot là: \`${prefix}\``)
        .addFields(
          {
            name: "INFO",
            value: "\`stat\` : xem thông tin của bot\n\`ping\` : xem ping của bot",
            inline: false
          },
          {
            name: "MOD",
            value: "\`ban\` : ban ai đó khỏi server\n\`kick\` : kick ai đó khỏi server\n\`clear\` : xóa tin nhắn theo số lượng",
            inline: false
          },
          {
            name: "GAME",
            value: "\`rps\` : Chơi Oẳn Tù Tì với ai đó\n\`tictactoe\` : Chơi cờ caro với ai đó",
            inline: false
          },
          {
            name: "MISC",
            value: "\`avartar\` : lấy avatar của ai đó\n\`say\` : để bot nói hộ bạn",
            inline: false
          },
          {
            name: "MUSIC",
            value: "\`cqueue\`  : xóa hàng chờ\n\`join\`    : kéo bot vào voice\n\`jump\`    : phát bài nào đó trong hàng chờ\n\`loop\`    : lặp lại bài\n\`pause\`   : dùng nhạc\n\`play\`    : chơi nhạc\n\`queue\`   : hiển thị hàng chờ\n\`radio\`   : chế độ radio\n\`remove\`  : xóa nhạc khỏi hàng chờ\n\`shuffle\` : phát hàng chờ theo thứ tự ngẫu nhiên\n\`skip\`    : skip nhạc hiện tại\n\`spotify\` : phát nhạc trên spotify\n\`stop\`    : dừng bài hiện tại",
            inline: false
          },
        )
        .setFooter(`Gõ ${prefix}help <lệnh> để xem chi tiết hơn!`)
        .setTimestamp()
        .setThumbnail(client.user.displayAvatarURL())
        .setColor("#fbc2ff");
      return message.reply({ embeds: [embed] });
    } else {
      const command =
        client.commands.get(args[0].toLowerCase()) ||
        client.commands.find(
          (c) => c.aliases && c.aliases.includes(args[0].toLowerCase())
        );

      if (!command) {
        const embed = new MessageEmbed()
          .setTitle(`Không có lệnh! Dùng \`${prefix}help\` để có danh sách lệnh của tôi!`)

          .setColor("fbc2ff");
        return message.channel.send(embed);
      }

      const embed = new MessageEmbed()
        .setTitle("Help Command: " + args[0])
        .addField("PREFIX:", `\`${prefix}\``)
        .addField(
          "LỆNH:",
          command.name ? `\`${command.name}\`` : "Lệnh này không có tên."
        )
        .addField(
          "BÍ DANH:",
          command.aliases
            ? `\`${command.aliases.join("` `")}\``
            : "Không có bí danh."
        )
        .addField(
          "CÁCH SỬ DỤNG:",
          command.usage
            ? `\`${prefix}${command.name} ${command.usage}\``
            : `\`${prefix}${command.name}\``
        )
        .addField(
          "MÔ TẢ:",
          command.description
            ? command.description
            : "Không có mô tả cho lệnh này."
        )
        .setFooter(
          `Yêu cầu bởi ${message.author.tag}`,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTimestamp()
        .setColor("#fbc2ff");
      return message.reply({embeds:[embed]});
    }

  }
}
