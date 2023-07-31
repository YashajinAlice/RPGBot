const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('隨機')
        .setDescription('在參數中隨機選擇：用法/隨機 1 2 3 4')
        .addStringOption(option =>
            option.setName('選項')
                .setDescription('要選擇的項目')
                .setRequired(true)),
    async execute(interaction) {
        const options = interaction.options.getString('選項').split(' ');
        const randomIndex = Math.floor(Math.random() * options.length);
        const selectedItem = options[randomIndex];

        await interaction.reply(`隨機選擇的項目是：${selectedItem}`);
    },
};