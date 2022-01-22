const Discord = require('discord.js');
const client = new Discord.Client();

const replies = [
    "my mom is gay",
    "your mom is gay",
    "why are our moms fucking"
]

client.login(process.env.TOKEN);

client.on('ready', readyDiscord);
client.on('message', gotMessage);

function gotMessage(message){
    if(message.channel.id ==="934549787787821066" && message.content === "choo choo"){
        // message.reply("Train Rainbow Gay");
        const index = Math.floor(Math.random() * replies.length);

        message.channel.send(replies[index]);
    }
}

function readyDiscord(){
    console.log('<3');
}
