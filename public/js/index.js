var character = document.getElementById("character");
var block = document.getElementById("block");
var dead = 0;
var timer = document.getElementById("timer");
var time = 0;

//timer
const myInterval = setInterval(myTimer,1000);

function myTimer(){
    time = time + 1;
    timer.innerHTML = time + "s";
}
//Character jump animation
function jump(){
    if (character.classList !="animate") {
        character.classList.add("animate")
    }
    setTimeout(function(){
        character.classList.remove("animate")
    },500)
}
//check if dead
var checkdead = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"))
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"))
    
    if (blockLeft< 51 && blockLeft > 0 && characterTop >= 215) {
        block.style.animation = "none"; 
        alert("dead");
        dead = 1;
        clearInterval(myInterval);
    }
},10)