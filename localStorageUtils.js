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

const getName = function(){
    const boardJSON = localStorage.getItem('name')
    if(boardJSON !== null){
        return JSON.parse(boardJSON)
    }else{
        return ""
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

const saveUsers = function(){
    users.sort((a,b) => a.gameLength-b.gameLength)
    localStorage.setItem('users', JSON.stringify(users.slice(0, 5)))
}

const saveName = function(name){
    localStorage.setItem('name', JSON.stringify(name))
}

const saveCubesNum = function(){
    localStorage.setItem('cubesNum', JSON.stringify(cubesNum))
}

const getCubesNum = function(){
    const cubes = localStorage.getItem('cubesNum')
    if(cubes !== null){
        return JSON.parse(cubes)
    }else{
        return 0
    }
}