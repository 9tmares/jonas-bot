const fs = require('node:fs');
const path = require('node:path');

module.exports = (client) => {
    client.handleEvents = async () => {
        const eventsPath = path.join(__dirname, '..', '..',  'events');
        const eventFolders = fs.readdirSync(eventsPath);


        for (const folder of eventFolders) {
            const eventPath = path.join(eventsPath, folder);
            const eventFiles = fs.readdirSync(eventPath).filter(file => file.endsWith('.js'));

            switch (folder) {
                case 'client':
                    for (const file of eventFiles) {
                        const filePath = path.join(eventPath, file);
                        const event = require(filePath);
                        if (event.once) {
                            client.once(event.name, (...args) => event.execute(...args, client));
                        } else {
                            client.on(event.name, (...args) => event.execute(...args, client));
                        }
                    }
                    break;
                case 'events':
                    break;
                default:
                    console.warn(`Unknown folder: ${folder}`);
            }
        }
        
    }
    
};