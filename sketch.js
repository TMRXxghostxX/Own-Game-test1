var player, playerImg;
var cop, copImg;
var track, trackImg;

function preload(){
  playerImg=loadImage("Player.png");
  copImg=loadImage("Cop.png");
  trackImg=loadImage("track (2).jpg")
  }
  
  
function setup() {
  createCanvas(400,400);
  player = createSprite(200,200,50,50);
  cop = createSprite(200,375,50,50);
  track = createSprite(200,200,50,50);
  player.addImage("Player",playerImg);
  copImg.addImage("Cop",copImg);
  trackImg.addImage("track",trackImg);
} 
  
function draw() {
  background("white");
  
  drawSprites();
}