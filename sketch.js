
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground1=new Ground(800,680,1600,20)
	dustbin1=new Dustbin(900,650,200,20)
	dustbin2=new Dustbin(810,630,20,100)
	dustbin3=new Dustbin(1030,630,20,100)
    paper1=new Paper()

	

	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 ground1.display()
 dustbin1.display()
 dustbin2.display()
 dustbin3.display()
 paper1.display()
}
function keyPressed(){
	if (keyCode === UP_ARROW){
  
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:80,y:-80});
  
	}
  
	  
  
  }


