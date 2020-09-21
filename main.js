createTable()
var board = []
var myTableArray = []

function createCube(num, cubesInRow){
    if(num !== 0){
        var cubeElement = "<div class='col-md-" + cubesInRow + "' border rounded mx-2' id='" +num+"' onclick=cubePressed()>"
        cubeElement += "<div class='row'>"
        cubeElement += " <div class='num'>" + num + "</div></div>"
        cubeElement += "</div>"
    }else{
        var cubeElement = "<div class='col-md-" + cubesInRow + "' border rounded mx-2' id='" +num+"' onclick=cubePressed()>"
        cubeElement += "<div class='row'>"
        cubeElement += " <div class='num'></div></div>"
        cubeElement += "</div>"
    }
    

    document.getElementById("cubes").innerHTML += cubeElement
}

// function createBoard(){
    
//     var inputBox = document.getElementById("cubeNum")
//     var num = inputBox.value
//     var a = parseInt(num)
//     var array = shuffle(a**2)
//     var b = a+1
//     var element = "<div class='col-"+b+"'><div class='row' id='cubes'></div></div>"
//     document.getElementById("all-cubes").innerHTML = element
//     inputBox.disabled = true
    
//     for(var i=0; i<array.length; i++){
//         createCube(array[i], a)
//     }
// }

function createBoard(){
    var array = shuffle(3**2)
    var element = "<div class='col-"+4+"'><div class='row' id='cubes'></div></div>"
    document.getElementById("all-cubes").innerHTML = element
    
    
    for(var i=0; i<array.length; i++){
        createCube(array[i], 3)
    }
}

function createTable(){
    var myTable = document.getElementById('all-cubes');
    var count = 3
    var array = shuffle(3**2)
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
 
}

function boardArray(num){
    for(var i=0; i<num; i++) {
        board[i] = new Array(num);
    }
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

// function shuffle(num) {
//     for (var array=[],i=0;i<num;++i) array[i]=i;
//     var tmp, current, top = array.length;
//     if(top) while(--top) {
//       current = Math.floor(Math.random() * (top + 1));
//       tmp = array[current];
//       array[current] = array[top];
//       array[top] = tmp;
//     }
//     return array;
// }

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
}

function generateTable(tableData) {
    var table = document.getElementById('all-cubes');
    tableData.forEach(function(rowData) {
      var row = document.createElement('tr');
  
      rowData.forEach(function(cellData) {
        //var cell = document.createElement('td');
        var td = "<td class='cube' onclick=cubePressed(this)><div>"+cellData+"</div></td>"
        row.innerHTML += td
      });
  
      table.appendChild(row)
    });
  }

function cubePressed(element){
    var finished = false
    getTableValues()
    var value = element.innerText
    for(var i=0; i<myTableArray.length; i++){
        for(var j=0; j<myTableArray[i].length; j++){
            var c = myTableArray[i][j]
            if(myTableArray[i][j] === value){
                if(myTableArray[i][j-1] === ""){
                    var temp = myTableArray[i][j]
                    myTableArray[i][j] = ""
                    myTableArray[i][j-1] = temp
                    finished = true
                }else if(myTableArray[i][j+1] === ""){
                    var temp = myTableArray[i][j]
                    myTableArray[i][j] = ""
                    myTableArray[i][j+1] = temp
                    finished = true
                }else if(i>=1 && myTableArray[i-1][j] === ""){
                    var temp = myTableArray[i][j]
                    myTableArray[i][j] = ""
                    myTableArray[i-1][j] = temp
                    finished = true
                }else if (myTableArray[i+1][j] === ""){
                    var temp = myTableArray[i][j]
                    myTableArray[i][j] = ""
                    myTableArray[i+1][j] = temp
                    finished = true
                }
                break
            }
        }
        if(finished){
            break
        }
    }
    document.getElementById('all-cubes').innerHTML = ""
    generateTable(myTableArray)
    console.log("hi")
}