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

    
        if(move[0]>-1&&move[0]<8&&move[1]>-1&&move[1]<8){
            Moves.push(move)
        }


    })


    return Moves
  }
  
  createLinksForTheAdjecencyList(currentPosition,maximum=0,OldNode=new adjecency()){

    if (maximum>3) {
      return
      
    }

    let linkForposition=this.adjecencyCalculation(currentPosition);
    
    let Node=new adjecency(currentPosition,linkForposition)
this.adjecencyList.push(Node)
maximum++;
linkForposition.forEach(link=>{

  this.createLinksForTheAdjecencyList(link,maximum,Node)
 

})

this.checkArrayForSimilarNodes(linkForposition,OldNode);
  }

  checkArrayForSimilarNodes(array,Node){

    for (let i = 0; i < array.length; i++) {
      if(JSON.stringify(array[i])===JSON.stringify(Node.currentPosition)){

        array[i]=Node
      }
      
      
    }


  }


}

class adjecency{

    constructor(currentPosition=null,possiblePoints=null){

        this.currentPosition=currentPosition;
        this.possiblePoints=possiblePoints

    }
}

let knightPlay=new knights();

knightPlay.developBoard();

console.log(knightPlay.createLinksForTheAdjecencyList([0,0]))
console.log(knightPlay.adjecencyList)
console.log(knightPlay.board)