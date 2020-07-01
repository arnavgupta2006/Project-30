const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,stand,slingshot;
var block8,block9,block10,block11,block12;
var block13,block14,block15,block16;

function preload(){
  imageMode(CENTER);
  image(polygon_img,polygon.position.x,polygon.position.y,40,40);
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;
  createSprite(400, 200, 50, 50);
  ground = new Ground(50,100,30,40);
  stand = new Ground(140,20,10,20);
  
  block8 = new Ground(330,235,30,40);
  block9 = new Ground(360,235,30,40);
  block10 = new Ground(390,235,30,40);
  block11 = new Ground(420,235,30,40);
  block12 = new Ground(450,235,30,40);
  block13 = new Ground(360,195,30,40);
  block14 = new Ground(390,195,30,40);
  block15 = new Ground(420,195,30,40);
  block16 = new Ground(450,195,30,40);

  //polygon holder with slings
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingshot = new SlingShot(this.polygon,{x:100,y:200});

}

function draw() {
  background(255,255,255);  
  
  
  ground.display();
  stand.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  slingshot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}
function keyPressed (){
  if(keyCode === 32){
slingshot.attach(this.polygon);
  }
}