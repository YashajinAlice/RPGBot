// commands/music/pause.js

const { pause } = require('../../musicPlayer');

module.exports = {
    data: {
        name: 'pause',
        description: '暫停播放音樂',
    },
    async execute(interaction) {
        // 檢查使用者是否在語音頻道中
        if (!interaction.member.voice.channel) {
            return interaction.reply('請先加入語音頻道！');
        }

        // 執行暫停播放音樂
        try {
            pause(interaction);
        } catch (error) {
            console.error(error);
            if (interaction.replied || interaction.deferred) {
                await interaction.followUp({ content: '暫停音樂時發生錯誤！', ephemeral: true });
            } else {
                await interaction.reply({ content: '暫停音樂時發生錯誤！', ephemeral: true });
            }
        }
    },
};
