const Discord = require('discord.js');
const client = new Discord.Client();

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
        // message.reply("Train Rainbow Gay");
        let msg = "";
        let index = 1;
        Object.keys(courses).map((course) =>{
            msg += index + ". " + course + "\n"; 
            index += 1;

            console.log(course);
        })

        message.channel.send(msg);
    }

    if(message.channel.id === process.env.CHANNEL_ID && message.content.includes("!curs-")){
        msg = message.content.slice(6)

        console.log(courses["ABC"]);

        if(courses[msg] === undefined){
            message.reply("I could not find this course. Try running '!curs' for a list of courses.");
        } 

        if(courses[msg]){
            let index = 1;
            let coursesLinks = "";
            
            for (const id of courses[msg]){
                coursesLinks += index + ". " + baseCourseUrl + "?id=" + id + "\n";
                index++;
            }

            message.reply("Check out: \n" + coursesLinks);
        }

    }
}

function readyDiscord(){
    console.log('❤️ u mada');
}
