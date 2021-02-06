const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://cdn.zerotwo.dev/HIGHFIVE/da95c3e2-2d87-43e7-b5e2-610dd0f5a51c.gif',
  'https://cdn.zerotwo.dev/HIGHFIVE/c67ae30a-f3d7-4702-b241-204ea9cb6642.gif',
  'https://cdn.zerotwo.dev/HIGHFIVE/cee88bb7-ab71-4e59-b0b1-1e932ea841d0.gif',
  'https://cdn.zerotwo.dev/HIGHFIVE/c20cf7be-e379-4555-99b2-0a53b6eee82e.gif',
  'https://cdn.zerotwo.dev/HIGHFIVE/2ea067ce-04d5-47a4-9329-c9e2cc22defb.gif',
  'https://cdn.zerotwo.dev/HIGHFIVE/84e7a5f2-e961-4a9a-8881-b7682b96a67f.gif',
  'https://cdn.zerotwo.dev/HIGHFIVE/0e8f65c9-ca26-45e0-ba46-7b7d20526caa.gif'
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
        .setTitle('Highfive!')
        .setColor('#000000')
        .setDescription(`${message.author} acaba de tocar aqui com ${user}!`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('🖐️')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}