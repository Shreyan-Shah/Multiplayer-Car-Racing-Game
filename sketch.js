var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var gameState;

var cars = []
var car1, car2;
var allPlayers;

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1_Img = loadImage("./assets/car1.png");
  car2_Img = loadImage("./assets/car2.png");
  track_Img = loadImage("./assets/track.jpg")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage)
  if (playerCount == 2) {
    game.updateGameState(1);
  }
  if (gameState == 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
