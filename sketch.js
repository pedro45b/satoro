var PLAY=1
var END=0
var gameState = PLAY;

var carImg,conesImg,pathImg;
var car,cones,path;
var select_balloon 
var distance = 0

var gameOver
function preload(){

pathImg = loadImage("path.png")     
carImg = loadImage("car.png.png")
conesImg = loadAnimation("cone.png")

}

function setup() {
 createCanvas(500,400) 

 path=createSprite(600,150);
  path.addImage(pathImg);
   path.velocityX = -4;

car = createSprite(70,200);
car.addAnimation("SahilRunning",carImg)
car.scale=0.6;
car.setCollider("circle",0,0,60)

go = new Group()
}

function draw() {
background(0);
if(gameState === PLAY){
    distance = distance + Math.round(getFrameRate()/50);  
 
    
    conesobst()
 
    car.y = World.mouseY;


if(car.isTouching(go)){
gameState=END    
}
}


if(gameState === END){
path.velocityX = 0;
go.destroyEach()    

}

car.debug = true




drawSprites();
text("Distance: "+ distance,400,30);

if(path.x < 0 ){
    path.x = width/2;    
}

}




function conesobst(){
    cones = createSprite(400,Math.round(random(50,250),10,10))
   cones.scale = 0.07;
   cones.velocityX = -5
   cones.addAnimation("cone.png",conesImg)
   cones.setLifetime=130
   go.add(cones)
   }


   function reset(){
    gameState = PLAY;
    gameOver.visible = false;
    car.destroyEach();
    distance = 0;
   }

