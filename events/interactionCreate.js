const { Collection, Events, MessageFlags } = require('discord.js');

module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction, client) {
        const { user, commandName } = interaction;
        const { cooldowns } = client;

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
				// Example: Handle different button actions
				
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
			try {
				const { customId, values } = interaction;
				

				// Example: Role selection menu
				if (customId === 'role_select_menu') {
					const member = interaction.member;
					const selectedRoles = values;
					
					// Get all possible roles from this menu
					const availableRoles = {
						'role_developer': '123456789012345678',
						'role_designer': '123456789012345679',
						'role_tester': '123456789012345680'
					};
					
					// Add new roles and remove unselected ones
					const roleUpdates = [];
					
					for (const [value, roleId] of Object.entries(availableRoles)) {
						if (selectedRoles.includes(value)) {
							if (!member.roles.cache.has(roleId)) {
								roleUpdates.push(member.roles.add(roleId));
							}
						} else {
							if (member.roles.cache.has(roleId)) {
								roleUpdates.push(member.roles.remove(roleId));
							}
						}
					}
					
					await Promise.all(roleUpdates);
					await interaction.reply({
						content: `Updated your roles!`,
						ephemeral: true
					});
				}
				
				// Example: Settings menu
				else if (customId === 'settings_menu') {
					const selectedSetting = values[0]; // Single selection
					
					switch (selectedSetting) {
						case 'notifications_on':
							await enableNotifications(interaction.user.id);
							await interaction.reply({
								content: 'Enabled notifications!',
								ephemeral: true
							});
							break;
							
						case 'notifications_off':
							await disableNotifications(interaction.user.id);
							await interaction.reply({
								content: 'Disabled notifications!',
								ephemeral: true
							});
							break;
							
						case 'theme_dark':
						case 'theme_light':
							await setUserTheme(interaction.user.id, selectedSetting);
							await interaction.update({
								content: `Theme set to ${selectedSetting.split('_')[1]}!`,
								components: [] // Optional: remove the menu
							});
							break;
					}
				}
				
				// Example: Pagination or data selection
				else if (customId === 'data_selection') {
					const selectedData = values[0];
					const data = await fetchData(selectedData);
					
					await interaction.update({
						content: `Showing data for ${selectedData}:\n${data}`,
						components: [createNewSelectMenu()] // Optional: refresh menu
					});
				}
				
			} catch (error) {
				console.error('Select Menu Error:', error);
				
				if (interaction.replied || interaction.deferred) {
					await interaction.followUp({
						content: 'Failed to process your selection!',
						ephemeral: true
					});
				} else {
					await interaction.reply({
						content: 'Failed to process your selection!',
						ephemeral: true
					});
				}
			}
		}
        // You can add more interaction types as needed
    },
};