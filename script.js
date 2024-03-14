class knights{


  board=[];
  adjecencyList=[];

  developBoard(){

    for (let i = 0; i < 8; i++) {
        this.board[i]=new Array(8)
        this.board[i].fill(false,0,8)
        
    }
  }

  knightMoves(currentPosition,destination){


  }

  adjecencyCalculation(currentPosition){

    let firstPosibleMove=[currentPosition[0]+2,currentPosition[1]+1];
    let secondPossiibleMove=[currentPosition[0]+1,currentPosition[1]+2]
    let thirdPossibleMove=[currentPosition[0]+2,currentPosition[1]-1];
    let fourthPossibleMove=[currentPosition[0]+1,currentPosition[1]-2]
    let fifthPossibleMove=[currentPosition[0]-2,currentPosition[1]-1]
    let sixPossibleMove=[currentPosition[0]-2,currentPosition[1]+1]
    let seventhPossibleMove=[currentPosition[0]-1,currentPosition[1]-2]
    let eightPossibleMove=[currentPosition[0]-2,currentPosition[1]-1]

    let Moves=[];

    [firstPosibleMove,secondPossiibleMove,thirdPossibleMove,fourthPossibleMove,fifthPossibleMove,sixPossibleMove,seventhPossibleMove,eightPossibleMove].forEach(move=>{

    
        if(move[0]>-1&&move[0]<9&&move[1]>-1&&move[1]<9){
            Moves.push(move)
        }


    })


    return Moves
  }
  
  createLinksForTheAdjecencyList(currentPosition,maximum=0,){

    if (maximum>3) {
      return
      
    }

    let linkForposition=this.adjecencyCalculation(currentPosition);
this.adjecencyList.push(new adjecency(currentPosition,linkForposition))
maximum++;
linkForposition.forEach(link=>{

  this.createLinksForTheAdjecencyList(link,maximum)

})
  }


}

class adjecency{

    constructor(currentPosition,possiblePoints){

        this.currentPosition=currentPosition;
        this.possiblePoints=possiblePoints

    }
}

let knightPlay=new knights();

knightPlay.developBoard();

console.log(knightPlay.createLinksForTheAdjecencyList([0,0]))
console.log(knightPlay.adjecencyList)