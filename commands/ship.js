const Discord = require('discord.js');

exports.run = async (client, message, args) => {
 
            
            let avatarbot = "https://cdn.discordapp.com/avatars/786665760273465425/153cb3d1933aeeb945e2a3b3b217fc36.png?size=1024;"
            let avatar = message.author.displayAvatarURL({format: 'png'})
 const embed0 = new Discord.MessageEmbed()
        .setTitle('Shipou!')
        .setColor('#000000')
        .setThumbnail(avatarbot)
        .setDescription("Shipe uns aos outros usando este comando! \n\n❓ Como usar? ``b!ship @usuário1 @usuário2``\n\n📖 Exemplos:\n**🔹Shipe o nugget com a dash!**\n``b!ship @♤gun♤ @♡Dash♡``")
        .setAuthor("Requested by " + message.author.tag, avatar)

        if (!args[0]) return message.channel.send(embed0)
        if (!args[1]) return message.channel.send("Eita! você esqueceu de mencionar o segundo usuário!")
 
        if (args[0] || args[1]) {
            var FirstUser = message.mentions.members.first() || message.guild.members.cache.get(args[0])
            var SecondUser = message.mentions.members.first(-1) || message.guild.members.cache.get(args[1])

 
            if (!FirstUser) return message.channel.send(`I couldn't find someone named **${args[0]}**!`)
            if (!SecondUser) return message.channel.send(`I couldn't find someone named **${args[1]}**!`)
            
            
 
            if (FirstUser || SecondUser) {
                const FirstUserSliced = FirstUser.user.username.slice(0, FirstUser.user.username.length / 2)
                const SecondUserSliced = SecondUser.map(user => { return user.user.username.slice(user.user.username.length / 2) })
                const SecondUserName = SecondUser.map(user => { return user.user.username })
 

      let user = message.mentions.users.first() || client.users.cache.get(args[0]);

      let avatar0 = user.displayAvatarURL({format: 'png'})


      
        // love é a porcentágem 
        // loveIndex is é um numero de 0 a 10 baseado na                                   variavel anterior
        const love = Math.random() * 100;
        const loveIndex = Math.floor(love / 10);
        const loveLevel = "💖".repeat(loveIndex) + "💔".repeat(10 - loveIndex);


              const embed1 = new Discord.MessageEmbed()
        .setTitle('Ship!')
        .setColor('#000000')
        .setThumbnail(avatar0)
        .setDescription(`${FirstUser.user.username} \n ${SecondUserName} \n **${FirstUserSliced}${SecondUserSliced}**`)
        .addField(`💟 ${Math.floor(love)}% ${loveLevel}`)
        .setAuthor("Requested by " + message.author.tag, avatar)

                message.channel.send(embed1)
            }
        }
}