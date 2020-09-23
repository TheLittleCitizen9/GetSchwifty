function enterUser(){
    var nameInputBox = document.getElementById("userName")
    var rankInputBox = document.getElementById("rank")
    var rank = rankInputBox.value
    var name = nameInputBox.value
    saveName(name)
    var newUser = new User(name, cubesNum, rank)
    users.push(newUser)
    saveUsers()
}

function automaticWin(){
    var array = shuffle(cubesNum**2)
    array.sort((a, b) => a-b)

    var index = 0
    for(var i=0; i<myTableArray.length; i++){
        for(var j=0; j<myTableArray.length; j++){
            if(array[index] !== 0){
                myTableArray[i][j] = array[index]
            }else{
                myTableArray[i][j] = array[index+1]
                index++
            }
            index++
        }
    }
    myTableArray[myTableArray.length-1][myTableArray.length-1] = ""

    generateTable(myTableArray)
    saveGame()
    if(checkWinner()){
        document.getElementById("win").innerHTML = "You Won !!!"
    }
}

function restartGame(){
    clearLocalStorage()
    window.location.reload()
}