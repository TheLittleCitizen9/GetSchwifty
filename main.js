var myTableArray = []
var cubesNum = 0


function main(){
    createTable()
    while(!isGameSolvable()){
        document.getElementById('all-cubes').innerHTML = ""
        createTable()
    }
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
    if(checkWinner()){
        document.getElementById("win").innerHTML = "You Won !!!"
        document.getElementById('all-cubes').innerHTML = ""
    }
}

function checkWinner(){
    var lastNum = 0
    for(var i=0; i<myTableArray.length; i++){
        for(var j=0; j<myTableArray[i].length; j++){
            lastNum = parseInt(myTableArray[i][j])
            if(j != myTableArray.length-1){
                if(lastNum +1 !== parseInt(myTableArray[i][j+1]) && myTableArray[i][j+1] !== ""){
                    return false
                }
            }
            
        }
    }
    return true
}