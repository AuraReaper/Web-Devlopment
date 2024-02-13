import express from "express";

const app = express() ;
const port = 3000 ;

var day = new Date() ;
var date = day.getDay();
if(date >= 0 && date <=4) {
    var type = "weekday" ;
    var advice = "time to work hard" ;
} else {
    var type = "weekend" ;
    var advice = "fucking enjoy it all" ;
}

app.get("/" , (req,res) => {
    res.render("index.ejs" , {
        dayType : type ,
        advice :  advice
    }) ;
}) ;

app.listen(port , () => {
    console.log(`Listening on port ${port}.`)
}) ;