var ball1;
var groundObj;
var dustbin1;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function setup() {
	createCanvas(1000, 100);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

    groundObj=new ground(width/2,670,width,20)
	dustbin1=new dustbin(1200,650)

	var render=Render.create({
		element:document.body,
		engine:engine,
		options:{
			width:1600,
			height:700,
			wireFrames:false
		} 
	})
	

  
	//Create the Bodies Here.
	ball1=new ball(200,450,70)
		
	Engine.run(engine);
	Render.run(render);
	  
}


function draw() {
  rectMode(CENTER);
  background(0);

   groundObj.display();
   ball1.display();
   dustbin1.display();
  
  drawSprites();
 
}
function keyPressed(){
     if(keyCode===UP_ARROW){
    Matter.Body.applyForce(ball1.body,ball1.body.position,{x:100,y:-145})
    
	 }
 }
 

