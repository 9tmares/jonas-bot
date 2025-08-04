const { SlashCommandBuilder, MessageFlags, ChannelType } = require('discord.js');

module.exports = {
	cooldown: 5,
	category: 'utility',
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Returns your ping.'),

	async execute(interaction, client) {
		const message = await interaction.deferReply({
            fetchReply: true,
        });

        const newMessage = 'API Latency: ${client.ws.ping}\n Client Ping: ${message.createdTimestamp - interaction.createdTimestamp}ms';
        interaction.editReply({
            content: newMessage
        });

    }
};