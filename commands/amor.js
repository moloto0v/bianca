const Discord = require('discord.js');

exports.run = async (client, message, args) => {

let person = message.mentions.users.first() || client.users.cache.get(args[0]);


        // Se não existir uma menção na mensagem
        // Então retornar uma mensagem de erro dizendo que não ha nenhuma menção
        if (!person) {
return message.reply('Você não mencionou nenhum usuário válido!');
}

        // love é a porcentágem 
        // loveIndex is é um numero de 0 a 10 baseado na                                   variavel anterior
        const love = Math.random() * 100;
        const loveIndex = Math.floor(love / 10);
        const loveLevel = "💖".repeat(loveIndex) + "💔".repeat(10 - loveIndex);

let avatar = person.displayAvatarURL({format: 'png'});
        const embed = new Discord.MessageEmbed()
            .setColor("#ffb6c1")
            .setThumbnail(avatar)
            .addField(`☁ **${message.author.username}** ama **${person.username}** :`,
            `💟 ${Math.floor(love)}%\n\n${loveLevel}`);

        message.channel.send(embed);   
} 
  //NÃO LEIA ESTA LINHA DE CÓDIGO