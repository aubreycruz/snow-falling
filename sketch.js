var bg;
var snow1, snow2, snow3;
var s1, s2, s3;

function preload(){
  bg = loadImage("snow1.jpg");
  snow1 = loadImage("snow4.webp")
  snow2 = loadImage("snow5.webp")
  snow3 = loadImage("snow6.png")
}

function setup() {
  createCanvas(3000,800);
  s1 = createSprite(800, 200);
  s1.addImage(snow1);
  s2 = createSprite(1500, 300);
  s2.addImage(snow2);
  s3 = createSprite(2500, 500);
  s3.addImage(snow3);
}

function draw() {
  background(bg);  

  drawSprites();
}