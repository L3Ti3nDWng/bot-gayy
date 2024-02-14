module.exports = {
    name: 'prefix',
    description: 'Xem /Lấy prefix hiện tại của bot.',
    type: 'CHAT_INPUT',
    options: [
        {
            name: 'prefix',
            description: 'Prefix bạn muốn đổi.',
            type: 'STRING',
            required: false
        }
    ],

    run: async (client, interaction, serverData) => {
        const prefixSet = interaction.options.get('prefix');
        if(!prefixSet) return interaction.reply(`Prefix hiện tại của server là: "${serverData.prefix}`);
        await db.set(interaction.guildId, { prefix: prefixSet.toLowerCase() });
        interaction.reply(`Prefix của server đã được cập nhật thành: "${prefixSet.toLowerCase()}"`);
    },
};