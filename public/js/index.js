var character = document.getElementById("character");
var block = document.getElementById("block");
var dead = 0;
var timer = document.getElementById("timer");
var time = 0;
var play = document.getElementById("tryAgain");
block.style.animation = "none";
//timer
 

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
        
       
        clearInterval(myInterval);
    }
},10)










    console.log("Running age")
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "/js/scores.json")
    xhr.onload = function(){
        var data = JSON.parse(this.response)
        createTable(data)
    }
    xhr.send()


function createTable(data){
    var appElement = document.getElementById("leader")
    console.log(appElement)
    var aTable = document.createElement("table")
    appElement.appendChild(aTable)
    aTable.appendChild(createRow(data[0].name, data[0].time))
    aTable.appendChild(createRow(data[1].name, data[1].time))
    aTable.appendChild(createRow(data[2].name, data[2].time))
    aTable.appendChild(createRow(data[3].name, data[3].time))
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