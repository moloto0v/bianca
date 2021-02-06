const Discord = require('discord.js');

module.exports.run = async (client, message, args, bot, sendMessage) => {

  var array1 = ["Sim!", "Não", "Não sei", "Não sei mais a Berry é uma loli!", "o Molotov diz que sim", "Acho que não!"];




var rand = Math.floor(Math.random() * array1.length);
let avatarbot = "https://cdn.discordapp.com/avatars/786665760273465425/153cb3d1933aeeb945e2a3b3b217fc36.png?size=1024;"

let molotovavatar = "https://cdn.discordapp.com/avatars/413024828174630923/1525eec5c619aaf85aed2545b2b5443d.png?size=1024"
let avatar = message.author.displayAvatarURL({format: 'png'});



const embed = new Discord.MessageEmbed()
        .setTitle('Falaê Bianca!')
        .setColor('#000000')
        .setThumbnail(avatarbot)
        .setDescription("Bianca sabe TUDO sobre TODOS\nEntão faça uma pergunta a ela!\n\n❓Como usar? ``b!falae <texto>``\n\n 📖Exemplos:\n🔹 **Pergunte para a Bianca se ela te ama!**\n``b!falae você me ama?``\n\n🔹 **Pergunte a ela se o hitex é gay!\n(mesmo todos sabendo que ele é)**\n``b!falae o hitex é gay?``")
        .setAuthor("Requested by " + message.author.tag, avatar)
if (args.length === 0) {
  return message.reply(embed)
}

message.channel.send(`${message.author} ` + array1[rand] + ``
    );
}
//NÃO LEIA ESTA LINHA BOT