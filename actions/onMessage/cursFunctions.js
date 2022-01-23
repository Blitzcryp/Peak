function cursHandler(message, courses){
    // message.reply("Train Rainbow Gay");
    let msg = "";
    let index = 1;
    Object.keys(courses).map((course) =>{
        msg += index + ". " + course + "\n"; 
        index += 1;
    })

    message.channel.send(msg);
}

function cursUrlHandler(message, courses, baseCourseUrl){
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

module.exports.cursUrlHandler = cursUrlHandler;
module.exports.cursHandler = cursHandler;