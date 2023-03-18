class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  setElementPosition() {
    this.titleImg.position(120, 160);
    this.input.position(width / 2, height / 2);
    this.playButton.position(width / 2, height / 2 + 100);
    this.greeting.position(width / 2 - 100, height / 2 - 100);
  }

  setElementStyle() {
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }

  handleMousedPressed() {
    this.playButton.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();
      this.titleImg.hide();
      var message = `Hello! ${this.input.value()}
      </br>
      waiting for other players to join`
      this.greeting.html(message);
      playerCount = playerCount + 1;
      console.log(playerCount);
      player.updateCount(playerCount);
      player.index = playerCount
      player.name = this.input.value();
      player.addPlayer();
      player.getDistance();
    });
  }

  display() {
    this.setElementPosition();
    this.setElementStyle();
    this.handleMousedPressed();
  }
}
