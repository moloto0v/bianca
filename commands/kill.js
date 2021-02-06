const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://cdn.zerotwo.dev/SHOOT/2bb08ae0-83cb-4442-8e35-789c6a14424d.gif',
  'https://cdn.zerotwo.dev/SHOOT/e420c1f1-2838-45c1-a56c-ca0c16632b42.gif',
  'https://cdn.zerotwo.dev/SHOOT/9037a2eb-4a5a-44f5-95a9-9e96948be530.gif',
  'https://cdn.zerotwo.dev/SHOOT/028bfc32-c06b-4295-87a5-7ddaef08d5ef.gif',
  'https://cdn.zerotwo.dev/SHOOT/5cdb6883-acf4-44a1-98e6-5a249d4b7bfe.gif',
  'https://cdn.zerotwo.dev/SHOOT/a4c62263-fb0d-43d5-bfdd-53ad703817f7.gif',
  'https://cdn.zerotwo.dev/SHOOT/fce35165-b31e-4eea-9184-9dae9be81421.gif',
  'https://cdn.zerotwo.dev/SHOOT/88d41a9a-55ab-4510-8e9e-8073bacd0a05.gif'
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
        .setTitle('Kill')
        .setColor('#000000')
        .setDescription(`${message.author} acaba de matar ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('👊')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}