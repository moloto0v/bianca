const discord = require('discord.js')
const axios = require('axios')

module.exports.run = async(client,message,args)=>{

let avatar = message.author.displayAvatarURL({format: 'png'});

  axios.get('https://api.computerfreaker.cf/v1/hentai', {headers: {'User-Agent': 'bot'}})
  .then((res) => {
    const messageEmbed = new discord.MessageEmbed()
    .setColor('#9575CD')
    .setTitle('Hentai!')
    .setURL(res.data.url)
    .setImage(res.data.url)
    .setAuthor("Requested by " + message.author.tag, avatar)

if (!message.channel.nsfw) {
return message.reply('Este canal não é NSFW!');
}

  message.channel.send(messageEmbed)
  })
  .catch(err => console.log(err))
}