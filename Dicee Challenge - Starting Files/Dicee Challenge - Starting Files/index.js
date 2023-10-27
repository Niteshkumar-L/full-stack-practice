//doucument.getElementById("im")

var randomNumber1 = Math.floor(Math.random()*6)+1;//1-6 random number
//alert("hello");
var randomDiceImage = "images/dice"+ randomNumber1+".png";

var image1 = document.querySelectorAll("img")[0].setAttribute("src",randomDiceImage);

var ran2 = Math.floor(Math.random()*6)+1;
var ranImg2 = "images/dice"+ran2+".png";
 var image2 = document.querySelectorAll("img")[1].setAttribute("src",ranImg2);

 if(randomNumber1 > ran2){
    document.querySelector("h1").innerHTML="Player1 wins";
 }else if(ran2 > randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins!";
 }
 else{
    document.querySelector("h1").innerHTML="Draw";
 }