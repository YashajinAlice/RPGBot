// commands/music/skip.js

const { skip } = require('../../musicPlayer');

module.exports = {
    data: {
        name: 'skip',
        description: '跳過目前播放的音樂',
    },
    async execute(interaction) {
        // 檢查使用者是否在語音頻道中
        if (!interaction.member.voice.channel) {
            return interaction.reply('請先加入語音頻道！');
        }

        // 執行跳過音樂
        try {
            skip(interaction);
        } catch (error) {
            console.error(error);
            if (interaction.replied || interaction.deferred) {
                await interaction.followUp({ content: '跳過音樂時發生錯誤！', ephemeral: true });
            } else {
                await interaction.reply({ content: '跳過音樂時發生錯誤！', ephemeral: true });
            }
        }
    },
};
