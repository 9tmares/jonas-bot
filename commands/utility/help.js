const { ActionRowBuilder, ButtonBuilder, ButtonStyle, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, SlashCommandBuilder } = require('discord.js');
const { ComponentType, EmbedBuilder } = require('discord.js');
const { AttachmentBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;   
// ...
const utility = new AttachmentBuilder('./assets/Utility.png');

module.exports = {
	category: 'utility',
	data: new SlashCommandBuilder()
            .setName('help')
            .setDescription('List all available commands and their descriptions'),
        
        async execute(interaction) {
            const UtilityEmbed = new EmbedBuilder()
                .setColor(0x898AC4)
                .setTitle('Utility Commands')
                .setAuthor({ name: interaction.user.tag+'・help', iconURL: interaction.user.displayAvatarURL() })
                .addFields(
                    interaction.client.commands.map(command => {
                        return { name: '/'+command.data.name, value: command.data.description };
                    })
                )
                
                .setTimestamp()
                .setFooter({ text: 'Medea Solon', iconURL: interaction.client.user.displayAvatarURL() });

            const select = new StringSelectMenuBuilder()
                .setCustomId('helpMenu')
                .setPlaceholder('Make a selection!')
                .addOptions(
                    new StringSelectMenuOptionBuilder()
                        .setLabel('Utility')
                        .setDescription('The utility commands.')
                        .setValue('utility'),
                    new StringSelectMenuOptionBuilder()
                        .setLabel('Currency')
                        .setDescription('The currency commands.')
                        .setValue('currency'),
                    new StringSelectMenuOptionBuilder()
                        .setLabel('Fun')
                        .setDescription('The fun commands.')
                        .setValue('fun'),
                );

            const prev = new ButtonBuilder()
                .setCustomId('prev')
                .setLabel('<--')
                .setStyle(ButtonStyle.Primary);

            const next = new ButtonBuilder()
                .setCustomId('next')
                .setLabel('-->')
                .setStyle(ButtonStyle.Primary);

            const row1 = new ActionRowBuilder()
	            .addComponents(select);

            const row2 = new ActionRowBuilder()
                .addComponents(prev, next);


            await interaction.channel.send({ files: [utility], embeds: [UtilityEmbed], components: [row1, row2], withResponse: true });
            
        },
};