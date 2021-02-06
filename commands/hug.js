const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://cdn.zerotwo.dev/HUG/cdf3ffae-9ea9-4e5a-a212-fad4a7340d20.gif',
  'https://cdn.zerotwo.dev/HUG/abba0439-2f1f-4d25-9097-6181f6364bc2.gif',
  'https://cdn.zerotwo.dev/HUG/24686641-5564-4ca1-b9c0-dd0bebf75685.gif',
  'https://cdn.zerotwo.dev/HUG/47a04d22-c1d4-4974-8b43-e891466eedb4.gif',
  'https://cdn.zerotwo.dev/HUG/d6d0a532-1eed-4718-98d3-03fd213c6d18.gif',
  'https://cdn.zerotwo.dev/HUG/44fe0071-1743-42ff-8477-74ac335bec5e.gif',
  'https://cdn.zerotwo.dev/HUG/1f646518-d712-4a32-a3e1-0b7f75ec1257.gif',
  'https://cdn.zerotwo.dev/HUG/fb248ca7-9e33-45e0-8b0a-c2d338eee707.gif',
  'https://cdn.zerotwo.dev/HUG/f7d2556f-d556-4963-96d7-beeb308df970.gif',
  'https://cdn.zerotwo.dev/HUG/b30d23e3-465c-4d86-a48e-b6c1ecbb8b22.gif'
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
        .setTitle('Hug!')
        .setColor('#000000')
        .setDescription(`${message.author} acaba de abraçar ${user}!`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
} 