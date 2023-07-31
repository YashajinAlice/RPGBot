const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('問')
        .setDescription('向機器人提問')
        .addStringOption(option =>
            option.setName('query')
                .setDescription('你的問題')
                .setRequired(true)),
    async execute(interaction) {
        if (interaction.replied) {
            return;
        }

        const question = interaction.options.getString('query');
        const chance = Math.floor(Math.random() * 100) + 1;
        const reply = `${question}的機率是 ${chance}%`;

        await interaction.reply(reply);
    },
};