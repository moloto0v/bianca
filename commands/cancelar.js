module.exports.run = async (client, message, args, bot, sendMessage) => {

  var array1 = ["ser impaciente demais.", "procrastinar demais.", "se considerar incancelável.", "ser uma pessoa horrível.", "ser uma grande gostosa.", "pedir muito biscoito.", "não ser ninguém.", "ser uma delícia.", "ser BV.", "ser preguiçoso."];

var rand = Math.floor(Math.random() * array1.length);

let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('Você não mencionou nenhum usuário válido!');
}

message.channel.send(`${user}  foi cancelado(a) por ${array1[rand]}`);
}