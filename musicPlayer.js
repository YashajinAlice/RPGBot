// musicPlayer.js

// ... 其他程式碼 ...

// 輔助函式：播放音樂
const execute = async (interaction, searchString) => {
  const guildQueue = queue.get(interaction.guild.id);

  // 如果沒有播放清單，則建立一個新的清單
  if (!guildQueue) {
    const queueConstruct = {
      textChannel: interaction.channel,
      voiceChannel: interaction.member.voice.channel,
      connection: null,
      songs: [],
      volume: 5,
      playing: true,
    };

    queue.set(interaction.guild.id, queueConstruct);
    queueConstruct.songs.push(searchString);

    try {
      const connection = await queueConstruct.voiceChannel.join();
      queueConstruct.connection = connection;
      play(interaction.guild, queueConstruct.songs[0]);
    } catch (error) {
      console.error(error);
      queue.delete(interaction.guild.id);
      interaction.reply('加入語音頻道時發生錯誤！');
    }
  } else {
    guildQueue.songs.push(searchString);
    interaction.reply(`已將歌曲「${searchString}」加入播放清單！`);
  }
};

// 輔助函式：暫停音樂
const pause = interaction => {
  // ...
};

// 輔助函式：跳過音樂
const skip = interaction => {
  // ...
};

module.exports = {
  execute,
  pause,
  skip,
};
