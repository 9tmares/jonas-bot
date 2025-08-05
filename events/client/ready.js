const { Events } = require('discord.js');
const { ActivityType } = require('discord.js')

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
		client.user.setPresence({ 
			activities: [{ 
				name: 'the Jonas Brothers', 
				type: ActivityType.Listening, 

			}], 
			status: 'dnd' 
		});

		// Accepted activity types
		// ActivityType.Playing
		// ActivityType.Listening
		// ActivityType.Watching
		// ActivityType.Competing
		// ActivityType.Streaming - Lets you use url parameter. This can be a YouTube or Twitch link.
		// ActivityType.Custom - Unsupported in discord.js. Will be added at some point.

		// Accepted statusses
		// "online"
		// "offline"
		// "idle"
		// "dnd"

	},
	
};