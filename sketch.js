
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var world;
var slingshot;
var ball,ball_image;

function preload(){

ball_image=loadImage("polygon.png")

}


function setup() {
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
  
    ground1 = new Ground(600,390,1200,10);
    ground2 = new Ground(485,300,170,5)
    ground3 = new Ground(877,170,170,5)

    //tower1

    block1 = new box(425,280,30,30)
    block2 = new box(455,280,30,30)
    block3 = new box(485,280,30,30)
    block4 = new box(515,280,30,30)
    block5 = new box(545,280,30,30)

    block6 = new box(440,250,30,30)
    block7 = new box(470,250,30,30)
    block8 = new box(500,250,30,30)
    block9 = new box(530,250,30,30)

    block10 = new box(455,220,30,30)
    block11 = new box(485,220,30,30)
    block12 = new box(515,220,30,30)

    block13 = new box(470,190,30,30)
    block14 = new box(500,190,30,30)

    block15 = new box(485,160,30,30)

    //tower2

    block16 = new box(830,151,30,30)
    block17 = new box(860,151,30,30)
    block18 = new box(890,151,30,30)
    block19 = new box(920,151,30,30)

    block20 = new box(845,121,30,30)
    block21 = new box(875,121,30,30)
    block22 = new box(905,121,30,30)

    block23 = new box(860,91,30,30)
    block24 = new box(890,91,30,30)

    block25 = new box(875,61,30,30)

    ball = Bodies.circle(50,200,20)
    World.add(world,ball);
   

    slingshot = new SlingShot(ball,{x:150,y:200})

    Engine.run(engine)
  }
  
  function draw() {
    background("purple");  
   

    ground1.display();
    ground2.display()
    ground3.display();

    block1.display()
    block2.display()
    block3.display()
    block4.display()
    block5.display()
    block6.display()
    block7.display()
    block8.display()
    block9.display()
    block10.display()
    block11.display()
    block12.display()
    block13.display()
    block14.display()
    block15.display()

    block16.display()
    block17.display()
    block18.display()
    block19.display()
    block20.display()
    block21.display()
    block22.display()
    block23.display()
    block24.display()
    block25.display()

    slingshot.display()
    

    imageMode(CENTER)
    image(ball_image,ball.position.x,ball.position.y,40,40)
  
    drawSprites();
  
  }

  function mouseDragged(){
    Matter.Body.setPosition(ball,{x:mouseX,y:mouseY})
  }
  
  function mouseReleased(){
    slingshot.fly();
  }

  function keyPressed(){
    if(keyCode===32){
      slingshot.attach(this.ball)
    }
  }

