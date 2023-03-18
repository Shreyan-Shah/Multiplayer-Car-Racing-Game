class Game {
  constructor() { }
  //read gamestate from the database
  getState() {
    var gameStateref = database.ref("gameState");
    gameStateref.on("value", function (data) {
      gameState = data.val()
    });
  }

  start() {
    form = new Form();
    form.display();
    player = new Player();
    playerCount = player.getCount();

    car1 = createSprite(width / 2 - 50, height - 100, 50, 50);
    car1.addImage(car1_Img);
    car1.scale = 0.07;

    car2 = createSprite(width / 2 + 50, height - 100, 50, 50);
    car2.addImage(car2_Img);
    car2.scale = 0.07;

    cars = [car1, car2];
  }

  //writes gamestate to database
  updateGameState(state) {
    database.ref("/").update({
      gameState: state
    })
  }

  handleElements() {
    form.hide();
  }

  play() {
    this.handleElements();
    Player.getPlayerInfo();
    if (allPlayers !== undefined) {
      image(track_Img, 0, -height * 5, width, height * 6)

      var index = 0
      for (var plr in allPlayers) {
        index = index + 1
        var x = allPlayers[plr].poitionx;
        var y = height-allPlayers[plr].positiony;

        cars[index - 1].position.x = x
        cars[index - 1].position.y = y
      }
    }
    this.handlePlayerControls();
    drawSprites()
  }

  handlePlayerControls() {
    if (keyIsDown(UP_ARROW)) {
      player.positiony += 10
      player.update();
    }
  }
}