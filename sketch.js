const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var world,engine;
var backgroundImg;

var snow = []
var snow1img,snow2img;



function preload(){

  backgroundImg = loadImage("snow3.jpg");
}


function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);
  
  if(frameCount % 50===0){
    for(var i=0; i<200; i++){
    snow.push(new Snow(random(0,800),random(0,800)))
  }
}
}
function draw() {
  background(backgroundImg);  
  Engine.update(engine);
  for(var i=0; i<200; i++){
    snow[i].showDrop()
    snow[i].updateY()
  }
  
  drawSprites();
}