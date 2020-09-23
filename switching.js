function isGameSolvable(){
    if(cubesNum % 2 !== 0){
        return isGameSolvableOddBoard()
    }else{
        return isGameSolvableEvenBoard()
    }
}

function isGameSolvableOddBoard(){
    var x = 0
    var count = 0
    var y = 0
     while(x < myTableArray.length && y < myTableArray.length){
        if(myTableArray[x][y] !== ""){
            var num = parseInt(myTableArray[x][y])
            for(var i=x; i<myTableArray.length; i++){
                for(var j=0; j<myTableArray.length; j++){
                    if(x === i){
                        if(j >= y){
                            var a = parseInt(myTableArray[i][j])
                            if(num > a && myTableArray[i][j]!==""){
                                count++
                            }
                        }
                    }else{
                        var a = parseInt(myTableArray[i][j])
                            if(num > a && myTableArray[i][j]!==""){
                                count++
                            }
                            if(myTableArray[i][j] === ""){
                                rowNum = i + 1
                            }
                    }
                }
            }
        }
        y++
        if(y == myTableArray.length && x < myTableArray.length){
            x++
            y = 0
        }
     }

     if(count % 2 === 0){
         console.log("solvable for odd number")
        return true
    }else{
        console.log("unsolvable for odd number")
        return false
    }
}

function isGameSolvableEvenBoard(){
    var x = 0
    var count = 0
    var y = 0
    var rowNum = 0
     while(x < myTableArray.length && y < myTableArray.length){
        if(myTableArray[x][y] !== ""){
            var num = parseInt(myTableArray[x][y])
            for(var i=x; i<myTableArray.length; i++){
                for(var j=0; j<myTableArray.length; j++){
                    if(x == i){
                        if(j >= y){
                            var a = parseInt(myTableArray[i][j])
                            if(num > a && myTableArray[i][j]!==""){
                                count++
                            }
                            if(myTableArray[i][j] === ""){
                                rowNum = i + 1
                            }
                        }
                    }else{
                        var a = parseInt(myTableArray[i][j])
                            if(num > a && myTableArray[i][j]!==""){
                                count++
                            }
                            if(myTableArray[i][j] === ""){
                                rowNum = i + 1
                            }
                    }
                }
            }
        }
        y++
        if(y == myTableArray.length && x < myTableArray.length){
            x++
            y = 0
        }
     }
      count = count + rowNum
     if(count % 2 === 0){
        console.log("solvable for even number")
        return true
    }else{
        console.log("unsolvable for even number")
        return false
    }
}