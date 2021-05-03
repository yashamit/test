class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    //this.distanceX = 0;
    this.rank = null
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance,
      //distanceX:this.distanceX
      
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
  
  getRank(){
    var rankRef = database.ref('carsAtEnd')
    rankRef.on("value", (data)=>{
      this.rank = data.val();
    } )
  }

  static updateRank(rank){
    database.ref("/").update({
      carsAtEnd : rank

    })
  }

}
