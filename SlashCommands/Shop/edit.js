const db = require('../../database');
const config = require('../../config.json');
const owner = config.owner;

module.exports = {
    name: 'edit',
    description: 'edit.',
    type: 'CHAT_INPUT',
    options: [
        {
            name: 'value',
            description: 'noidung',
            type: 'STRING',
            required: true,
        },
        {
            name: 'price',
            description: 'price',
            type: 'STRING',
            choices: [
                {
                    name: 'NitroBoost1m',
                    value: 'nitroboost1m',
                },
                {
                    name: 'NitroBoost1y',
                    value: 'nitroboost1y',
                },
                {
                    name: 'NitroBasic1m',
                    value: 'nitrobasic1m',
                },
                {
                    name: 'NitroBasic1y',
                    value: 'nitrobasic1y',
                },
                {
                    name: 'Boost1m',
                    value: 'boost1m',
                },
                {
                    name: 'Boost3m',
                    value: 'boost3m',
                },
                {
                    name: 'Spotify1m',
                    value:'spotify1m',
                },
                {
                    name: 'Spotify3m',
                    value:'spotify3m',
                },
                {
                    name: 'Youtube',
                    value: 'youtube',
                },
                {
                    name: 'Netflix',
                    value: 'netflix',
                },
                {
                    name: 'FollowFB',
                    value: 'followfb',
                },
                {
                    name: 'TikTok',
                    value: 'tiktok',
                },
            ],
        },
        {
            name: 'img',
            description: 'img',
            type: 'STRING',
            choices: [
                {
                    name: 'NitroImg',
                    value: 'nitroimg',
                },
                {
                    name: 'BoostImg',
                    value: 'boostimg',
                },
                {
                    name: 'SpotifyImg',
                    value:'spotifyimg',
                },
                {
                    name: 'YoutubeImg',
                    value: 'youtubeimg',
                },
                {
                    name: 'NetflixImg',
                    value: 'netfliximg',
                },
                {
                    name: 'TiktokImg',
                    value: 'tiktokimg',
                },
                {
                    name: 'FacebookImg',
                    value: 'fbimg',
                }
            ]
        },
    ],

    run: async (client, interaction) => {
    try {
        if (!interaction.author.id == owner) return interaction.reply({ content: 'Bạn không có quyền sử dụng lệnh này!' })

        const name = interaction.options.getString('price') || interaction.options.getString('img')
        const value = interaction.options.getString('value')

        await db.set(name, value)
        interaction.reply({ content: 'Sửa thành công!', ephemeral: true })
    } catch (error) {
        console.log(error)
        interaction.reply({ content: 'Vui lòng chỉ sửa 1 loại trên 1 câu lệnh.' })
    }
    },
};