const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball
var ball2
var btn1, btn2

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var ball_options={
    restitution:1.0
  }
  var ball2_options={
    restitution:1.5
  }
  ball = Bodies.circle(50,50,25,ball_options)
  ball2 = Bodies.circle(300,200,20,ball2_options)
  World.add(world,ball2)
  World.add(world,ball)
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
  btn1=createImg("right.png")
  btn1.position(50,50)
  btn1.size(75,25)
  btn1.mouseClicked(hforce)
  btn2 = createImg("up.png")
  btn2.position(300,50)
  btn2.size(50,25)
  btn2.mouseClicked(vforce)
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  ellipse(ball.position.x,ball.position.y,25)
  ellipse(ball2.position.x,ball2.position.y,20)
  Engine.update(engine);
}
function hforce() {
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}
function vforce() {
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}
