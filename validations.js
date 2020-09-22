function cubePressed(element){
    var finished = false
    getTableValues()
    var value = element.innerText
    for(var i=0; i<myTableArray.length; i++){
        for(var j=0; j<myTableArray[i].length; j++){
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
    saveGame()
    document.getElementById('all-cubes').innerHTML = ""
    generateTable(myTableArray)
    if(checkWinner()){
        document.getElementById("win").innerHTML = "You Won !!!"
        document.getElementById('all-cubes').innerHTML = ""
    }
}

function checkWinner(){
    
    var lastNum = 0
    isWinner = false
    if(myTableArray[myTableArray.length-1][myTableArray.length-1] === ""){
        for(var i=0; i<myTableArray.length; i++){
            for(var j=0; j<myTableArray[i].length; j++){
                lastNum = parseInt(myTableArray[i][j])
                if(j !== myTableArray.length-1){
                    if(lastNum +1 !== parseInt(myTableArray[i][j+1]) && myTableArray[i][j+1] !== ""){
                        return false
                    }
                    else{
                        isWinner = true
                    }
                }
            }
        }
    }
    if(isWinner){
        var user = getUser(getName())
        const diffTime = Math.abs(user.startDate - new Date());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        user.gameLength = diffDays
        saveUsers()
        localStorage.removeItem('schwifty')
        localStorage.removeItem('name')
    }
    return isWinner
}

function getUser(userName){
    for(var i=0; i< users.length; i++){
        if(users[i].name === userName){
            return users[i]
        }
    }
}