class Statistics {
    constructor() {
        this.gamesWithSameDoorWon = [];
        this.gamesWithSameDoorLost = [];
        this.gamesWithDoorChangeWon = [];
        this.gamesWithDoorChangeLost = [];
    }
}
class Game {
    constructor() {
        this.doors;
        this.doorPicked;
        this.openedGoatDoor;
        this.finalPick;
        this.won;
    }
    //Add any method needed to nake it play 
   
     // play() {
        // we want to make door objects based off the Door class 
        // 3 doors 
        // if one is a car  other two must be goats 
        
        
        //when simulating the game, we need another if/else for if the game is won/lost with changes 
        //pushes these values to the empty arrays:
            //gamesWithSameDoorWon = [];
            //gamesWithSameDoorLost = [];
            //gamesWithDoorChangeWon = [];
            //gamesWithDoorChangeLost = [];

    

    //}

}
class Door {
    constructor(number, isCar) {
        this.number = number;
        this.isCar = isCar;
        this.opened = false;
    }
}

function play(){    
    const doorlist=[]
    const prizeDoorindex= Math.floor(Math.random() * 3);
    const doorOpenedindex=Math.floor(Math.random() * 3);
    for (let i = 0; i < 3; i++) { 
       const thisDoor= new Door(i,i === prizeDoorindex, i === doorOpenedindex);
       doorlist.push(thisDoor)
      }

      //for (let i = 0; i < 3; i++) { 
//        const thisDoor= new Door (i,1,)
       //}

console.log(doorlist)
}


function getrandom(max, min){
    returnMath.floor(Math.random()*(max-min+1))+min
}

play()
