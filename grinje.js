   // Randomly moving divs in JQuery
   $(document).ready(function(){
    animateDiv('.a');
    animateDiv('.b');
    animateDiv('.c');
    animateDiv('.d');
    animateDiv('.e');
    animateDiv('.f');
    animateDiv('.g');
    animateDiv('.gift');
    animateDiv('.clock');
    });

function makeNewPosition(){

    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh,nw];      
}

function animateDiv(myclass){
    var newq = makeNewPosition();
    $(myclass).animate({ top: newq[0], left: newq[1] }, 1000,   function(){
      animateDiv(myclass);        
    });
    
};

// End of JQuery




// Game Logic

var hitsound = new Audio("sounds/hit2.wav");
var bombsound = new Audio("sounds/bomb.wav");
var giftsound = new Audio("sounds/gift.wav");
var losesound = new Audio("sounds/lose.wav");
var winsound = new Audio("sounds/win.wav");
var lowtime = new Audio("sounds/lowtime.wav");
var clocksound = new Audio("sounds/clock.wav");
var lose1sound = new Audio("sounds/lose1.wav");
var win1sound = new Audio("sounds/win1.wav");

var score = 0;
var playing = 0;
var x = 60;  // Time 

var gameTime;
var spawnGift1;
var spawnClock1;
var hitt1;
var hitt2;
var hitt3;
var hitt4;
var hitt5;
var hitt6;
var bomb1;
var gift1;
var clock1;


// Start
function play() {

    // Clearing all timers and intervals
    clearInterval(gameTime); 
    clearTimeout(spawnGift1);
    clearTimeout(spawnClock1);
    clearTimeout(hitt1);
    clearTimeout(hitt2);
    clearTimeout(hitt3);
    clearTimeout(hitt4);
    clearTimeout(hitt5);
    clearTimeout(hitt6);
    clearTimeout(bomb1);
    clearTimeout(gift1);
    clearTimeout(clock1);

    x = 60;
    playing = 1;

    spawnGift1 =  setTimeout(spawnGift, 18000);  
    spawnClock1 = setTimeout(spawnClock, 25000);  

    gameTime = setInterval(timer, 1000);

    document.getElementById("footer").style.visibility = "hidden";
    document.getElementById("start").style.visibility = "hidden";
    document.getElementById("startScore").style.visibility = "hidden";
    document.getElementById("bomb").style.visibility = "visible";
    document.getElementById("score").style.visibility = "visible";
    document.getElementById("timer").style.visibility = "visible";
    
    for (var i = 1; i < 7; i++) {
        var id = "virus" + i;
        document.getElementById(id).style.visibility = "visible";
    }

    document.getElementById("img1").style.visibility = "hidden";
    document.getElementById("img2").style.visibility = "hidden";
    document.getElementById("img3").style.visibility = "hidden";
    document.getElementById("img4").style.visibility = "hidden";
    document.getElementById("img5").style.visibility = "hidden";
    document.getElementById("img6").style.visibility = "hidden";
}

function timer() {
    x = x - 1;
    document.getElementById("timer").innerHTML = "Vreme: " + x;

    if (x == 3) {
        lowtime.play();
    }

    if (x == 0) {
        end()
    }

}




function hit1() {
    hitt1 = setTimeout(spawn1, 1500);
    hit();
    document.getElementById("virus1").style.visibility = "hidden";
    }
function spawn1() {
    if (playing == 1){
    document.getElementById("virus1").style.visibility = "visible";
    }
}

function hit2() {
    hitt2 = setTimeout(spawn2, 1500);
    hit();
    document.getElementById("virus2").style.visibility = "hidden";
    }
function spawn2() {
    if (playing == 1){
    document.getElementById("virus2").style.visibility = "visible";
    }
}

function hit3() {
    hitt3 = setTimeout(spawn3, 1500);
    hit();
    document.getElementById("virus3").style.visibility = "hidden";
    }
function spawn3() {
    if (playing == 1){
    document.getElementById("virus3").style.visibility = "visible";
    }
}

function hit4() {
    hitt4 = setTimeout(spawn4, 1500);
    hit();
    document.getElementById("virus4").style.visibility = "hidden";
    }
function spawn4() {
    if (playing == 1){
    document.getElementById("virus4").style.visibility = "visible";
    }
}

function hit5() {
    hitt5 = setTimeout(spawn5, 1500);
    hit();
    document.getElementById("virus5").style.visibility = "hidden";
    }
function spawn5() {
    if (playing == 1){
    document.getElementById("virus5").style.visibility = "visible";
    }
}

function hit6() {
    hitt6 = setTimeout(spawn6, 1500);
    hit();
    document.getElementById("virus6").style.visibility = "hidden";
    }
function spawn6() {
    if (playing == 1){
    document.getElementById("virus6").style.visibility = "visible";
    }
}



// Adding Score & Sound
function hit() {
    hitsound.play();
    score += 1;
    document.getElementById("score").innerHTML = "Rezultat: " + score;
}


// Bomb
function bomb() {
    bombsound.play();
    score = 0;
    document.getElementById("score").innerHTML = "Rezultat: " + score;
    document.getElementById("bomb").style.visibility = "hidden";
    bomb1 = setTimeout(spawnBomb, 5000);

}
function spawnBomb() {
    if (playing == 1) {
    document.getElementById("bomb").style.visibility = "visible";
    }
}


// Gift 
function gift() {
        giftsound.play();
        score += 50;
        document.getElementById("gift").style.visibility = "hidden";
        document.getElementById("score").innerHTML = "Rezultat: " + score;
        gift1 = setTimeout(spawnGift, 20000);
}
function spawnGift() {
    if (playing == 1) {
        document.getElementById("gift").style.visibility = "visible";
        }
}

// Clock 
function clock() {
    clocksound.play();
    x += 15;
    document.getElementById("clock").style.visibility = "hidden";
    document.getElementById("timer").innerHTML = "Rezultat: " + x;
    clock1 = setTimeout(spawnClock, 30000);
}
function spawnClock() {
if (playing == 1) {
    document.getElementById("clock").style.visibility = "visible";
    }
}



// End
function end() {

    alert("Vreme je isteklo");

    winsound.play();

    playing = 0;

    for (var i = 1; i < 7; i++) {
        var id = "virus" + i;
        document.getElementById(id).style.visibility = "hidden";
    }
    document.getElementById("bomb").style.visibility = "hidden";
    document.getElementById("gift").style.visibility = "hidden";
    document.getElementById("clock").style.visibility = "hidden";
    document.getElementById("score").style.visibility = "hidden";
    document.getElementById("timer").style.visibility = "hidden";
    document.getElementById("start").style.visibility = "visible";
    document.getElementById("startScore").style.visibility = "visible";
    document.getElementById("startScore").innerHTML = "Rezultat: " + score;
    score = 0;
    document.getElementById("score").innerHTML = "Rezultat: " + score;
    
}