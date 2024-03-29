
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(700, 700);


	engine = Engine.create();
	world = engine.world;
	bobDiameter=40;
	//Create the Bodies Here.
	bob1 =new Bob(330,600,20);
	bob2 =new Bob(370,600,20);
	bob3 =new Bob(410,600,20);
	bob4 =new Bob(450,600,20);
	bob5 =new Bob(490,600,20);

	Roof1=new Roof(400,300,400,20);
	
	rope1=new Rope(bob1.body,Roof1.body,-bobDiameter*2, 0)

	rope2=new Rope(bob2.body,Roof1.body,-bobDiameter*1, 0)
	rope3=new Rope(bob3.body,Roof1.body,0, 0)
	rope4=new Rope(bob4.body,Roof1.body,bobDiameter*1, 0)
	rope5=new Rope(bob5.body,Roof1.body,bobDiameter*2, 0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
 
 

	
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

	Roof1.display();

	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();








   drawSprites();
}

