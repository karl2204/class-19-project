var tile, tileGroup;
var score = 0;
var invisibleBlock;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
function preload(){

}

function setup() {
    createCanvas(600,windowHeight);
    tileGroup = new Group();
    invisibleBlock = createSprite (1,windowHeight-1, 1200,10);
}

function draw() {
    background (0);
    
if(gameState === PLAY){
    text ('Score: ' + score, 75, windowHeight - 100);
    if (mousePressedOver(tile)){
        score = score + 10;
        tile.destroy();
        
    }
    
    if(frameCount % 30 === 0){
    tile = createSprite (random(1,600),1);
    tile.velocityY = 6;
    tileGroup.add(tile);
    }
}
//if(invisibleBlock.isTouching(tile)){
   // gameState = END;
//}
//if(gameState === END){
 //   tile.velocityY = 0;
  //  tileGroup.destroyEach();
//}
//i'm not sure why the gamestate is not being set to end when the tile and invisible block collide
    
        drawSprites();
}

