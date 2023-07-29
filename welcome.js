const { createCanvas, loadImage, registerFont } = require('canvas');

module.exports = async (member, welcomeChannel) => {
  // 設置字體
  registerFont('path/to/font.ttf', { family: 'Arial' });

  const canvas = createCanvas(500, 200);
  const context = canvas.getContext('2d');

  // 載入背景圖片
  const backgroundImage = await loadImage('https://cdn.discordapp.com/attachments/1123152882288570379/1134793135906627698/109067533_p0_master1200.jpg');

  // 繪製背景圖片
  context.drawImage(backgroundImage, 0, 0, 500, 200);

  // 添加文字到卡片中
  context.font = '24px Arial';
  context.fillStyle = '#000000';
  context.fillText(`歡迎，${member}！祝你在這裡玩得開心。`, 50, 100);

  // 將卡片圖片發送到歡迎頻道
  welcomeChannel.send({
    files: [canvas.toBuffer()],
  });
};