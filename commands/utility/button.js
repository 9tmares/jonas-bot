const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, MessageFlags, ChannelType } = require('discord.js');

module.exports = {
	cooldown: 5,
	category: 'utility',
	data: new SlashCommandBuilder()
		.setName('button')
		.setDescription('RReturn a button interaction.'),

	async execute(interaction, client) {
		const button = new ButtonBuilder()
            .setCustomId('try-b')
            .setLabel('Try Button')
            .setStyle(ButtonStyle.Primary);

        
        const row = new ActionRowBuilder();
        row.addComponents(button);

        await interaction.reply({ rows: [row], content: 'Click the button below to try it out!' });


    }
};