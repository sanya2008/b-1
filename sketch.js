const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg
var ball1
var score=0
var hoops
var line1




function preload(){
backgroundImg=loadImage("background.jpg")

}

function setup(){

createCanvas(1200,600)
engine = Engine.create();
  world = engine.world;

 ball1=new ball (100,400,100)

 line1=new lines(10,530,2500,10)
 
 hoops=new hoop(1120,150,200,210)
 
	
	
}

function draw(){
    background(backgroundImg);
   
    Engine.update(engine);

   
    ball1.display()
    line1.display()
    hoops.display()
    
    
    textSize(40)
    fill ("white")
  text("Goals= " +score,20,50)
   
  
 // drawSprites();
 

}

function keyPressed() {
	if (keyCode === 32) {
Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y:-85});
	
	 }
   }

   function bh(){
    if(ball1.isTouching("hoops")){
        score=score+1
        ball.x=100
        ball.y=400
    }
   }