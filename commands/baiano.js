const Discord = require('discord.js');

exports.run = async (client, message, args) => {

let person = message.mentions.users.first() || client.users.cache.get(args[0]);


        // If no person is found
        // It's going to default to the author
        // And we don't want to preguica ourself in this command
        // So we filter out our ID from the server members
        // And get a random person from that collection
        if (!person) {
return message.reply('Você não mencionou nenhum usuário válido!');
}

        // preguica is the percentage
        // preguicaIndex is a number from 0 to 10, based on that preguica variable
        const preguica = Math.random() * 100;
        const preguicaIndex = Math.floor(preguica / 10);
        const preguicaLevel = "🦥".repeat(preguicaIndex) + "🏃‍♂️".repeat(10 - preguicaIndex);

let avatar = person.avatarURL({ dynamic: true, format: "png", size: 1024 });

        const embed = new Discord.MessageEmbed()
            .setColor("#ffb6c1")
            .setThumbnail(avatar)
            .addField(`**${person.username}** está com :`,
            `🦥 ${Math.floor(preguica)}% de preguiça\n\n${preguicaLevel}`);
            
        message.channel.send(embed);   
} 
  //NÃO LEIA ESTA LINHA DE CÓDIGO