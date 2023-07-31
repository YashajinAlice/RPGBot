const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('money_deposit')
        .setDescription('《 RPG系統準備實裝中 》'),
    async execute(interaction) {
        // 在這裡撰寫處理 "RPG" 指令的程式碼邏輯
        await interaction.reply('《 RPG系統準備實裝中 》');
    },
};