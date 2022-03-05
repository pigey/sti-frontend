var character = document.getElementById("character");
var block = document.getElementById("block");
var dead = 0;
var timer = document.getElementById("timer");
var time = 0;
var play = document.getElementById("tryAgain");
block.style.animation = "none";
var fname;
//timer

function getval(){
    var name = document.querySelector('input').value;
    fname = name.replace(/\s/g, '');
}

function myTimer(){
    time = time + 1;
    timer.innerHTML = time + "s";
}
function tryAgain(){
    
    myInterval = setInterval(myTimer,1000);
    block.style.animation = "";
    time = 0
    myInterval
    myTimer();
    play.style.display = "none";
    
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
        dead = 1;
        play.style.display = "";
        // update leaderboard if you made it there
        registerhighscore(fname,time)
       
        clearInterval(myInterval);
    }
},10)


const UPDATE_FIRST = 0;
const UPDATE_INTERVAL = 1000;

setTimeout(highscore,UPDATE_FIRST);

function highscore(){
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "https://filip-backend.herokuapp.com/highscores")
    //xhr.open("GET", "http://localhost:3001/highscores")
    //xhr.open("GET", "/js/scores.json")
    xhr.onload = function(){
        let data = JSON.parse(this.response)
        createTable(data)
        setTimeout(highscore, UPDATE_INTERVAL) 
    }
    xhr.send()
}

function registerhighscore(user, score){
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "https://filip-backend.herokuapp.com/register?user="+ user + "&time="+ score)
    //xhr.open("GET", "http://localhost:3001/register?user=" + user + "&time=" + score)
    //xhr.open("GET", "/js/scores.json")
    xhr.send()
}


function gettopfiveSorted(data){
    var items = Object.entries(data)
    items.sort(function(first, second){
        return second[1] - first[1];
    })
    items = items.slice(0, 5);
    return items;
}

function createTable(data){
    var appElement = document.getElementById("leader")
    appElement.textContent = ""
    console.log(appElement)
    var aTable = document.createElement("table")
    
    appElement.appendChild(aTable)

    var items = gettopfiveSorted(data);
    for([value, key] of items){
        console.log(key + "->" + value)
        aTable.appendChild(createRow(key, value))
    }
    console.log(aTable)
}
function createRow(name, time){
    var aRow = document.createElement("tr")
    aRow.appendChild(createCell(name))
    aRow.appendChild(createCell(time))
    return aRow
}
function createCell(content){
    var aCell = document.createElement("td")
    aCell.innerHTML = content
    return aCell
}