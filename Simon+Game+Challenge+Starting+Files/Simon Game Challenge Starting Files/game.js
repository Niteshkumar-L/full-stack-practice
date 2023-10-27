//alert("hello");
var gamepattern = new Array();
var userpattern = new Array();
var level =0;
var start = false;
$(document).keydown(()=>{
    if(!start){
        $("#level-title").text(`Level ${level}`);

         nextsequence();
         //level=1;
         start=true;
    }
   
});

function nextsequence(){
    userpattern=[];
    level++;
    $("#level-title").text(`Level ${level}`);

    var ranNum=Math.floor(Math.random()*4);
    const btncolor= new Array("red","blue","green","yellow");
    var ranChosclr=btncolor[ranNum];
    gamepattern.push(ranChosclr);
    console.log(gamepattern);
        //animate the button
        $("#"+ranChosclr).fadeOut(100).fadeIn(100);
        playsound(ranChosclr);
    // $(document).getElementById("level-title").innerHTML=`Level ${level}`;
    
    
}
// /1. Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
// $(".btn").click(function() {
//   //2. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
//   var userChosenColour = $(this).attr("id");
//   //4. Add the contents of the variable userChosenColour created in step 2 to the end of this new userClickedPattern
//   userClickedPattern.push(userChosenColour);
//   //console.log(userClickedPattern);
// });

//to detect user btn clicked pattern
$(".btn").click(function(event){
    var userchosecolor = event.target.id;
    userpattern.push(userchosecolor);
    checkans(userpattern.length-1);
        console.log(userpattern);
        playsound(userchosecolor);
        animepress(userchosecolor);
});

function checkans(curntans){
    if(userpattern[curntans]===gamepattern[curntans]){
        console.log("succes");
        if(userpattern.length===gamepattern.length){
            setTimeout(()=>{
                nextsequence();
            },1000);
        }
    }
    else
    {
    //level=0;
    $("body").addClass('game-over');
    setTimeout(()=>{
        $("body").removeClass('game-over');
    },100);
    playsound("wrong");
    console.log("wrong");
    $("#level-title").text("gameover,press any key to restart");
    startover();
    }
 }
   

function startover(){
    level=0;
    gamepattern=[];
    userpattern=[];
    start=false;
}

//play sound for the user and next pattern
function playsound(name){
var audio= new Audio("sounds/"+ name +".mp3");
audio.play();
}

//animemate the userpressed btn
function animepress(currentclr){
    $("#"+currentclr).addClass('pressed');
   // setTimeout(($("#"+currentclr).removeClass('pressed')),1000);
    setTimeout(()=>{
        $("#"+currentclr).removeClass('pressed');
    },500);

    

}