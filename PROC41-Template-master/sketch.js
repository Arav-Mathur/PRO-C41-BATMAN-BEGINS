const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world
var maxdrops = 100
var thunderframe;
var drop,walking_img,walking,thunder_img,thunder1,thunder2,thunder3,thunder4
function preload(){
    walking_img = loadAnimation("images/Walking Frame/walking_8.png",
    "images/Walking Frame/walking_7.png","images/Walking Frame/walking_6.png",
    "images/Walking Frame/walking_5.png","images/Walking Frame/walking_4.png",
    "images/Walking Frame/walking_3.png","images/Walking Frame/walking_2.png",
    "images/Walking Frame/walking_1.png")

    //thunder_img = loadAnimation("images/thunderbolt/1.png",
    //"images/thunderbolt/2.png","images/thunderbolt/3.png",
    //"images/thunderbolt/4.png",)
    thunder1 = loadImage("images/thunderbolt/1.png")
    thunder2 = loadImage("images/thunderbolt/2.png")
    thunder3 = loadImage("images/thunderbolt/3.png")
    thunder4 = loadImage("images/thunderbolt/4.png")

}

function setup(){
   createCanvas(400,700)
   engine = Engine.create();
	world = engine.world;
walking = createSprite(200,500,300,50)
walking.addAnimation("walking",walking_img);
walking.scale = 0.6


drop = []
if(frameCount%500===0){
    for (var i = 0; i < maxdrops; i++) {
        drop.push(new Drops(random(0,400),random(0,400)))        
    }
}
    umbrella = new Umbrella(200,400)

    Engine.run(engine);
}

function draw(){
    background("black")

for (var i = 0; i < maxdrops; i++) {
drop[i].display();
drop[i].update();    
}

if(frameCount%100===0){
thunder = createSprite(200,130)
thunderframe = frameCount;
rand = Math.round(random(1,4))
switch(rand){
    case 1: thunder.addImage(thunder1);
    break
    case 2: thunder.addImage(thunder2);
    break
    case 3: thunder.addImage(thunder3);
    break
    case 4: thunder.addImage(thunder4);
    break

}
thunder.scale = 0.4
}
if (thunderframe + 10 === frameCount){
    thunder.destroy();
}

    drawSprites();
}   

