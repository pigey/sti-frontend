
age()

function age(){
    console.log("Running age")
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "/js/data.json")
    xhr.onload = function(){
        var data = JSON.parse(this.response)
        createTable(data)
    }
    xhr.send()
}

function createTable(data){
    var appElement = document.getElementById("app")
    console.log(appElement)
    var aTable = document.createElement("table")
    appElement.appendChild(aTable)
    aTable.appendChild(createRow(data[0].name, data[0].points))
    aTable.appendChild(createRow(data[1].name, data[1].points))
    aTable.appendChild(createRow(data[2].name, data[2].points))
    aTable.appendChild(createRow(data[3].name, data[3].points))
    console.log(aTable)
}
function createRow(name, points){
    var aRow = document.createElement("tr")
    aRow.appendChild(createCell(name))
    aRow.appendChild(createCell(points))
    return aRow
}
function createCell(content){
    var aCell = document.createElement("td")
    aCell.innerHTML = content
    return aCell
}






