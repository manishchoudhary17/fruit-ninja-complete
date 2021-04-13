  var sword, swordImage, enemyG, enemyImage, fruit1, fruit2,
      fruit3, fruit4, fruitG, fruit1Image, fruit2Image,               fruit3Image, fruit4Image, score,gameOverImage;
  var PLAY=1;
  var END=0;
  var gameState=PLAY;
  var knfSound;
  var gameOverS;


  function preload(){
  swordImage = loadImage ("sword.png");
  enemyImage = loadAnimation ("alien1.png","alien2.png");
  fruit1Image = loadImage ("fruit1.png");
  fruit2Image = loadImage ("fruit2.png");
  fruit3Image = loadImage ("fruit3.png");
  fruit4Image = loadImage ("fruit4.png");
  gameOverImage = loadImage ("gameover.png");
  knfSound = loadSound ("knifeSwooshSound.mp3");
  gameOverS = loadSound ("gameover.mp3"); 
    
 }

  function setup(){
  createCanvas (600, 600);
  
  sword = createSprite (200,200,100,100);
  sword.addImage (swordImage);
  sword.scale = 1/2;
  
  
  
  enemyG = new Group();
  fruitG = new Group();
  
  score = 0;
  
  }

  function draw(){
  background ("skyblue");
  
  

  if (gameState === PLAY) {
  sword.x = World.mouseX;
  sword.y = World.mouseY;
  
  var select_item = Math.round(random(1,5));
  if (World.frameCount%80 === 0){
  if (select_item == 1) {
      fruit1()
    } else if (select_item == 2) {
      enemy()
    } else if (select_item == 3) {
      fruit2()
    } else if (select_item == 4){
      fruit3()
   } else {
      fruit4()
    }
    }
 
   if(sword.isTouching(fruitG)){
     fruitG.destroyEach();
     score=score+2;
     knfSound.play();
     }
   
   else
     
   if(sword.isTouching(enemyG)){
     enemyG.destroyEach();
     gameState=END;
     fruitG.destroyEach();
     enemyG.setVelocityXEach(0);
     fruitG.setVelocityXEach(0);
     sword.addImage(gameOverImage);
     sword.scale=2;
     sword.x=300;
     sword.y=300;
     gameOverS.play();
     
     }
     }
 
  
  drawSprites();
  
  text("Score: "+ score, 500,50);
  
}

  function enemy(){

  var enemy=createSprite(600,Math.round(random(30,400)),10,10);
  
  enemy.addAnimation("enemy_blinking",enemyImage);
  enemy.velocityX=-6;
  enemy.scale=0.75;
  enemy.lifetime=150;
  enemyG.add(enemy);
  
}

  function fruit1(){
  var fruit1=createSprite(600,Math.round(random(30,400)),10,10);
    
  position = Math.round(random(1,2));
  fruit1 = createSprite (400,200,20,20);  
    
  if(position == 1)
  {
  fruit1.x = 600;
  fruit1.velocityX = -(7+(score/4));  
    } 
    else 
   {
  if(position == 2){
   fruit1.x = 0; 
    
    //increse speed
 fruit1.velocityX = (7+(score/4));
     
  }  
  }  
     
  fruit1.addImage(fruit1Image);
  fruit1.scale=0.2;
  fruit1.lifetime=150;
  fruitG.add(fruit1);
  }
  
  function fruit2(){
  var fruit2=createSprite(600,Math.round(random(30,400)),10,10);
    
  position = Math.round(random(1,2));
  fruit2 = createSprite (400,200,20,20);  
    
  if(position == 1)
  {
  fruit2.x = 600;
  fruit2.velocityX = -(7+(score/4));  
    } 
    else 
   {
  if(position == 2){
   fruit2.x = 0; 
    
    //increse speed
 fruit2.velocityX = (7+(score/4));
     
  }  
  }  
    
  fruit2.addImage(fruit2Image);
  fruit2.scale=0.2;
  fruit2.lifetime=150;
  fruitG.add(fruit2);
  }

  function fruit3(){
  var fruit3=createSprite(600,Math.round(random(30,400)),10,10);
    
  position = Math.round(random(1,2));
  fruit3 = createSprite (400,200,20,20);  
    
  if(position == 1)
  {
  fruit3.x = 600;
  fruit3.velocityX = -(7+(score/4));  
    } 
    else 
   {
  if(position == 2){
   fruit3.x = 0; 
    
    //increse speed
 fruit3.velocityX = (7+(score/4));
     
  }  
  }  
    
  fruit3.addImage(fruit3Image);  
  fruit3.scale=0.2;
  fruit3.lifetime=150;
  fruitG.add(fruit3);
  }

  function fruit4(){
  var fruit4=createSprite(600,Math.round(random(30,400)),10,10);
    
  position = Math.round(random(1,2));
  fruit4 = createSprite (400,200,20,20);  
    
  if(position == 1)
  {
  fruit4.x = 600;
  fruit4.velocityX = -(7+(score/4));  
    } 
    else 
   {
  if(position == 2){
   fruit4.x = 0; 
    
    //increse speed
 fruit4.velocityX = (7+(score/4));
     
  }  
  }  
        
  fruit4.addImage(fruit4Image);
  fruit4.scale=0.2;
  fruit4.lifetime=150;
  fruitG.add(fruit4);
  }
