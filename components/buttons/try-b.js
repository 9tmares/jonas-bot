const { SlashCommandBuilder, MessageFlags, ChannelType } = require('discord.js');

module.exports = {
	data: {
        name: 'try-b',
    },
	async execute(interaction, client) {
		await interaction.reply({
            content: 'This is a test response from the try-b command.',
        });

    }
};