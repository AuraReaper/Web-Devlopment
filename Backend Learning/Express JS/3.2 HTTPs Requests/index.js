import express from "express";
const app = express() ;

const port = 3000 ;

app.get("/" , (req,res) => {
    res.send("<h1>Good</h1>") ;
})

app.get("/contact" , (req,res) => {
    res.send("Call me at 9304444188") ;
})

app.get("/about" , (req,res) => {
    res.send("You are about to fuck") ;
})

app.listen(port , () => {
    console.log(`Server running on port ${port}.`) ;
})