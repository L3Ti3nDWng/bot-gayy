module.exports = {
    name: 'caro',
    description: 'Chơi Cờ Caro với ai đó.',
    type: 'CHAT_INPUT',
    options: [
        {
            name:'user',
            description: 'Người bạn muốn chơi cùng.',
            type: 'USER',
        }
    ],
    run: async (client, interaction) => {
        const { TicTacToe } = require('discord-gamecord');

        const Game = new TicTacToe({
            message: interaction,
            isSlashGame: true,
            opponent: interaction.options.getUser('user'),
            embed: {
                title: 'Cờ Caro',
                color: '#fbc2ff',
                statusTitle: 'Trạng thái',
                overTitle: 'Game Over'
            },
            emojis: {
                xButton: '❌',
                oButton: '🔵',
                blankButton: '➖'
            },
            mentionUser: true,
            timeoutTime: 60000,
            xButtonStyle: 'DANGER',
            oButtonStyle: 'PRIMARY',
            turnMessage: '{emoji} | Đến lượt của **{player}**.',
            winMessage: '{emoji} | **{player}** thắng ván cờ này.',
            tieMessage: 'Hòa! không ai thắng ván cờ này',
            timeoutMessage: 'Game chưa kết thúc! Không ai thắng ván cờ này!',
            playerOnlyMessage: 'Chỉ có {player} và {opponent} có thể sử dụng nút này.'
        });

            Game.startGame();
    },
};