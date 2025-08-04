const fs = require('node:fs');
const path = require('node:path');

module.exports = (client) => {
    client.handleCommands = async () => {
        const eventsPath = path.join(__dirname, 'events');
        const eventFolders = fs.readdirSync(eventsPath);


        for (const folder of componentFolders) {
            const eventsPath = path.join(foldersPath, folder);
            const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

            switch (folder) {
                case 'client':
                    for (const file of eventFiles) {
                        const filePath = path.join(eventsPath, file);
                        const event = require(filePath);
                        if (event.once) {
                            client.once(event.name, (...args) => event.execute(...args));
                        } else {
                            client.on(event.name, (...args) => event.execute(...args));
                        }
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