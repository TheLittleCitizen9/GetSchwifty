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

const getTopUsers = function(){
    const users = localStorage.getItem('topUsers')
    if(users !== null){
        return JSON.parse(users)
    }else{
        return []
    }
}

const getUsers = function(){
    const users = localStorage.getItem('users')
    if(users !== null){
        return JSON.parse(users)
    }else{
        return []
    }
}

const saveUsers = function(){
    users.sort((a,b) => a.gameLength-b.gameLength)
    var topUsers = []
    users.forEach(element => {
        if(element.gameLength !== null){
            topUsers.push(element)
        }
    });
    localStorage.setItem('topUsers', JSON.stringify(topUsers.slice(0, 5)))
    localStorage.setItem('users', JSON.stringify(users))
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

const clearLocalStorage = function(){
    localStorage.removeItem('schwifty')
    localStorage.removeItem('name')
    localStorage.removeItem('cubesNum')
}