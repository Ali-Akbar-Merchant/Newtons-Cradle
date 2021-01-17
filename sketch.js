
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = MatterRender;
const Constraint = Matter.Constraint;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5, roofObject
var rope1,rope2,rope3,rope4,rope5;
var world;

function setup() {
	createCanvas(1600, 700);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	roofObject=new roofObject(width/2, height/4,width/7,20);

	bobDiameter=40;

	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	bobObject1=new bob(startBobPositionX-bobDiameter*2,startBobPositionY,BobDiameter);
	bobObject2=new bob(startBobPositionX-bobDiameter,startBobPositionY,BobDiameter);
	bobObject3=new bob(startBobPositionX,startBobPositionY,BobDiameter);
	bobObject4=new bob(startBobPositionX+bobDiameter,startBobPositionY,BobDiameter);
	bobObject5=new bob(startBobPositionX+bobDiameter*2,startBobPositionY,BobDiameter);

	//Create a Ground

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		width: 1200,
		height: 700,
		wireframes: false
		}
	});

	rope1=new rope1(bodyObject1.body,roofObject.body,-bobDiameter*2, 0)
	
	rope2=new rope1(bodyObject1.body,roofObject.body,-bobDiameter*2, 0)
	rope3=new rope1(bodyObject1.body,roofObject.body,-bobDiameter*2, 0)
	rope4=new rope1(bodyObject1.body,roofObject.body,-bobDiameter*2, 0)
	rope5=new rope1(bodyObject1.body,roofObject.body,-bobDiameter*2, 0)
  
	/*constraint1={
		bodyA:bobObject1.body,
		bodyB:roofObject.body,
		bodyB: {x:-bobDiameter*2, y:0}
	}
	
	constraint2={
		bodyA:bobObject2.body,
		bodyB:roofObject.body,
		bodyB: {x:-bobDiameter, y:0}
	}

	constraint3={
		bodyA:bobObject3.body,
		bodyB:roofObject.body,
		bodyB: {x:0, y:0}
	}

	constraint4={
		bodyA:bobObject4.body,
		bodyB:roofObject.body,
		bodyB: {x:-bobDiameter*2, y:0}
	}

	constraint5={
		bodyA:bobObject5.body,
		bodyB:roofObject.body,
		bodyB: {x:-bobDiameter*2, y:0}
	}
	 
	var pendulum1=Constraint.create(constraint1)
	var pendulum2=Constraint.create(constraint2)
	var pendulum3=Constraint.create(constraint3)
	var pendulum4=Constraint.create(constraint4)
	var pendulum5=Constraint.create(constraint5)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



