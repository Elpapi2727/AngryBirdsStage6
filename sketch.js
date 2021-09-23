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
fish = createSprite(50,50);
fish.addImage(pescadoImg);
//fish.scale = 0.02;
}

function draw(){
 background(backgroundImg);

drawSprites();
}
