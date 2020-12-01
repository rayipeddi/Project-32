const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground;
var block8, block9, block10,block11, block12, block13, block14, block15, block16;
var stand1;
var polygon, polygonIMG;
var sling;
var score = 0;
var bg = (255,255,255)
function preload(){
  polygonIMG = loadImage('images.png')
}
function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600,height,1200,20);



  
  //level two
  block8 = new Block(330, 235, 30, 40);
  block9 = new Block (360, 235, 30, 40) ;
  block10 = new Block( 390, 235, 30, 40) ;
  block11 = new Block(420, 235, 30, 40) ;
  block12 = new Block( 450, 235, 30, 40) ;
  //level three
  block13 = new Block(360, 195, 30, 40) ;

  block14 = new Block( 390, 195, 30, 40) ;
  block15 = new Block(420, 195, 30, 40) ;
  //top
  block16 = new Block(390, 155, 30, 40) ;

  stand1 = new Ground(390,257,150,5)
  polygon = new Polygon(250,200,20)
  sling = new SlingShot(polygon.body, {x:100, y:200})

  //createSprite(400, 200, 50, 50);
}

function draw() {
  if(bg){
    background(bg);  
  }
  
  //getTime()
  Engine.update(engine);
  ground.display()
  block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()
  block13.display()
  block14.display()
  block15.display()
  block16.display()

  block8.score()
  block9.score()
  block10.score()
  block11.score()
  block12.score()
  block13.score()
  block14.score()
  block15.score()
  block16.score()

  stand1.display()
  polygon.display()
  sling.display()
  //drawSprites();
  fill("black")
  text("Score : "+score,725,40)
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  sling.fly();
  gameState = "launched";
}
function keyPressed(){
  if(keyCode === 32){
     Matter.Body.setPosition(polygon.body, {x: 100,y:200})
     sling.attach(polygon.body);
  }
}
async function getTime(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/America/Los_Angeles")
  var response2 = await response.json()
  var datetime = response2.datetime
  var hour = datetime.slice(11,13)
  if(hour >= 0600 && hour <= 1200){
bg = (255)
  }
  else{
    bg = (0)
  }
console.log(hour)
}