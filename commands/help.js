const Discord = require("discord.js")

exports.run = async (client, message, args) => {


let avatarbot = "https://cdn.discordapp.com/avatars/786665760273465425/153cb3d1933aeeb945e2a3b3b217fc36.png?size=1024;"
let avatar = message.author.displayAvatarURL({format: 'png'});



const embed = new Discord.MessageEmbed()
        .setTitle('Help! Me Ajuda!')
        .setColor('#000000')
        .setDescription("Olá sou a Bianca BOT, uma bot exclusiva do servidor Gamer Zone! Quer uma lista dos meus comandos? aqui está: \n \n 🔧 Utilitários:\n\n``b!avatar``\n``b!ping``\n``b!uptime``\n \n🔧 Utilitários(Admins): \n \n``b!clear``\n``b!ban``\n``b!kick``\n\n  ⚡ Diversão:\n\n``b!falae``\n``b!say``\n``b!cancelar``\n``b!amor``\n``b!baiano``\n ``b!coinflip``\n ``b!emoji``\n ``b!ship`` \n \n 📌 Ações:\n \n``b!kiss``\n``b!slap``\n``b!slap``\n``b!tiro``\n ``b!kill``\n ``b!bite``\n ``b!hug``\n ``b!highfive`` \n \n 🔞 NSFW: \n \n ``b!hentai`` \n \n Tem uma sugestão de comando? Envie para meu criador Molotov!")
        .setThumbnail(avatarbot)
        .setAuthor("Requested by " + message.author.tag, avatar)



  await message.channel.send(embed)
}