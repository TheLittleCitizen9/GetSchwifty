class User{
    constructor(name, size){
        this.name = name
        this.startDate = new Date();
        this.gameLength = null
        this.boardSize = size
    }
}

const saveGame = function(){
    localStorage.setItem('schwifty', JSON.stringify(myTableArray))
}

const getBoardGame = function(){
  const boardJSON = localStorage.getItem('schwifty')
  if(boardJSON !== null){
      return JSON.parse(boardJSON)
  }else{
      return []
  }
}

const getUsers = function(){
    const boardJSON = localStorage.getItem('users')
    if(boardJSON !== null){
        return JSON.parse(boardJSON)
    }else{
        return []
    }
  }

window.onload = () => {
    if(myTableArray.length > 0){
        generateTable(myTableArray)
    }
}

var users = getUsers()
var myTableArray = getBoardGame()
var cubesNum = 0

function main(){
    createTable()
    while(!isGameSolvable()){
        document.getElementById('all-cubes').innerHTML = ""
        createTable()
    }
    enterUser()
}

function createTable(){
    var inputBox = document.getElementById("cubeNum")
    cubesNum = parseInt(inputBox.value)

    var myTable = document.getElementById('all-cubes');
    var count = cubesNum
    var array = shuffle(cubesNum**2)
    var num = 0
    for(var i=0;i<count;i++){
        var tr = document.createElement('tr');
        
        for(var j=0;j<count;j++){
            if(array[num] !== 0){
                var td = "<td class='cube' onclick=cubePressed(this)><div>"+array[num]+"</div></td>"
            }else{
                var td = "<td class='cube' value=0 onclick=cubePressed(this)></td>"
            }
            
            tr.innerHTML += td
            num++
        }
    
    myTable.appendChild(tr);
    }
    getTableValues()
}

function shuffle(num) {
    for (var array=[],i=0;i<num;++i) array[i]=i;
    var tmp, current, top = array.length;
    if(top) while(--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = array[current];
      array[current] = array[top];
      array[top] = tmp;
    }
    return array;
}

function getTableValues(){
    myTableArray = []
    var table = document.getElementById("all-cubes")
    var trs = table.getElementsByTagName("tr")
    for(var i=0; i<trs.length; i++){
        var arrayOfThisRow = [];
        var tableData = trs[i].getElementsByTagName('td');
        if (tableData.length > 0) {
            for(var j=0; j<tableData.length; j++){
                arrayOfThisRow.push(tableData[j].innerText)
            }
            myTableArray.push(arrayOfThisRow);
        }
    }
    saveGame()
}

function generateTable(tableData) {
    var table = document.getElementById('all-cubes');
    tableData.forEach(function(rowData) {
      var row = document.createElement('tr');
  
      rowData.forEach(function(cellData) {
        var td = "<td class='cube' onclick=cubePressed(this)><div>"+cellData+"</div></td>"
        row.innerHTML += td
      });
  
      table.appendChild(row)
    });
  }

const saveUsers = function(){
    localStorage.setItem('users', JSON.stringify(users))
}

function enterUser(){
    var inputBox = document.getElementById("userName")
    var name = inputBox.value
    if(users.length === 0 || users.length < 5){
        var newUser = new User(name, cubesNum)
        users.push(newUser)
    }else{
        var newUser = new User(name, cubesNum)
        users.splice(0,1)
        users.push(newUser)
    }
    saveUsers()
}