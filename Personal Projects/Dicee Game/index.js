var randomNumber1 = (Math.floor(Math.random() * 6) + 1) ;
var randomNumber2 = (Math.floor(Math.random() * 6) + 1) ;

var diceImage1 = "dice"+randomNumber1+".png" ;
var diceImage2 = "dice"+randomNumber2+".png" ;

var randomImageSource1 = "images/"+diceImage1 ;
var randomImageSource2 = "images/"+diceImage2 ;

document.querySelector(".img1").setAttribute("src" , randomImageSource1) ;
document.querySelector(".img2").setAttribute("src" , randomImageSource2) ;

if(randomNumber1 === randomNumber2){
    document.querySelector("h1").textContent = "🇳🇵 Draw! 🇳🇵" ;
} else if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!" ;
} else {
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩" ; 
}
