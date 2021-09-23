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
pisoI = createSprite(325,380,650,10)
}

function draw(){
 background(backgroundImg);
 edges = createEdgesSprite;
mano.x = mouseX
mano.y = mouseY


drawSprites();
}
