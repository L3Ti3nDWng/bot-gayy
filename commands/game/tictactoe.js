module.exports = {
    name: 'tictactoe', 
    category: 'game',
    aliases: ['ttt', 'caro'],
    timeout: "3000",
    run : async (client, message, args) => {
        const { TicTacToe } = require('discord-gamecord');

        const Game = new TicTacToe({
            message: message,
            isSlashGame: false,
            opponent: message.mentions.users.first(),
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
}