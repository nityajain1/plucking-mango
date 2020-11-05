
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree;
var ground;
var stone;
var boy;
var mango1,mango2,mango3;

function preload()
{
	
}

function setup() {
	createCanvas(1530,710);


	engine = Engine.create();
	world = engine.world;

	tree = new Tree();
	ground = new Ground();
	stone = new Stone(300,300);
	boy = new Boy();
	mango1 = new Mango(600,600);
	mango2 = new Mango(300,300);
	mango3 = new Mango(300,400);


	slingShot = new Slingshot(stone.body,{x:300,y:100});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  tree.display();
  ground.display();
  stone.display();
  boy.display();
  mango1.display();
  mango2.display();
  mango3.display();

  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
 
}

function mouseDragged(){

    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){

    slingShot.fly();
}
function keyPressed(){
	if (keyCode === 32) {
		Matter.Body.setPosition(stone.body),
		launcherObject.attach(stone.body);
	}
}
function detectcollision(stone,Mango){
	mangoBodyPosition = Mango.body.position
	stoneBodyPosition = stone.body.position

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition,y)
	   if (distance<=mango.r+stone.r)
	{
		Matter.Body.setStatic(mango.body,false);

	}
}


