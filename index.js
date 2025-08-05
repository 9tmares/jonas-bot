const fs = require('node:fs');
const path = require('node:path');
const { connect } = require('mongoose');
const { Client, Collection, Events, GatewayIntentBits, MessageFlags } = require('discord.js');
const { token, databaseToken } = require('./config.json');

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.GuildMessageReactions,
		GatewayIntentBits.GuildPresences,
	],
});

client.commands = new Collection();
client.cooldowns = new Collection();
client.buttons = new Collection();
client.selectMenus = new Collection();
client.commandArray = [];

const functionPath = path.join(__dirname, 'functions');
const functionFolders = fs.readdirSync(functionPath);

for (const folder of functionFolders) {
	const functionsPath = path.join(functionPath, folder);
	const functionFiles = fs.readdirSync(functionsPath).filter(file => file.endsWith('.js'));
	for (const file of functionFiles) {
		const filePath = path.join(functionsPath, file);
		require(filePath)(client);
	}
}

client.handleEvents();
client.handleCommands();
client.handleComponents();
client.login(token);

(async () => {
	connect(databaseToken)
		.then(() => {
			console.log('Connected to the database');
		})
		.catch(err => {
			console.error('Database connection error:', err);
		});
})();