const Discord = require('discord.js');
const client = new Discord.Client();
const cursFunctions = require("./actions/onMessage/cursFunctions");


require("dotenv").config();

const baseCourseUrl = "https://curs.upb.ro/2021/course/view.php"
const courses = {   
    "OMII" : [8851, 3709],
    "TCD": [8636, 3730],
    "AAHP": [3741],
    "AUT": [3737, 8848],
    "IAC": [3703, 9817],
    "MF": [3680, 10716],
    "MEF": [3697, 8852],
    "PPI": [3717],
    "TMT": [3733, 10698],
    "AMF": [3797],
    "CAC": [3770],
    "MI": [3773],
    "MCE": [3805],
    "MLCN": [3771],
    "MecA": [3851],
    "OG": [3769],
    "Pratica": [3831],
    "PPII": [3825],
    "PIIP": [3850],
    "VM": [3801],
}

client.login(process.env.BOT_TOKEN);

client.on('ready', readyDiscord);
client.on('message', gotMessage);

function gotMessage(message){
    if(message.channel.id ===process.env.CHANNEL_ID && message.content === "!curs"){
        cursFunctions.cursHandler(message, courses);
    }

    if(message.channel.id === process.env.CHANNEL_ID && message.content.includes("!curs-")){
        cursFunctions.cursUrlHandler(message, courses, baseCourseUrl);
    }
}

function readyDiscord(){
    console.log('❤️ u mada');
}
