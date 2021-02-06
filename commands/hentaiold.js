const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://i.redd.it/ixyynxc16k961.jpg',
'https://i.redd.it/7djmfwe8dk961.jpg',
'https://i.imgur.com/72vTqzp.jpg',
'https://i.redd.it/bc3d41780i961.png',
'https://i.redd.it/wn5fxmikhi961.jpg',
'https://i.imgur.com/Mi4CSaX.jpg',
'https://i.redd.it/h9i9o5ggvh961.png',
'https://i.redd.it/yjojq95klk961.jpg',
'https://i.redd.it/tuj23jnlsf961.gif',
'https://i.redd.it/lq1le4sx7i961.jpg',
'https://i.redd.it/a9zaf89s3l961.jpg',
'https://i.redd.it/v2cipbrnik961.png',
'https://i.redd.it/sxg33q1xal961.jpg',
'https://i.redd.it/ss8dxmp7dj961.jpg',
'https://i.redd.it/hargrz7vjj961.jpg',
'https://i.redd.it/b36me36irj961.jpg',
'https://i.redd.it/kzqmeeffej961.png',
'https://i.redd.it/xsazo2l1sj961.jpg',
'https://i.redd.it/l48497elrj961.jpg',
'https://i.redd.it/8x0ijbhtli961.jpg',
'https://i.redd.it/l0s12zq5lj961.jpg',
'https://i.redd.it/dafc3stcsh961.jpg',
'https://external-preview.redd.it/BIXa8I3c7NSS4fvCRabDbhmCb1MTiBl5tx5yWLIYr_A.png?auto=webp&s=cf71e58e9dbf1a95d7af87be7866b895f0ea80e2',
'https://external-preview.redd.it/VOEA-yGFZBv451ZAQUI1Ac3oX6nFqEGGjx98hrSOxj8.jpg?width=640&height=1062&crop=smart&auto=webp&s=81debcf3821454cd0c67e2a5960c608662089bb2',
'https://i.redd.it/rwr6aj6g9c861.png',
'https://i.redd.it/cqqblr3lje961.jpg',
'https://i.redd.it/1ess4uiasi961.jpg',
'https://i.redd.it/097dnoo3se961.jpg',
'https://i.redd.it/dznm159vuf961.jpg'
];


var rand = list[Math.floor(Math.random() * list.length)];

if (!message.channel.nsfw) {
return message.reply('Este canal não é NSFW!');
}

message.channel.send(`${rand}`);
}