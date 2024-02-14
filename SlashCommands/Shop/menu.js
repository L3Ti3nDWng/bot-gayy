const { MessageEmbed, MessageSelectMenu, MessageActionRow } = require('discord.js');
const db = require('../../database');
const { owner, legitChannel, orderChannel, buyChannel } = require('../../config.json')

module.exports = {
    name: 'menu',
    description: 'Menu.',
    type: 'CHAT_INPUT',
    
    run: async (client, interaction, serverData) => {
      if (!interaction.author.id == owner) return interaction.reply({ content: 'Bạn không có quyền sử dụng lệnh này!' })

        const row = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                    .setCustomId('shop')
                    .setPlaceholder('Chọn dịch vụ bạn cần ở đây!!')
                    .addOptions([
                        {
                            label: '♡ﾟ︱🚀┇ Discord Nichu',
                            description:'Bảng giá 𝗗𝗶𝘀𝗰𝗼𝗿𝗱 𝗡𝗶𝘁𝗿𝗼',
                            value: 'nitro',
                            emoji: '1196138258602668054',
                        },
                        {
                            label: '♡ﾟ︱💘┇ Boost server',
                            description: 'Bảng giá 𝗕𝗼𝗼𝘀𝘁 𝗦𝗲𝗿𝘃𝗲𝗿',
                            value: 'boost',
                            emoji: '1178693904535666759',
                        },
                        {
                            label: '♡ﾟ︱🕸┇ Old Discord Account',
                            description: 'Bảng giá 𝗔𝗰𝗰 𝗗𝗶𝘀𝗰𝗼𝗿𝗱',
                            value: 'old',
                            emoji: '1197417749274705972',
                        },
                        {
                            label: '♡ﾟ︱🎵┇ Spotify',
                            description: 'Bảng giá 𝗦𝗽𝗼𝘁𝗶𝗳𝘆 𝗣𝗿𝗲𝗺𝗶𝘂𝗺',
                            value:'spotify',
                            emoji: '1178694086903996476',
                        },
                        {
                            label: '♡ﾟ︱🧧┇ Youtube',
                            description: 'Bảng giá 𝗬𝗼𝘂𝘁𝘂𝗯𝗲 𝗣𝗿𝗲𝗺𝗶𝘂𝗺',
                            value: 'youtube',
                            emoji: '1196461915564683355',
                        },
                        {
                            label: '♡ﾟ︱🍿┇ Netflix',    
                            description: 'Bảng giá 𝗡𝗲𝘁𝗳𝗹𝗶𝘅',
                            value: 'netflix',
                            emoji: '1196138348817940500',
                        },
                        {
                            label: '♡ﾟ︱🐧┇ Facebook',
                            description: 'Bảng giá dịch vụ 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸',
                            value: 'facebook',
                            emoji: '1196463297176817764',
                        },
                        {
                            label: '♡ﾟ︱🎮┇ Tiktok',
                            description: 'Bảng giá dịch vụ 𝗧𝗶𝗸𝘁𝗼𝗸',
                            value: 'tiktok',
                            emoji: '1196465510133534731',
                        },
                        {
                            label: '♡ﾟ︱🤍┇ Khác',
                            description: 'Các dịch vụ khác không kể ở trên',
                            value: 'other',
                            emoji: '1178694218294759464',
                        }
                    ])
            )
        
        const embed = new MessageEmbed()
            .setTitle(`‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎✧༺♥༻BẢNG GIÁ SAKURA MARKET༺♥༻✧`)
            .setDescription(`<a:verifiedanim:1178704160510718013>**Vui Lòng Kéo Xuống Để Chọn Các Loại Dịch Vụ**<a:tickgif:1196360697093816383>\n\`\`\`ĐÂY LÀ TẤT CẢ BẢNG GIÁ Ở MARKET CÁC BẠN CHỌN CÁC MỤC TƯƠNG TỰ BÊN DƯỚI ĐỂ BIẾT GIÁ NHÉ.\n \`\`\`\n- <a:BL_tick:1196354172442914879>**Check Legit: **\n- <:Cart:1196354545400434772>**Check Đơn Hàng: **\n- 🎫**Mua Hàng: **`)
            .setImage(`https://cdn.discordapp.com/attachments/1194956798814343249/1196307958565458021/standard_1.gif?ex=65b7279b&is=65a4b29b&hm=49ea92536ef7bcc4e2e1d24bf1e210df0dae8c104427c3384a30fd8ad29904c8&`)
            .setColor(`#fbc2ff`)
            .setFooter({
              text: `Bảng giá sẽ được cập nhật liên tục`,
              iconURL: `https://cdn.discordapp.com/avatars/1092072128142118972/31be0610782edfe9e99f0d03692dc5a8.png?size=4096`,
            })
            .setTimestamp();
        
        const otherembed = new MessageEmbed()
            .setAuthor(`✧༺♥༻DỊCH VỤ KHÁC༺♥༻✧`)
            .setDescription(`<a:EX_chikadance:1178694167250096158>**Nếu bạn không tìm được dịch vụ mình cần thì hãy liên hệ với chủ sốp để hỏi cũng như ủng hộ nha**`)
            .setColor(`#fbc2ff`)
            .setFooter({
                text: "Developer: dunggvn | discord.gg/chaoscircus",
                iconURL: "https://cdn.discordapp.com/attachments/1194956798814343249/1196853949454626877/Snaptik.app_73179170072471995063.jpg",
              });
    
        const filter = (interaction) => 
            interaction.isSelectMenu()
        
        const collector = interaction.channel.createMessageComponentCollector({ 
              filter});

        collector.on('collect', async(collected) => {
            const value = collected.values[0]
            if( value === `nitro`) { 
                var nitroboost1m = await db.get('nitroboost1m');
                var nitroboost1y = await db.get('nitroboost1y');
                var nitrobasic1m = await db.get('nitrobasic1m');
                var nitrobasic1y = await db.get('nitrobasic1y');
                var nitroimg = await db.get('nitroimg');

                await collected.reply({ embeds: [new MessageEmbed()
                    .setAuthor(`✧༺♥༻DISCORD NITRO༺♥༻✧`)
                    .addFields(
                      {
                        name: `<a:nitroboost:1196138258602668054>**Nitro Boost**`,
                        value: `- <a:Nitro_boosting_level:1178693904535666759>**1 Tháng: ${nitroboost1m}**\n- <a:FlyingNitroBoost:1178704494113063053>**1 Năm: ${nitroboost1y}**`,
                        inline: false
                      },
                      {
                        name: `<a:nitrobasic:1196138223332774009>**Nitro Basic**`,
                        value: `- <:Nitro:1178694063604645908>**1 Tháng: ${nitrobasic1m}**\n- <:badge:1196505939562467389>**1 Năm: ${nitrobasic1y}**`,
                        inline: false
                      },
                      {
                        name: `<a:nitroboost:1196138258602668054>**Nitro Trial**`,
                        value: `- <a:nitro_boost:1178694022072631446>**Nitro Trial 3 tháng: 50k**`,
                        inline: false
                      },
                      {
                        name: `<a:Warning:1196508994664144896>**Lưu Ý:**`,
                        value: `<a:1_:1196503400871903232>Bên Mình Chỉ Bán Nitro Login Mua Chính Chủ Nên 0% Revoke \n<a:2_:1196503405120737299>Khi Mua Hàng Vui Lòng Gửi Thông Tin Acc\n<a:3_:1196503407305953329>Trong Lúc Mua Mình Có Thể Stream Cho Bạn Coi Nếu Bạn Muốn\n<a:4_:1196503411634487437>Mình Sẽ Bảo Mật Toàn Bộ Thông Tin Trong Acc\n<a:5_:1196503415241584772>Đối Với Nitro 3m Trial Acc Phải Được Tạo Trên 1 Tháng Nhé\n<a:6_:1196503417632325772>Acc Phải Không Có Nitro Mới Mua Được Nhé`,
                        inline: false
                      },
                    )
                    .setImage(nitroimg)
                    .setColor(`#fbc2ff`)
                    .setFooter({
                        text: "Developer: dunggvn | discord.gg/chaoscircus",
                        iconURL: "https://cdn.discordapp.com/attachments/1194956798814343249/1196853949454626877/Snaptik.app_73179170072471995063.jpg",
                      })], ephemeral: true})
            }

            if( value === `boost`) {
                var boost1m = await db.get('boost1m');
                var boost3m = await db.get('boost3m');
                var boostimg = await db.get('boostimg');

                await collected.reply({ embeds: [new MessageEmbed()
                    .setAuthor(`✧༺♥༻BOOST SERVER༺♥༻✧`)
                    .setDescription(`<a:nitro_boost:1178694022072631446>**14x (level 3) Server Boost 1 Tháng: ${boost1m}**\n\n<:nitro_heart:1178693952237469756>**14x (level 3) Server Boost 3 Tháng: ${boost3m}**\n‎`)
                    .addFields(
                      {
                        name: `<a:Warning:1196508994664144896>**Lưu Ý:**`,
                        value: `<a:1_:1196503400871903232>Không Kick Acc Boost Ra Khỏi Server\n<a:2_:1196503405120737299>Acc Boost Chỉ Bảo Hành 80% Ngày`,
                        inline: false
                      },
                    )
                    .setImage(boostimg)
                    .setColor(`#fbc2ff`)
                    .setFooter({
                        text: "Developer: dunggvn | discord.gg/chaoscircus",
                        iconURL: "https://cdn.discordapp.com/attachments/1194956798814343249/1196853949454626877/Snaptik.app_73179170072471995063.jpg",
                      })], ephemeral: true})
            }

            if(value === `old`) await collected.reply({ embeds: [new MessageEmbed()
                .setAuthor({
                  name: "✧༺♥༻ACC DISCORD CỔ༺♥༻✧",
                })
                .setDescription("‎\n- <:icons_Person:1197414192416821258> Acc Discord Cổ 2018-2019: 30k\n- <:icons_Person:1197414192416821258> Acc Discord Cổ 2017: 70k\n- <:icons_Person:1197414192416821258> Acc Discord Cổ 2016: 110k")
                .addFields(
                  {
                    name: "<a:Warning:1196508994664144896>Lưu Ý:",
                    value: "<a:1_:1196503400871903232> Acc Sẽ Có Định Dạng mail:pass:token\n<a:2_:1196503405120737299> Sau Khi Nhận Được Acc Vui Lòng Login Vào Mail Và Đổi Thông Tin Ngay",
                    inline: false
                  },
                )
                .setColor(`#fbc2ff`)
                    .setFooter({
                        text: "Developer: dunggvn | discord.gg/chaoscircus",
                        iconURL: "https://cdn.discordapp.com/attachments/1194956798814343249/1196853949454626877/Snaptik.app_73179170072471995063.jpg",
                      })], ephemeral: true})

            if( value === `spotify`) {
                var spotify1m = await db.get('spotify1m');
                var spotify3m = await db.get('spotify3m');
                var spotifyimg = await db.get('spotifyimg');

                await collected.reply({ embeds: [new MessageEmbed()
                    .setAuthor(`✧༺♥༻SPOTIFY PREMIUM༺♥༻✧`)
                    .setDescription(`<a:spotify:1178694086903996476>**1 Tháng : ${spotify1m}**\n\n<a:SA_pepemusic:1178694120181608510>**3 Tháng : ${spotify3m}**\n\n<a:Warning:1196508994664144896>**Lưu Ý:**\n<a:1_:1196503400871903232>Không Đăng Nhập Bằng Liên Kết : Gmail or Fb,.....\n\`\`\`Nhận Reset Acc + Backup List Nhạc 10k/ 1 Lần\`\`\``)
                    .setImage(spotifyimg)
                    .setColor(`#fbc2ff`)
                    .setFooter({
                        text: "Developer: dunggvn | discord.gg/chaoscircus",
                        iconURL: "https://cdn.discordapp.com/attachments/1194956798814343249/1196853949454626877/Snaptik.app_73179170072471995063.jpg",
                      })], ephemeral: true})
            }

            if( value === `youtube`) {
                var youtube = await db.get('youtube');
                var youtubeimg = await db.get('youtubeimg');

                await collected.reply({ embeds: [new MessageEmbed()
                    .setAuthor(`✧༺♥༻YOUTUBE PREMIUM༺♥༻✧`)
                    .setDescription(`‎\n<:Youtuber:1196611524102475857>**Youtube Premium 1 Tháng: ${youtube}**\n\n<a:Warning:1196508994664144896>**Lưu Ý:**\n<a:1_:1196503400871903232>Add Thằng Vào Gmail Chính Chủ\n<a:2_:1196503405120737299>Dùng Ổn Định Ít Xảy Ra Lỗi`)
                    .setImage(youtubeimg)
                    .setColor('#fbc2ff')
                    .setFooter({
                        text: "Developer: dunggvn | discord.gg/chaoscircus",
                        iconURL: "https://cdn.discordapp.com/attachments/1194956798814343249/1196853949454626877/Snaptik.app_73179170072471995063.jpg",
                      })], ephemeral: true})
            }

            if( value === `netflix`) {
                var netflix = await db.get('netflix');
                var netfliximg = await db.get('netfliximg');

                await collected.reply({ embeds: [new MessageEmbed()
                    .setAuthor(`✧༺♥༻NETFLIX PREMIUM༺♥༻✧`)
                    .setDescription(`‎\n<a:Xc_Netflix:1196138348817940500>**Netflix 4K Ultra 1 Tháng: ${netflix}**\n\n<a:Warning:1196508994664144896>**Lưu Ý:** \n<a:1_:1196503400871903232>Không Sử Dụng 2 Thiết Bị Cùng Lúc\n<a:2_:1196503405120737299>Không Thay Đổi Mã Pin Và Lock Profile\n<a:3_:1196503407305953329>Được Thay Đổi Giao Diện Tiếng Anh + Ngôn Ngữ Tiếng Việt\n<a:4_:1196503411634487437>Bấm Lưu Mật Khẩu Khi Đăng Nhập`)
                    .setImage(netfliximg)
                    .setColor('#fbc2ff')
                    .setFooter({
                        text: "Developer: dunggvn | discord.gg/chaoscircus",
                        iconURL: "https://cdn.discordapp.com/attachments/1194956798814343249/1196853949454626877/Snaptik.app_73179170072471995063.jpg",
                      })], ephemeral: true})
            }

            if( value === `facebook`) {
                var followfb = await db.get('followfb');
                var fbimg = await db.get('fbimg');

                await collected.reply({ embeds: [new MessageEmbed()
                    .setAuthor(`✧༺♥༻DỊCH VỤ FACEBOOK༺♥༻✧`)
                    .setDescription(`‎\n<:Facebook:1196463297176817764>**1000 Follower: ${followfb}**\n\n\`\`\`Nếu bạn cần loại dịch vụ khác hãy nói cho mình biết lúc mua hàng mình sẽ hỗ trợ cho bạn nha\`\`\`\n<a:Warning:1196508994664144896>**Lưu Ý:** \n<a:1_:1196503400871903232>Follow Sẽ Không Tụt\n<a:2_:1196503405120737299>Phải Bật Nút Follow Trên Facebook`)
                    .setImage(fbimg)
                    .setColor('#fbc2ff')
                    .setFooter({
                        text: "Developer: dunggvn | discord.gg/chaoscircus",
                        iconURL: "https://cdn.discordapp.com/attachments/1194956798814343249/1196853949454626877/Snaptik.app_73179170072471995063.jpg",
                      })], ephemeral: true})
            }

            if( value === `tiktok`) { 
                var tiktok = await db.get('tiktok');
                var tiktokimg = await db.get('tiktokimg');

                await collected.reply({ embeds: [new MessageEmbed()
                    .setAuthor(`✧༺♥༻DỊCH VỤ TIKTOK༺♥༻✧`)
                    .setDescription(`‎\n<:Tiktok:1196465510133534731>**1000 Follower: ${tiktok} tùy theo loại follow**\n\n\`\`\`Nếu bạn cần loại dịch vụ khác hãy nói cho mình biết lúc mua hàng mình sẽ hỗ trợ cho bạn nha\`\`\`\n<a:Warning:1196508994664144896>**Lưu Ý:** \n<a:1_:1196503400871903232>Follow Sẽ Không Tụt\n<a:2_:1196503405120737299>Không Bảo Hành`)
                    .setImage(tiktokimg)
                    .setColor('#fbc2ff')
                    .setFooter({
                        text: "Developer: dunggvn | discord.gg/chaoscircus",
                        iconURL: "https://cdn.discordapp.com/attachments/1194956798814343249/1196853949454626877/Snaptik.app_73179170072471995063.jpg",
                      })], ephemeral: true})
            }
            if( value === `other`) collected.reply({ embeds: [otherembed], ephemeral: true})
      })

      interaction.reply({ content: 'Gửi thành công', ephemeral: true })
      interaction.channel.send({ embeds: [embed], components: [row] })
    }
}