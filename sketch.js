var canvas , bg;
var together;
var tom , tomImg1 , tomImg2;
var jerry , jerryImg1, jerryImg2;
function preload() {
    //load the images here
    bg = loadImage ("images/garden.png");
    tomImg1 = loadAnimation ("images/cat1.png");
    tomImg2 = loadAnimation ("images/cat2.png");
    tomImg3 = loadAnimation ("images/cat3.png");
    tomImg4 = loadAnimation ("images/cat4.png");
    jerryImg1 = loadAnimation ("images/mouse1.png");
    jerryImg2 = loadAnimation ("images/mouse2.png");
    jerryImg3 = loadAnimation ("images/mouse3.png");
    jerryImg4 = loadAnimation ("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite (870.600);
    tom.addAnimation (tomImg1);
    tom.scale = 0.2;

    jerry = createSprite(200,600);
    jerry.addAnimation (jerryImg1);
    jerry.scale = 0.15;


}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x<(tom.width - jerry.width)/2)
    {
        tom.velocityX = 0;
        tom.addAnimation (tomImg3);
        tom.x = 300;
        tom.scale = 0.2;
        tom.changeAnimation(tomImg3);
        jerry.addAnimation (jerryImg3);
        jerry.scale = 0.15;
        jerry.changeAnimation(jerryImg3);

    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      tom.velocityX = -5;
      tom.addAnimation (tomImg2);
      tom.changeAnimation (tomImg2);
      
      jerry.addAnimation(jerryImg2);
      jerry.frameDelay = 25;
      jerry.changeAnimation(jerryImg2);
      
  }


}
