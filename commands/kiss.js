const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://imgur.com/iclUiUN.gif',
  'https://imgur.com/lYQt9rx.gif',
  'https://imgur.com/w1TU5mR.gif',
  'https://i.giphy.com/media/G3va31oEEnIkM/source.gif',
  'https://i.giphy.com/media/FqBTvSNjNzeZG/source.gif',
  'https://i.giphy.com/media/bGm9FuBCGg4SY/source.gif',
  'https://i.giphy.com/media/zkppEMFvRX5FC/source.gif',
  'https://i.giphy.com/media/JFmIDQodMScJW/giphy.webp',
  'https://i.giphy.com/media/12VXIxKaIEarL2/source.gif',
  'https://i.imgur.com/OE7lSSY.gif',
  'https://cutewallpaper.org/21/anime-girl-and-guy-kissing/kiss-me-gifs-WiffleGif.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('Você não mencionou nenhum usuário válido!');
}
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Kiss')
        .setColor('#000000')
        .setDescription(`${message.author} acaba de beijar ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter(':revolving_hearts:')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
} 