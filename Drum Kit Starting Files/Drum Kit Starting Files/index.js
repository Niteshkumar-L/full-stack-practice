 //alert("hello");

 var n=document.querySelectorAll(".drum").length;
 for(var i=0;i<n;i++ ){

document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var innerhtmlbtn =this.innerHTML;
    console.log(this);
    document.getElementById(this.style.color='blue');
    drumkey(innerhtmlbtn);
    btnani(innerhtmlbtn);
});

    



}
document.addEventListener("keydown",function(event){
    drumkey(event.key);
    btnani(event.key);
});
function drumkey(key){
    switch(key){
        case "a":
            var audio= new Audio('sounds/crash.mp3');
            audio.play();
            //alert("1");
            console.log("1");
            break;
        case "w":
            var audio= new Audio('sounds/kick-bass.mp3');
            audio.play();
            //alert("2");
            console.log("2");
            break;
        case "s":
            var audio= new Audio('sounds/snare.mp3');
            audio.play();
            //alert("2");
            console.log("3");
            break;
        case "d":
            var audio= new Audio('sounds/tom-1.mp3');
            audio.play();
            //alert("2");
            console.log("4");
            break;
        case "j":
            var audio= new Audio('sounds/tom-2.mp3');
            audio.play();
            //alert("2");
            console.log("6");
            break;
        case "k":
            var audio= new Audio('sounds/tom-3.mp3');
            audio.play();
            //alert("2");
            console.log("7");
            break;  
        case "l":
            var audio= new Audio('sounds/tom-4.mp3');
            audio.play();
            //alert("2");
            console.log("8");
            break;
        default:
            var audio= new Audio('sounds/snare.mp3');
            audio.play();
            //alert("3");
            console.log("9");
            
        }

}

function btnani(current){
   var activek= document.querySelector("."+current);
   activek.classList.add("pressed");
   setTimeout(function(){
   activek.classList.remove("pressed");
    
   }, 100);



}