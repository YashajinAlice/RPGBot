const fs = require('fs');
const path = require('path');
const { Client, Collection, Events, GatewayIntentBits, ActivityType } = require('discord.js');
const { token } = require('./config.json');

//測試
const MusicBot = require(`./music`);

const bot = new MusicBot();
//測試

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });


// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
	client.user.setStatus('dnd');
	client.user.setActivity('第一代的更新版本 |A_L_I_C_E| Servers ' + client.guilds.cache.size , { type: ActivityType.Watching });
	console.log(`Ready! Logged in as ${c.user.tag}`);
    
});

//建構音樂列表
client.on('message', message => {
	if (message.content.startsWith('/播放')) {
	  const url = message.content.slice(4).trim();
	  bot.play(message, url);
	} else if (message.content === '/跳過') {
	  bot.skip(message);
	} else if (message.content.startsWith('/搜尋')) {
	  const query = message.content.slice(4).trim();
	  bot.searchAndPlay(message, query);
	} else if (message.content.startsWith('/搜尋spotify')) {
	  const query = message.content.slice(10).trim();
	  bot.searchAndPlaySpotify(message, query);
	}
  });
  
  client.on('voiceStateUpdate', (oldState, newState) => {
	if (oldState.channelID && !newState.channelID) {
	  bot.checkVoiceChannel(newState.member);
	}
  });


client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isChatInputCommand()) return;

	const command = interaction.client.commands.get(interaction.commandName);

	if (!command) {
		console.error(`No command matching ${interaction.commandName} was found.`);
		return;
	}

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		if (interaction.replied || interaction.deferred) {
			await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
		} else {
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	}
});


client.commands = new Collection();

const commandsPath = path.join(__dirname, `commands`);
const commandFolders = fs.readdirSync(commandsPath);

for (const folder of commandFolders) {
    const folderPath = path.join(commandsPath, folder);
    const commandFiles = fs.readdirSync(folderPath).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const filePath = path.join(folderPath, file);
        const command = require(filePath);
        // Set a new item in the Collection with the key as the command name and the value as the exported module
        if ('data' in command && 'execute' in command) {
            client.commands.set(command.data.name, command);
        } else {
            console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
        }
    }
}


// Log in to Discord with your client's token
client.login(token);