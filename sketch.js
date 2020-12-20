const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world,engine;

function setup() {
createCanvas(1800, 600);
engine = Engine.create();
world = engine.world;
ground=new ground(900,580,width,10);
paper=new paper(300,545,10);
dustbin1=new dustbin( 900,575,10,60);
dustbin2=new dustbin( 950,575,10,60);
dustbin3=new dustbin( 925,575,50,10);
Engine.run(engine);  
}

function draw() {
background(0);
ground.display();
paper.display();
dustbin1.display();
dustbin2.display();
dustbin3.display();
keyPressed();
drawSprites();
}
function keyPressed(){
if (keyDown===UP_ARROW){   
Matter.Body.applyForce( paper.body,paper.body.position,{ x:85,y:-85})
}
}


