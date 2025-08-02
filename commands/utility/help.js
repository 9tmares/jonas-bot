const { ActionRowBuilder, ButtonBuilder, ButtonStyle, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, SlashCommandBuilder } = require('discord.js');
const { ComponentType, EmbedBuilder } = require('discord.js');
const { AttachmentBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;   
// ...
const utility = new AttachmentBuilder('./assets/Utility.png');
const currency = new AttachmentBuilder('./assets/Currency.png');

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
                .setImage('https://cdn.discordapp.com/attachments/112233445566778899/1234567890123456789/utility_image.png') // Example image URL
                .addFields(
                    interaction.client.commands.map(command => {
                        return { name: '/'+command.data.name, value: command.data.description };
                    })
                )
                
                .setTimestamp()
                .setFooter({ text: 'Medea Solon', iconURL: interaction.client.user.displayAvatarURL() });

            const CurrencyEmbed = new EmbedBuilder()
                .setColor(0x898AC4)
                .setTitle('Currency Commands')
                .setAuthor({ name: interaction.user.tag+'・help', iconURL: interaction.user.displayAvatarURL() })
                .addFields(
                    interaction.client.commands.map(command => {
                        return { name: '/'+command.data.name, value: command.data.description };
                    })
                )
                .setTimestamp()
                .setFooter({ text: 'Medea Solon', iconURL: interaction.client.user.displayAvatarURL() });

            const select = new StringSelectMenuBuilder()
                .setCustomId('starter')
                .setPlaceholder('Make a selection!')
                .addOptions(
                    new StringSelectMenuOptionBuilder()
                        .setLabel('Utility')
                        .setDescription('The utility commands.')
                        .setValue('utility')
                        .setDefault(true),
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
                .setLabel('Previous')
                .setStyle(ButtonStyle.Primary);

            const next = new ButtonBuilder()
                .setCustomId('next')
                .setLabel('Next')
                .setStyle(ButtonStyle.Primary);

            const row1 = new ActionRowBuilder()
	            .addComponents(select);

            const row2 = new ActionRowBuilder()
                .addComponents(prev, next);


            const response1 = await interaction.channel.send({ files: [utility] });
            message_to_edit = await interaction.channel.fetch_message(response1.id);
            await wait(2000); // Wait for a second to ensure reactions are added
            await message_to_edit.edit({ files: [currency]});
            console.log(`Banner message ID: ${interaction.id}`); // Log the banner message ID
            console.log(`Response message ID: ${response1.id}`); // Log the response message ID
            // const response = await interaction.reply({ embeds: [UtilityEmbed], components: [row1] , withResponse: true });
            // const { message } = response.resource;
            // // const response2 = await interaction.channel.send({ components: [row1] , withResponse: true });
            
            // console.log(`Help command executed by ${interaction.user.tag}`); // Log the command execution
            // console.log(`Response message ID: ${message.id}`); // Log the response message ID
            // console.log(`interaction.customId: ${message.customId}`);
            // console.log(`interaction.values: ${message.values}`);

            // const collectorFilter = (user) => {
            //     return user.id === interaction.user.id;
            // };

            // await wait(1000); // Wait for a second to ensure reactions are added
            // message.createMessageComponentCollector({ componentType: ComponentType.StringSelect, filter: collectorFilter, time: 60000, errors: ['time'] })
            //     .on('collect', async (i) => {
            //         if (interaction.customId === 'starter') {
            //             if (interaction.values[0] === 'utility') {
            //                 await interaction.update({ embeds: [UtilityEmbed], components: [row1], withResponse: true });
            //             } else if (interaction.values[0] === 'currency') {
            //                 await interaction.update({ embeds: [CurrencyEmbed], components: [row1], withResponse: true });
            //             } else if (interaction.values[0] === 'fun') {
            //                 await interaction.update({ content: 'Fun commands are not implemented yet.', components: [row1], withResponse: true });
            //             }
            //         }
            //     })
            //     .on('end', (collected) => {
            //         interaction.channel.send(`Help viewing ended.`);
            //     });

            
            // try {
            //     const confirmation = await response.resource.message.awaitMessageComponent({ filter: collectorFilter, time: 60000 });
            //     if (confirmation) {
            //         console.log(`Received interaction: ${confirmation.customId}`);
            //     }
            //     if (confirmation.customId === 'currency') {
            //         await interaction.channel.editReply({embeds: [CurrencyEmbed], components: [row1] , withResponse: true });
            //     }
            // } catch {
            //     await interaction.followUp({ content: 'Action not received within 1 minute, cancelling', components: [] });
            // }

            // await interaction.channel.send({ files: [currency], embeds: [CurrencyEmbed], components: [row1] , withResponse: true });

            // await interaction.channel.send({ content: `Help command executed by ${interaction.user.tag}` }); // Log the command execution
        },
};