const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('《 伺服器可用指令 》'),
    async execute(interaction) {
        // 在這裡撰寫處理 "help" 指令的程式碼邏輯
        await interaction.reply('《 指令說明 》\n =============================\n《 RPG 》\n /exp : 查看目前經驗值 \n /money deposit : 將金錢轉入其他用戶\n/money : 查看自身目前僅有的金錢量\n/userinfo : 角色資訊\n/work : 工作\n=============================\n/modRPG : 啟用RPG功能\n=============================\n 《 help 》指令尚在開發中');
    },
};