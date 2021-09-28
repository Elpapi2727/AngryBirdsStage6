const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var fish, fish2;
var fishImg, fishImg2;
var objet;
var lataImg,platanoImg,botellaImg; 
var pescado;
var pescadoImg;
var mano;
var manoImg
var pisoI;
var objectGroup;
var noti;

gameState = 0;

function preload() {
    backgroundImg = loadImage("bg.png");
    manoImg = loadImage("mano.png");
    pescadoImg = loadImage("pescado.png");
    botellaImg = loadImage("botella.png");
    platanoImg = loadImage("platano.png");
    lataImg = loadImage("lata.png");
}

function setup(){
createCanvas(650,650);
fish = createSprite(150,500);
fish.addImage(pescadoImg);
fish.scale = 0.7;
fish2 = createSprite(450,450);
fish2.addImage(pescadoImg);
fish2.scale = 0.5;
mano = createSprite(325,325);
mano.addImage(manoImg);
mano.scale = 0.3;
mano.debug = true;
mano.setCollider("rectangle",0,0,90,200)
pisoI = createSprite(325,380,650,10)
pisoI.visible = false;

fish.velocityX = -5;
fish.velocityY = -5;
fish2.velocityX = 4;
fish2.velocityY = -4;

fish.setCollider("circle",-25,0,40)
fish2.setCollider("circle",-25,0,40)
objectGroup = new Group();



}

function draw(){
 background(backgroundImg);
 edges = createEdgeSprites();
mano.x = mouseX
mano.y = mouseY


fish.bounceOff(pisoI);
fish.bounceOff(edges);
fish2.bounceOff(pisoI);
fish2.bounceOff(edges);
fish2.bounce(fish);
fish.bounce(fish2);
//Juego en estado de espera
if(gameState === 0){
text("press space to start",250,100)

}

if(keyDown("space") && gameState === 0){
    gameState = 1;
    }
//Juego iniciado
if(gameState === 1){
if(frameCount %70 === 0){
    trash();
    if(mousePressedOver(object)){
        noti = "si "
        object.destroy();
    }
    else{
        noti = "no"
    }

   
}

textSize(20);
text(noti,50,50)
}

drawSprites();
}

function trash(){

object = createSprite(random(50, 600),40, 10, 10);
object.velocityY = 1;
object.debug = true
mano.depth = object.depth;
mano.depth +=1;
var rand = Math.round(random(1,3))
switch(rand){
case 1: object.addImage(lataImg);
object.scale = 0.05;
break;
case 2: object.addImage(platanoImg);
object.scale = 0.25;
break;
case 3: object.addImage(botellaImg);
object.scale = 0.08;
break;
default:
    break;
}
objectGroup.add(object);

}

