// commands/music/play.js

const { execute } = require('../../musicPlayer');

module.exports = {
    data: {
        name: 'play',
        description: '播放音樂',
    },
    async execute(interaction) {
        if (!interaction.member.voice.channel) {
            return interaction.reply('請先加入語音頻道！');
        }

        // 獲取使用者輸入的參數，這裡假設指令為 /play <歌曲名稱或關鍵字>
        const searchString = interaction.options.getString('query');

        // 執行播放音樂
        try {
            await execute(interaction, searchString);
        } catch (error) {
            console.error(error);
            if (interaction.replied || interaction.deferred) {
                await interaction.followUp({ content: '搜尋或播放音樂時發生錯誤！', ephemeral: true });
            } else {
                await interaction.reply({ content: '搜尋或播放音樂時發生錯誤！', ephemeral: true });
            }
        }
    },
};
