
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paper;

function preload()
{
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
  
	//Create the Bodies Here.
    Right_Box = Bodies.rectangle(1510,610,20,100,{isStatic:true});
	World.add(world,Right_Box);
	Left_Box = Bodies.rectangle(1290,610,20,100,{isStatic:true});
	World.add(world,Left_Box);
	Bottom_Box = Bodies.rectangle(1400,650,200,20,{isStatic:true});
	World.add(world,Bottom_Box);

    ground = new Ground(800,690,1600,20);
    paper = new Paper(200,200,30,30);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();
  rect(Right_Box.position.x,Right_Box.position.y,20,100);
  rect(Left_Box.position.x,Left_Box.position.y,20,100);
  rect(Bottom_Box.position.x,Bottom_Box.position.y,200,20);
  fill("yellow");
  ground.display();
  paper.display();
}

function keyPressed()
{
  if(keyCode === UP_ARROW)
  {
    Matter.Body.applyForce(paper.body,paper.body.position,{x:400,y:-400})
  }
}

