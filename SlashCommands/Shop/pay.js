const { MessageButton, MessageEmbed, MessageActionRow } = require('discord.js');
const { owner } = require('../../config.json');

module.exports = {
    name: 'pay',
    description: 'pay.',
    type: 'CHAT_INPUT',
    run: (client, interaction, serverData) => {
        if (!interaction.author.id == owner) return interaction.reply({ content: 'Bạn không có quyền sử dụng lệnh này!' })

        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('mb')
                    .setLabel('𝗤𝗥 𝗠𝗕𝗕𝗔𝗡𝗞')
                    .setEmoji('1178694371584004136')
                    .setStyle('SECONDARY')
            )
            .addComponents(
                new MessageButton()
                    .setCustomId('momo')
                    .setLabel('𝗤𝗥 𝗠𝗢𝗠𝗢')
                    .setEmoji('1178694397857124382')
                    .setStyle('SECONDARY')
            )
            .addComponents(
                new MessageButton()
                    .setCustomId('ltc')
                    .setLabel('𝗤𝗥 𝗟𝗧𝗖')
                    .setEmoji('1178694420732837960')
                    .setStyle('SECONDARY')
            )

        const embed = new MessageEmbed()
            .setDescription("# <:Banking:1178694335575892019>Phương thức thanh toán<:Cart:1196354545400434772>\n‎\n- <:MBBank:1178694371584004136>** MBBank: 999912092007**\n- <:MoMo:1178694397857124382>** Momo: 0918023533**\n- <:LTC:1178694420732837960>** Ltc: LNfPXpxtkQGWvWKkBh34QhuNV8spcWnfgg**\n\n```ansi\n\u001b[2;33m\u001b[2;34mCHỦ TÀI KHOẢN:\u001b[0m\u001b[2;33m\u001b[0m LE BUI TIEN DUNG\u001b[0;2m\u001b[0m\n```")
            .setImage('https://media.discordapp.net/attachments/1194956798814343249/1196853088577929346/standard_2.gif')
            .setColor('#fbc2ff')
            .setFooter({
                text: "Developer: dunggvn | discord.gg/chaoscircus",
                iconURL: "https://cdn.discordapp.com/attachments/1194956798814343249/1196853949454626877/Snaptik.app_73179170072471995063.jpg",
              });
        const mbbank = new MessageEmbed()
            .setDescription("# MBBank Của <@1092072128142118972>\n - <a:money_rain:1196846713743343636>**Quét để thanh toán**")
            .setImage("https://cdn.discordapp.com/attachments/1196147852141940866/1196150483094618242/1705254851556.png?ex=65b694f2&is=65a41ff2&hm=9fca232e715df58875ff7d1b83708d4c6f56d36943af7179122ab43d929661cd&")
            .setColor('#fbc2ff')
            .setFooter({
                text: "Developer: dunggvn | discord.gg/chaoscircus",
                iconURL: "https://cdn.discordapp.com/attachments/1194956798814343249/1196853949454626877/Snaptik.app_73179170072471995063.jpg",
              });
        const momo = new MessageEmbed()
            .setDescription("# Momo Của <@1092072128142118972>\n - <a:money_rain:1196846713743343636>**Quét để thanh toán**")
            .setImage("https://cdn.discordapp.com/attachments/1196147852141940866/1196151170566213662/401587002.jpg?ex=65b69596&is=65a42096&hm=8b57b9e2f6f18b76a2d76fa8a1c462b7c3c89611e617c0bf819991d250f4ca74&")
            .setColor('#fbc2ff')
            .setFooter({
                text: "Developer: dunggvn | discord.gg/chaoscircus",
                iconURL: "https://cdn.discordapp.com/attachments/1194956798814343249/1196853949454626877/Snaptik.app_73179170072471995063.jpg",
              });
        const ltc = new MessageEmbed()
            .setDescription("# QR LTC Của <@1092072128142118972>\n - <a:money_rain:1196846713743343636>**Quét để thanh toán**")
            .setImage("https://cdn.discordapp.com/attachments/1196147852141940866/1196850641939742870/litecoin_LNfPXpxt_.png?ex=65b92105&is=65a6ac05&hm=165a224187e3fc30e6d81fe7a412a0dc47425e77f5ccc90e9ee1aacb7bba451b&")
            .setColor('#fbc2ff')
            .setFooter({
                text: "Developer: dunggvn | discord.gg/chaoscircus",
                iconURL: "https://cdn.discordapp.com/attachments/1194956798814343249/1196853949454626877/Snaptik.app_73179170072471995063.jpg",
              });

        const filter = (interaction) => 
        interaction.isButton()
        
        const collector = interaction.channel.createMessageComponentCollector({ });

        collector.on('collect', async(collected) => {
            const value = collected.customId
            if( value === 'mb') await collected.reply({ embeds: [mbbank], ephemeral: true})
            if( value ==='momo') await collected.reply({ embeds: [momo], ephemeral: true})
            if( value === 'ltc') await collected.reply({ embeds: [ltc], ephemeral: true})
        });

        interaction.channel.send({ embeds: [embed], components: [row] })
        interaction.reply({ content: 'Gửi thành công', ephemeral: true })
    }
}