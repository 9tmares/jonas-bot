const fs = require('node:fs');
const path = require('node:path');

module.exports = (client) => {
	client.handleCommands = async () => {
		const foldersPath = path.join(__dirname, 'commands');
		const componentFolders = fs.readdirSync(foldersPath);

		for (const folder of componentFolders) {
			const componentsPath = path.join(foldersPath, folder);
			const componentFiles = fs.readdirSync(componentsPath).filter(file => file.endsWith('.js'));

			const { buttons } = client;
			switch (folder) {
				case 'buttons':
					for (const file of componentFiles) {
						const filePath = path.join(componentsPath, file);
						const button = require(filePath);
						buttons.set(button.data.name, button);
					}
					await client.handleCommands();
					break;
				case 'events':
					await client.handleEvents();
					break;
				default:
					console.warn(`Unknown folder: ${folder}`);
			}

		}

	}

};