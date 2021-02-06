const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://cdn.zerotwo.dev/BITE/af512c2c-de0c-4ec9-825a-f898f8853c16.gif',
  'https://cdn.zerotwo.dev/BITE/4cdffd7c-4a52-4d32-9d9b-f9beef46f2fc.gif',
  'https://cdn.zerotwo.dev/BITE/22b00f25-9675-41b3-a3c7-517d75b2e7e7.gif',
  'https://cdn.zerotwo.dev/BITE/1b0e22a5-0141-4a9f-8dc4-42613503d9c8.gif',
  'https://cdn.zerotwo.dev/BITE/22b00501-940b-4bb5-bd7b-19c3e48380f1.gif',
  'https://cdn.zerotwo.dev/BITE/bc3f5037-b30f-4f26-989f-12461c31da71.gif',
  'https://cdn.zerotwo.dev/BITE/c78e4abc-4130-4fc7-a26d-8460d3da0af2.gif',
  'https://cdn.zerotwo.dev/BITE/67decd1b-fb4f-48bb-8215-7068c3f3661a.gif',
  'https://cdn.zerotwo.dev/BITE/de6cf869-916c-4fc2-876d-4b2fabb75cf9.gif'  
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
        .setTitle('Bite')
        .setColor('#000000')
        .setDescription(`${message.author} acaba de morder ${user}!`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
} 