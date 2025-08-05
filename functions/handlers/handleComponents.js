const fs = require('node:fs');
const path = require('node:path');

module.exports = (client) => {
	client.handleComponents = async () => {
		const componentsPath = path.join(__dirname, '..', '..', 'components');
		const componentFolders = fs.readdirSync(componentsPath);

		for (const folder of componentFolders) {
			const componentPath = path.join(componentsPath, folder);
			const componentFiles = fs.readdirSync(componentPath).filter(file => file.endsWith('.js'));

			const { buttons, selectMenus } = client;
			switch (folder) {
				case 'buttons':
					for (const file of componentFiles) {
						const filePath = path.join(componentPath, file);
						const button = require(filePath);
						buttons.set(button.data.name, button);
					}
					break;
				case 'selectMenus':
					for (const file of componentFiles) {
						const filePath = path.join(componentPath, file);
						const menu = require(filePath);
						selectMenus.set(menu.data.name, menu);
					}
					break;
				default:
					console.warn(`Unknown folder: ${folder}`);
			}

		}

	}

};