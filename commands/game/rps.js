module.exports = {
    name: 'rps',
    aliases: ['ott'],
    category: 'game',
    run: (client, message, args) => {
        const { RockPaperScissors } = require('discord-gamecord');

        const Game = new RockPaperScissors({
          message: message,
          isSlashGame: false,
          opponent: message.mentions.users.first(),
          embed: {
            title: 'Oẳn Tù Tì',
            color: '#fbc2ff',
            description: 'Nhấn 1 nút để chọn.'
          },
          buttons: {
            rock: 'Búa',
            paper: 'Bao',
            scissors: 'Kéo'
          },
          emojis: {
            rock: '🌑',
            paper: '📰',
            scissors: '✂️'
          },
          mentionUser: true,
          timeoutTime: 60000,
          buttonStyle: 'PRIMARY',
          pickMessage: 'Bạn chọn {emoji}.',
          winMessage: '**{player}** đã thắng! Chúc mừng!',
          tieMessage: 'Hòa! không có ai thắng!',
          timeoutMessage: 'Game chưa kết thúc! Không có ai thắng!',
          playerOnlyMessage: 'Chỉ có {player} và {opponent} có thể sử dụng nút này.'
        });
        
        Game.startGame();
    }
}