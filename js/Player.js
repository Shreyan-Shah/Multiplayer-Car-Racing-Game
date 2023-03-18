class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.rank = 0;
    this.score = 0;
    this.positionx = 0;
    this.positiony = 0;
    this.fuel = 185;
  }

  //read player count from database
  getCount() {
    var playerCountref = database.ref("playerCount")
    playerCountref.on("value", function (data) {
      console.log(data.val());
      playerCount = data.val();
    })
  }

  // writing playercount to database
  updateCount(count) {
    console.log(count)
    database.ref("/").update({
      playerCount: count
    });
  }

  //add player info to database
  addPlayer() {
    var playerIndex = "players/player" + this.index;

    if (this.index == 1) {
      this.positionx = width / 2 - 100
    }
    else {
      this.positionx = width / 2 + 100
    }

    database.ref(playerIndex).set({
      name: this.name,
      positionx: this.positionx,
      positiony: this.positiony,
      rank: this.rank,
      score: this.score
    });
  }

  getDistance() {

  }

  update() {
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).update({
      name: this.name,
      positionx: this.positionx,
      positiony: this.positiony,
      rank: this.rank,
      score: this.score
    });
  }

  // read player info from database
  // static methods can only be called by the class not by the objects
  static getPlayerInfo() {
    var playerInfoRef = database.ref("players")
    playerInfoRef.on("value", function (data) {
      allPlayers = data.val();
      console.log(allPlayers);
    })
  }
}
