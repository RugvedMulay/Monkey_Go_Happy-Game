
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,500);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(500,500,1000,10);
  ground.velocityX = -4;
  ground.x=ground.width/2
  console.log(ground.x);
  
  foodGroup = new Group();
  obstacleGroup = new Group();
  
}


function draw() {
  background(255);
  
  if(ground.x<0){
    ground.x=ground.width/2 
  }
  
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  var survivalTime=0;
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score:"+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("survivalTime"+survivalTime,100,50);
  
 food();
 obstacles();
  
 drawSprites();
  
}

function food(){
  if(World.frameCount%80===0){
    banana = createSprite(400,250,20,20);
    banana.x = Math.round(random(500,500));
    banana.velocityX=-4;
    banana.setLifetime=200;
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    foodGroup.add(banana);
 }
}

function obstacles(){
  if(World.frameCount%300===0){
    stone = createSprite(400,500,20,20);
    stone.x = Math.round(random(500,500));
    stone.velocityX=-4;
    stone.setLifetime=200;
    stone.addImage(obstacleImage);
    stone.scale = 0.3;
    obstacleGroup.add(stone);
 }
}





