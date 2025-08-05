const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle} = require('discord.js');

module.exports = {
	cooldown: 5,
	category: 'utility',
	data: new SlashCommandBuilder()
		.setName('button')
		.setDescription('Return a button interaction.'),

	async execute(interaction, client) {
		const button = new ButtonBuilder()
            .setCustomId('try-b')
            .setLabel('Try Button')
            .setStyle(ButtonStyle.Primary);

        
        const row = new ActionRowBuilder();
        row.addComponents(button);

        await interaction.reply({ components: [row] });


    }
};