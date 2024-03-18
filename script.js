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
    this.developBoard()
this.createLinksForTheAdjecencyList(currentPosition)
this.breadthFirstSearch(this.adjecencyList[0],destination)
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
  
  createLinksForTheAdjecencyList(currentPosition,maximum=1,OldNode=new adjecency(),){

    if (maximum>8) {
      this.convertAllToNodes();
      return
      
    }

    let linkForposition=this.adjecencyCalculation(currentPosition);
    
    let Node=new adjecency(currentPosition,linkForposition)
this.adjecencyList.push(Node)
maximum++;
linkForposition.forEach(link=>{

  this.createLinksForTheAdjecencyList(link,maximum,Node)
 

})


  }

  checkArrayForSimilarNodes(array,Node){

    for (let i = 0; i < array.length; i++) {
      if(JSON.stringify(array[i])===JSON.stringify(Node.currentPosition)){

        array[i]=Node
      }
      
      
    }


  }


  convertAllToNodes(){

    for (let index = 0; index < this.adjecencyList.length; index++) {



for (let j = 0; j < this.adjecencyList.length; j++) {
 for (let x = 0; x < this.adjecencyList[j].possiblePoints.length; x++) {
  if((Array.isArray(this.adjecencyList[j].possiblePoints[x]))){
   
  if((this.adjecencyList[index].currentPosition.toString())==(this.adjecencyList[j].possiblePoints[x].toString())){

   this.adjecencyList[j].possiblePoints[x]=this.adjecencyList[index]
 
  }
 }
 }
  
}
      
    }

  }

  queue= new Queue();


readTheNode(value){

  while(!(value.predecessor===null)){

    console.log(value.currentPosition)

    value=value.predecessor;
  }



}
  breadthFirstSearch(value,destination){
    
this.queue.enqueue(value);


let newValue=new PredecessorChain(value,this.chain);
while (!(this.queue.isEmpty())) {
  value=this.queue.dequeue()

if ((value===undefined)) {

  return 
}

if(value.currentPosition.toString()===destination.toString()){

this.readTheNode(value)


  return
}

if (value.visted==true) {

}
  if (value.visted===false) {

    // console.log(value.currentPosition+"=>")

    value.visted=true;
   


   
    for (let i = 0; i < value.possiblePoints.length; i++) {
    
      if (!(Array.isArray(value.possiblePoints[i]))) {
        if (value.possiblePoints[i].visted===false) {
        
          this.queue.enqueue(value.possiblePoints[i])
          value.possiblePoints[i].predecessor=value
         
          
        }
      }
     
     
    }
  
  
    
  }
  
}

  }




}

class adjecency{

    constructor(currentPosition=null,possiblePoints=null){

        this.currentPosition=currentPosition;
        this.possiblePoints=possiblePoints;
        this.visted=false
        this.predecessor=null

    }
}

class Queue {
	constructor() {
		this.items = {}
		this.frontIndex = 0
		this.backIndex = 0
	}
	enqueue(item) {
		this.items[this.backIndex] = item
		this.backIndex++
		return item + ' inserted'
	}
	dequeue() {
		const item = this.items[this.frontIndex]
		delete this.items[this.frontIndex]
		this.frontIndex++
		return item
	}
  isEmpty(){
    return this.items.length == 0;
  }
	peek() {
		return this.items[this.frontIndex]
	}
	get printQueue() {
		return this.items;
	}
}

class PredecessorChain{

  constructor(currentPosition,tail=null){
    this.currentPosition=currentPosition;
    this.tail=tail;
  }

}

let knightPlay=new knights();

knightPlay.knightMoves([0,0],[7,7])