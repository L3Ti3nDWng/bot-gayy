module.exports = {
    name: 'say',
    category: 'misc',
    run: (client, message, args) => {
        if(message.deletable) message.delete();
        message.channel.send(args.join(' '))
    }
}