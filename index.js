// document.getElementsByClassName("dice").


var randomNumber1 = Math.floor(Math.random()* 6) + 1;
console.log(randomNumber1);

var randImages = "dice" + randomNumber1 + ".png";
var randImages1="images/" + randImages;



document.querySelectorAll("img")[0].setAttribute("src",randImages1);


var randomNumber2 = Math.floor(Math.random()* 6) + 1;
console.log(randomNumber2);

var randImages1 = "dice" + randomNumber2 + ".png";
var randImages2="images/" + randImages1;

document.querySelectorAll("img")[1].setAttribute("src",randImages2);


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins";
}else{
    document.querySelector("h1").innerHTML = "Player 2 wins";
}