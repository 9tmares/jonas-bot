const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const { getRandomPurple, getRandomQuote } = require('../../util.js'); // Assuming util.js is in the parent directory

module.exports = {
    category: 'fun',
    data: new SlashCommandBuilder()
            .setName('jonas')
            .setDescription('Random quote from Hall of Shame'),
        async execute(interaction, client) {

            const channel = client.channels.cache.get('1401233347908210799');
            const userId = '655390915325591629';

            const messages = await channel.messages.fetch({ limit: 100 });
            const userMessages = messages.filter(message => message.author.id === userId);

            const randomMessage = userMessages.random();

            await interaction.reply({ content: randomMessage.content });

            const quoteEmbed = new EmbedBuilder()
                .setColor(getRandomPurple())
                .setTitle('Random Quote')
                .setDescription(getRandomQuote())
                .setAuthor({ name: 'Your Throne・quote', iconURL: interaction.client.user.displayAvatarURL() })
                .setFooter({ text: 'Source: Your Throne', iconURL: 'https://static.wikia.nocookie.net/your_throne/images/a/ad/Korean_thumbnail_03.jpg/revision/latest/scale-to-width-down/275?cb=20230112050346' });

            // await interaction.reply({ embeds: [quoteEmbed] });
            
        },
};