const { REST, Routes } = require('discord.js');
const { clientId, guildId, token } = require('../../config.json');
const fs = require('node:fs');
const path = require('node:path');

module.exports = (client) => {
	client.handleCommands = async () => {
		const foldersPath = path.join(__dirname, '..', '..', 'commands');
		const commandFolders = fs.readdirSync(foldersPath);

		for (const folder of commandFolders) {
			const commandsPath = path.join(foldersPath, folder);
			const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

			for (const file of commandFiles) {
				const filePath = path.join(commandsPath, file);
				const command = require(filePath);
				if ('data' in command && 'execute' in command) {
					if (client.commands.has(command.data.name)) {
						console.warn(`[DUPLICATE] Command name "${command.data.name}" found at ${filePath}.`);
					} else {
						client.commands.set(command.data.name, command);
						client.commandArray.push(command.data.toJSON());
					}
				} else {
					console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
				}
			}
		}

		const rest = new REST().setToken(token);

		// and deploy your commands!
		(async () => {
			try {
				console.log(`Started refreshing ${client.commands.length} application (/) commands.`);

				// The put method is used to fully refresh all commands in the guild with the current set
				const data = await rest.put(
					Routes.applicationCommands(clientId),
					{ body: client.commandArray },
					Routes.applicationGuildCommands(clientId, guildId),
					{ body: "" },
				);

				console.log(`Successfully reloaded ${data.length} application (/) commands.`);
			} catch (error) {
				// And of course, make sure you catch and log any errors!
				console.error(error);
			}
		})();

	}

};