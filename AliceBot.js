//====================
//= 作者：Alice       
//= 版本：1.0.0              
//= 版本：V14（JS）                
//= 語言：UTF-8                
//====================

const fs = require('fs');
const path = require('path');
const { Client, Collection, Events, GatewayIntentBits, ActivityType } = require('discord.js');
const { token } = require('./config.json');

const Discord = require(`discord.js`);

const prefix = '!'; // 你可以更改指令前綴符號

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });


// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
	client.user.setStatus('dnd');
	client.user.setActivity('第一代的更新版本 |A_L_I_C_E| Servers ' + client.guilds.cache.size , { type: ActivityType.Watching });
	console.log(`Ready! Logged in as ${c.user.tag}`);
    
});

//音樂框架
client.on('message', async message => {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;
  
	const args = message.content.slice(prefix.length).trim().split(' ');
	const command = args.shift().toLowerCase();
  
	if (command === 'play') {
	  if (!message.member.voice.channel) {
		return message.channel.send('請先加入語音頻道！');
	  }
  
	  if (!args.length) {
		return message.channel.send('請輸入要搜尋的音樂名稱或關鍵字！');
	  }
  
	  const searchString = args.join(' ');
	  execute(message, searchString);
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