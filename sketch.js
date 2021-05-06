
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var ground;
var stone;
var rubber;
var sand1, sand2,sand3,sand4,sand5,sand6,sand7,sand8,sand9,sand10,sand11,sand12,sand13,sand14,sand15,sand16,sand17,sand18;
var iron;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

    engine = Engine.create();
	world = engine.world;
    
    hammer = new Hammer(500,400);
    ground= new Plane(400,680,800,40);
	stone= new Stone(600,600, 100, 100);
	rubber=new Rubber(300,650,70)
	sand1= new Sand(200,650,10);
	sand2= new Sand(250,650,10);
	sand3= new Sand(300,650,10);
	sand4= new Sand(350,650,10);
	sand5= new Sand(400,650,10);
	sand6= new Sand(450,650,10);
	sand7= new Sand(500,650,10);
	sand8= new Sand(550,650,10);
	sand9= new Sand(600,650,10);
	sand10= new Sand(650,650,10);
	sand11= new Sand(700,650,10);
	sand12= new Sand(570,650,10);
	sand13= new Sand(640,650,10);
	sand14= new Sand(210,650,10);
	sand15= new Sand(170,650,10);
	sand16= new Sand(370,650,10);
	sand17= new Sand(670,650,10);
	sand18= new Sand(510,650,10);
	iron= new Iron(450,630,70,70);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);

  stone.display();
  hammer.display();
  ground.display();
  rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();
  sand11.display();
  sand12.display();
  sand13.display();
  sand14.display();
  sand15.display();
  sand16.display();
  sand17.display();
  sand18.display();
  iron.display();
  
}



