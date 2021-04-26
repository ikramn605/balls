const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world
var object ,ball,car


function setup() {
  createCanvas(800,400);
engine=Engine.create()
world=engine.world
var options={
  isStatic:true
}
object=Bodies.rectangle(400,height,800,20,options)
World.add(world,object)
var options={
 restitution:0.5 
}
ball=Bodies.circle(300,100,10,options)
World.add(world,ball)

car=Bodies.circle(400,100,10)
World.add(world,car)

}

function draw() {
  background(0);  
  Engine.update(engine)
  rectMode(CENTER)
  rect(object.position.x,object.position.y,800,20)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
  ellipse(car.position.x,car.position.y,20,20)
  drawSprites();
}