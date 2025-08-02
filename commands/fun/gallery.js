const { SlashCommandBuilder, EmbedBuilder, MessageReaction } = require('discord.js');
const { PaginationBuilder } = require('discord.js'); // Assuming you have a PaginationBuilder for handling pagination
const { getRandomPurple, getGallery, incrementIndex } = require('../../util.js'); // Assuming util.js is in the parent directory
const wait = require('node:timers/promises').setTimeout;       

let index = 0;

module.exports = {
	category: 'fun',
	data: new SlashCommandBuilder()
            .setName('gallery')
            .setDescription('Random quote from \'Your Throne\''),
        async execute(interaction) {

            const galleryEmbed = new EmbedBuilder()
                .setColor(getRandomPurple())
                .setTitle('Your Throne Gallery')
                .setAuthor({ name: 'Your Throne・gallery', iconURL: interaction.client.user.displayAvatarURL() })
                .setImage(getGallery(index))
                .setDescription('Click the arrows to navigate through the gallery.')
                .setFooter({ text: 'Source: Your Throne', iconURL: 'https://static.wikia.nocookie.net/your_throne/images/a/ad/Korean_thumbnail_03.jpg/revision/latest/scale-to-width-down/275?cb=20230112050346' });


            const response = await interaction.reply({ embeds: [galleryEmbed], withResponse: true});
            const { message } = response.resource;
            message.react('⬅️').then(async () => await message.react('➡️'));

            const collectorFilter = (reaction, user) => {
                return ['⬅️', '➡️'].includes(reaction.emoji.name) && user.id === interaction.user.id;
            };
            
            await wait(1000); // Wait for a second to ensure reactions are added
            // Create a reaction collector to handle the reactions
            message.createReactionCollector({ filter: collectorFilter, time: 60000, errors: ['time'] })
                .on('collect', (reaction) => {
                    if (reaction.emoji.name === '⬅️' && index > 0) {
                        index = index > 0 ? index - 1 : 0; // Prevent going below 0
                        galleryEmbed.setImage(getGallery(index));
                        interaction.editReply({ embeds: [galleryEmbed], withResponse: true });
                    } else if (reaction.emoji.name === '➡️') {
                        index = incrementIndex(index); // Assuming this function increments the index correctly
                        galleryEmbed.setImage(getGallery(index));
                        interaction.editReply({ embeds: [galleryEmbed], withResponse: true });
                    }
                    reaction.users.remove(interaction.user.id); // Remove user's reaction to prevent multiple reactions
                })
                .on('end', (collected) => {
                    index = incrementIndex(index); // Reset index or handle end of collection
                    if (collected.size === 0) {
                        interaction.followUp('No reactions were collected. Gallery viewing ended.');
                    }
                    interaction.channel.send(`Gallery viewing ended.`);
                });


        },
};