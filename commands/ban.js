const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    const tag = `<@${message.author.id}>`

    if (
      message.member.permissions.has('ADMINISTRATOR') ||
      message.member.permissions.has('BAN_MEMBERS')
    ) {
      let target = message.mentions.users.first() || client.users.cache.get(args[0]);
      if (target) {
        const targetMember = message.guild.members.cache.get(target.id)
        targetMember.ban()
        message.channel.send(`${tag} 🙅‍♀️ • O usuário foi banido!`)
      } else {
        message.channel.send(`${tag} Você não mencionou nenhum usuário válido!`)
      }
    } else {
      message.channel.send(
        `${tag} você é fraco, lhe falta permissão de ``Gerenciar Mensagens`` para usar esse comando`
      )
    }
  }
