let rover = {
  name: "Rover 1",
  direction: "N",
  x: 0,
  y: 0,
  travelLog:[ {x: 0, y: 0} ],
}
let compass

let grid = [
[ '','','','','','','O','','',''],
[ '','','','','','','','','',''],
[ '','','','','','','','','',''],
[ '','','O','','','','','','',''],
[ '','','','','','','','','',''],
[ '','','','','','','','','',''],
[ '','','','','','','O','','',''],
[ '','O','','','','','','','',''],
[ '','','','','','','','','',''],
[ '','','','','','','','','','']]



function turnLeft(rover){
  if (rover.direction === "N"){
    rover.direction = "W"
    compass = "West"
  }else if(rover.direction === "S"){
    rover.direction = "E"
    compass = "East"
  } else if(rover.direction === "E"){
    rover.direction = "N"
    compass = "North"
  } else if(rover.direction === "W"){                
    rover.direction = "S"
    compass = "South"
  }
  console.log(`The Rover turned left and is now facing ${compass}.`);
}

function turnRight(rover){
  if (rover.direction === "N"){
    rover.direction = "E"
    compass = "East"
  }else if(rover.direction === "S"){
    rover.direction = "W"
    compass = "West"
  } else if(rover.direction === "E"){
    rover.direction = "S"
    compass = "South"
  } else if(rover.direction === "W"){
    rover.direction = "N"
    compass = "North"
  } 
  console.log(`The Rover turned right and is now facing ${compass}.`);
}

function moveForward(rover){
  if(rover.x >= 0 && rover.x < 10 && rover.y >= 0 && rover.y < 10){
    if(rover.direction === "N" ){
      if(grid[rover.y-1][rover.x] === "O"){
        console.log("There is an obstacle blocking your rover")
        return;
      } else{
        rover.y--
        }
    }else if( rover.direction === "W" ){
      if(grid[rover.y][rover.x-1] === "O"){
        console.log("There is an obstacle blocking your rover")
        return;
      } else{
        rover.x--
        }
    }else if( rover.direction === "S"){
        if(grid[rover.y+1][rover.x] === "O"){
          console.log("There is an obstacle blocking your rover")
          return;
        } else{
          rover.y++
          }
      }else if( rover.direction === "E"){
        if(grid[rover.y][rover.x+1] === "O"){
          console.log("There is an obstacle blocking your rover")
          return;
        } else{
          rover.x++
          }
      } 
    
    let newPosition = {x: rover.x, y: rover.y}
    rover.travelLog.push(newPosition)  
    console.log(`The Rover moved forward and the position is ${rover.x}, ${rover.y}. `)
  }else{
      console.log("You cannot move off map.") 
    }
}

function moveBackward(rover){
  if(rover.x >= 0 && rover.x <= 10 && rover.y >= 0 && rover.y <= 10){
    if(rover.direction === "N" ){
      if(grid[rover.y+1][rover.x] === "O"){
          console.log("There is an obstacle blocking your rover")
          return;
        } else{
          rover.y++
          }
    } else if( rover.direction === "W" ){
      if(grid[rover.y][rover.x+1] === "O"){
          console.log("There is an obstacle blocking your rover")
          return;
        } else{
          rover.x++
          }
    } else if( rover.direction === "S"){
      if(grid[rover.y-1][rover.x] === "O"){
          console.log("There is an obstacle blocking your rover")
          return;
        } else{
          rover.y--
          }
    } else if( rover.direction === "E"){
      if(grid[rover.y][rover.x-1] === "O"){
          console.log("There is an obstacle blocking your rover")
          return;
        } else{
          rover.x--
          }
    }
  let newPosition = {x: rover.x, y: rover.y}
  rover.travelLog.push(newPosition)  
  console.log(`The Rover moved forward and the position is ${rover.x}, ${rover.y}. `)
  }else{
    console.log(" You cannot move off map.") 
  }
}

function giveCommands(orders){ 
    for(let i = 0; i < orders.length; i++){
      let order = orders[i]
      switch(order){
        case "l" :
          turnLeft(rover)
          break;
        case "r" :
          turnRight(rover)
          break;
        case "f":
          moveForward(rover)
          break;
        case "b":
          moveBackward(rover) 
          break;
        default: 
          console.log(`Invalid Command: ${order}`)
          i = orders.length 
          break; 
      }     
    } 
  } 

function showPath(){
  for(let i = 0; i < rover.travelLog.length; i++){
    console.log(` Rover's Path ${[i]} ==>  ${rover.travelLog[i].x}, ${rover.travelLog[i].y}`)
  }
}  



   
    