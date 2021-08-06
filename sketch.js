var bath;
var gym;
var eat;
var Move;
var sleep;
var bg , space ;
var Astronaut;




function preload(){
bg = loadImage("iss.png")
bath = loadAnimation("bath1.png","bath2.png")
gym = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png")
eat= loadAnimation("eat1.png","eat2.png")
sleep = loadAnimation("sleep.png")
Move = loadAnimation("move.png","move1.png")
brush = loadAnimation("brush.png")
}

function setup() {
  createCanvas(400,400);
  
  //space = createSprite(200,200,400,400)
  //space.addAnimation("space",bg)
  //space.scale = 0.1;
  
  
  Astronaut = createSprite(200, 250);
  Astronaut.addAnimation("Astronaut",sleep)
  Astronaut.scale = 0.1;
 
 
   
}

function draw() {
  background(255,255,255); 
  

  createEdgeSprites();
  //AstronautAstronaut.bounceOff(Edges);
  
  text("Press M and Arrows to see Astronaut daily routine",100,50)
  
  if(keyDown("UP_ARROW")){
  Astronaut.addAnimation("brushing",brush)
  Astronaut.changeAnimation("brushing")
  Astronaut.y = 250;
  Astronaut.VelocityX = 0;
  Astronaut.VelocityY = 0;

  }
  if(keyDown("DOWN_ARROW")){
    Astronaut.addAnimation("gymming",gym)
    Astronaut.changeAnimation("gymming")
    Astronaut.y = 250;
    Astronaut.VelocityX = 0;
    Astronaut.VelocityY = 0;
   
    }
  
    if(keyDown("RIGHT_ARROW")){
    Astronaut.addAnimation("bathing",bath)
    Astronaut.changeAnimation("bathing")
    Astronaut.y = 250;
     Astronaut.VelocityX = 0;
    Astronaut.VelocityY = 0;  }
  
    if(keyDown("LEFT_ARROW")){
      Astronaut.addAnimation("eating",eat)
      Astronaut.changeAnimation("eating")
      Astronaut.y = 250;
      Astronaut.VelocityX = 1;
      Astronaut.VelocityY = 1;
     }
     
    if(keyDown("m")){
    Astronaut.addAnimation("moving",Move)
    Astronaut.changeAnimation("moving")
    Astronaut.y = 250;
    Astronaut.VelocityX = 0;
    Astronaut.VelocityY = 0; }
              
     fill("yellow")
     text("Press M and Arrows to see Astronaut daily routine",100,50)
     
  
  drawSprites();
}