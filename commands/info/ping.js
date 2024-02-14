module.exports = {
    name: 'ping',
    category: 'info',
    description: 'Xem ping của bot',
    run: (client, message, args) => {
        message.reply(`🏓Pong!\`${client.ws.ping}ms\``);
    }
}