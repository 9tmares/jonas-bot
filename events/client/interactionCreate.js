const { Collection, Events, MessageFlags } = require('discord.js');

module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction, client) {
        const { user, commandName } = interaction;
        const { cooldowns } = interaction.client;

        // Handle chat input commands
        if (interaction.isChatInputCommand()) {
            const command = client.commands.get(commandName);

            if (!command) {
                console.error(`No command matching ${commandName} was found.`);
                return;
            }

            // Initialize cooldown collection for this command if it doesn't exist
            if (!cooldowns.has(command.data.name)) {
                cooldowns.set(command.data.name, new Collection());
            }

            const now = Date.now();
            const timestamps = cooldowns.get(command.data.name);
            const defaultCooldownDuration = 3;
            const cooldownAmount = (command.cooldown ?? defaultCooldownDuration) * 1000;

            if (timestamps.has(user.id)) {
                const expirationTime = timestamps.get(user.id) + cooldownAmount;

                if (now < expirationTime) {
                    const expiredTimestamp = Math.round(expirationTime / 1000);
                    return interaction.reply({ 
                        content: `Please wait, you are on a cooldown for \`${command.data.name}\`. You can use it again <t:${expiredTimestamp}:R>.`, 
                        flags: MessageFlags.Ephemeral 
                    });
                }
            }

            // Set cooldown
            timestamps.set(user.id, now);
            setTimeout(() => timestamps.delete(user.id), cooldownAmount);

            try {
                await command.execute(interaction, client);
            } catch (error) {
                console.error(error);
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({ 
                        content: 'There was an error while executing this command!', 
                        flags: MessageFlags.Ephemeral 
                    });
                } else {
                    await interaction.reply({ 
                        content: 'There was an error while executing this command!', 
                        flags: MessageFlags.Ephemeral 
                    });
                }
            }
        }
        // Handle button interactions
        else if (interaction.isButton()) {
			const { buttons } = client;
			const { customId } = interaction;
			const button = buttons.get(customId); // Get the button handler

			if (!button) return console.error(`No button handler found for ${customId}`);
			try {
				await button.execute(interaction, client);
			} catch (error) {
				console.error('Button Interaction Error:', error);
				// Different response based on interaction state
				if (interaction.replied || interaction.deferred) {
					await interaction.followUp({ 
						content: 'There was an error processing your button click!', 
						ephemeral: true 
					});
				} else {
					await interaction.reply({ 
						content: 'There was an error processing your button click!', 
						ephemeral: true 
					});
				}
			}
		}
        // Handle select menu interactions
        else if (interaction.isStringSelectMenu()) {
			const { selectMenus } = client;
			const { customId } = interaction;
			const selectMenu = selectMenus.get(customId); // Get the select menu handler

			if (!selectMenu) return console.error(`No select menu handler found for ${customId}`);
			try {
				await selectMenu.execute(interaction, client);
			} catch (error) {
				console.error('Select Menu Interaction Error:', error);
				// Different response based on interaction state
				if (interaction.replied || interaction.deferred) {
					await interaction.followUp({ 
						content: 'There was an error processing your selection!', 
						ephemeral: true 
					});
				}
				else {
					await interaction.reply({ 
						content: 'There was an error processing your selection!', 
						ephemeral: true 
					});
				}
			}
		}
        // You can add more interaction types as needed
    },
};