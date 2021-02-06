const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://media.tenor.com/images/e6300c4002d14bfdc9d284cc3c2b5b02/tenor.gif',
  'https://www.mediafire.com/convkey/586c/a3v45ibbomtqpb1zg.jpg?size_id=4',
  'https://i.imgur.com/fm49srQ.gif',
  'https://media1.tenor.com/images/af36628688f5f50f297c5e4bce61a35c/tenor.gif',
  'https://media1.tenor.com/images/e8f880b13c17d61810ac381b2f6a93c3/tenor.gif',
  'https://i.imgur.com/oOCq3Bt.gif',
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('Você não mencionou nenhum usuário válido!');
}

let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Slap!')
        .setColor('#000000')
        .setDescription(`${message.author} acaba de dar um tapa em  ${user}!`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('👊')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}