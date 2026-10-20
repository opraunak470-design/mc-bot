const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'aloneSMP-LWrx.aternos.me',
  port: 50377,
  username: 'AternosGuardBot'
});

bot.on('spawn', () => {
  console.log('Bot server me successfully enter ho gaya hai!');
  
  setInterval(() => {
    bot.setControlState('jump', true);
    setTimeout(() => bot.setControlState('jump', false), 1000);
    console.log('Anti-AFK action performed.');
  }, 180000);
});

bot.on('end', (reason) => {
  console.log(`Bot disconnect ho gaya. Reason: ${reason}. Phir se connect kar raha hai...`);
  setTimeout(() => {
    process.exit(1);
  }, 5000);
});

bot.on('error', (err) => {
  console.log('Error aaya:', err);
});
              
