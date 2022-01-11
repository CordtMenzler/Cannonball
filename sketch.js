const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var ground
var background, backroundImg
var tower, towerImg
var cannonImg
var cannonBaseImg
var angle
var cannonball
var balls=[]
function preload() {
 
  backgroundImg=loadImage("assets/background.gif")
 towerImg=loadImage("assets/tower.png")
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  var  options={
    isStatic:true

  }
  angleMode(DEGREES)
  angle=15

  ground=Bodies.rectangle(0,height-1,width*2,1,options)
  World.add(world,ground)
  tower=Bodies.rectangle(160,350,160,310,options)
  World.add(world,tower)
  cannon=new Cannon(180,110,130,100,angle)
  cannonball=new Cannonball(cannon.x,cannon.y)
 
}

function draw() {
  background(189);
  image(backgroundImg,0,0,1200,600)
  
 
  Engine.update(engine);
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,width*2,1)
  
   Engine.update(engine)
   push()
   imageMode(CENTER)
   image(towerImg,tower.position.x, tower.position.y,160,310)
   pop()
for(var i=0;i<balls.length;i++){
  showcannonballs(balls[i],i)
}
   
   cannon.display()


  
}
function keyReleased(){
  if(keyCode==DOWN_ARROW){
    balls[balls.length-1].shoot()
  }
}

function keyPressed(){
  if(keyCode==DOWN_ARROW){
    var cannonball=new Cannonball(cannon.x,cannon.y)
    balls.push(cannonball)
  }
}

function showcannonballs(balls,array){
  if(balls){
    balls.display()
  }
}
