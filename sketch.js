var backgroundIMG
var shooterIMG,shooter
var enemyIMG,enemy1,enemy,enemy3,enemy4
var bulletIMG,bullet

function preload(){
backgroundIMG=loadImage('farm.jpg')
shooterIMG=loadImage('plane.png')
enemyIMG=loadImage('enemyPlane.png')
enemy1=loadImage('enemyPlane.png')
enemy2=loadImage('enemyPlane.png')
enemy3=loadImage('enemyPlane.png')
enemy4=loadImage('enemyPlane.png')
bulletIMG=loadImage('bullet.png')


}


function setup() {
  createCanvas(windowWidth,windowHeight);
  shooter=createSprite(width/2, height/2+200)
  shooter.addImage(shooterIMG)
  shooter.scale=0.35

  enemy=createSprite(400,200)
  enemy.addImage(enemyIMG)
  enemy1=createSprite(600,300)
  enemy1.addImage(enemyIMG)
  enemy2=createSprite(800,200)
  enemy2.addImage(enemyIMG)
  enemy3=createSprite(1000,300)
  enemy3.addImage(enemyIMG)
  enemy4=createSprite(1200,200)
  enemy4.addImage(enemyIMG)
  enemy.scale=0.35
  enemy1.scale=0.35
  enemy2.scale=0.35
  enemy3.scale=0.35
  enemy4.scale=0.35
  
  
}

function draw() {
  background(backgroundIMG);  
  shooter.x=World.mouseX
  drawSprites();
}


function mouseClicked() {
  bullet.createSprite(0,height/2+200)
  bullet.addImage(bulletIMG)
  bullet.x=shooter.x
  
  bullet.velocityY=-10
console.log("hello")
}