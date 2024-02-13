//The password is Yash
import express  from "express";
import { dirname } from "path" ;
import { fileURLToPath } from "url";
import bodyParser from "body-parser"; // used to get the post 

const app = express() ;
const port = 3000 ;
const __dirname = dirname(fileURLToPath(import.meta.url)) ;

app.use(bodyParser.urlencoded({extended : true})) ;

app.get("/" , (req ,res) =>{
    res.sendFile(__dirname + "/public/index.html") ;
} ) ;

var pass = "" ;
function passCheck(req,res,next){
    console.log(req.body) ;
    pass = req.body["password"] ;
    next() ;
}

app.use(passCheck) ;

app.post("/check" ,(req,res) => {
    if(pass == "Yash"){
        res.sendFile(__dirname + "/public/secret.html") ;
    } else {
        res.sendFile(__dirname + "/public/index.html") ;
    }
}) ;

app.listen(port , () => {
    console.log(`Listening on port ${port}.`) ;
});
