const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NDY1MzAyMjE2MDIzMjEyMDMy.DiLj0Q.ODJ_zvjHmfO7uhvGgRb9xuGxqyc');
