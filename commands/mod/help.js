const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder  } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help菜單')
        .setDescription('《 伺服器可用指令 》'),
    async execute(interaction) {
        const embed = new EmbedBuilder ()
            .setColor('#9810ff')
            .setTitle('A_L_I_C_E')
            .setDescription('人工高適應性知性自律存在')
            .addFields(
                { name: '自我檢測執行...', value: '🔨 版本開發進度 15%\n 🎧 音樂系統 X \n ⚔️ RPG系統(開發中) \n 🛠️ MOD管理系統 X \n ... \n ...' },
                { name: `說明`, value:`此機器人尚在開發當中...`},
                { name: '版本', value: 'Ver:1.0' }
            )
            .setTimestamp();

        await interaction.reply({ embeds: [embed] });
    },
};