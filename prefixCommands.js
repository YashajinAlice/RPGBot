// prefixCommands.js

let prefix = 'nee!'; // 默認前綴

function handlePrefixCommand(message) {
  const args = message.slice(prefix.length).trim().split(' ');
  const command = args.shift().toLowerCase();

  if (command === 'prefix') {
    if (args.length === 1) {
      prefix = args[0];
      console.log(`前綴已更改為 ${prefix}`);
    } else {
      console.log('請提供要設置的前綴');
    }
  } else {
    // 處理其他指令...
  }
}

module.exports = {
  prefix,
  handlePrefixCommand
};