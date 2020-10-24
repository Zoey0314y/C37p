//Create variables here
var dog,dogHappy,sadDog,database,foodS,foodStock;
var feedTime,lastFed;
var foodObj;
var bedroom,garden,washroom;


function preload()
{
  dog = loadImage("images/dogImg.png");
  dogHappy = loadImage("images/dogImg1.png")
  bedroom = loadImage("virtual pet images/Bed Room.png");
  garden = loadImage("virtual pet images/Garden.png");
  washroom = loadImage("virtual pet images/Wash room.png");
  sadDog = loadImage("virtual pet images/deadDog.png");

	//load images here
}

function setup() {
  database = firebase.database();

  createCanvas(800,500);
  dog = createSprite(550,250,50,50);
  dog.addImage(dogHappy);
  dog.scale = 0.2;
  foodStock = database.ref('food');
  foodStock.on('value', readStock);

  fedTime = database.ref('feedtime');
  fedTime.on('value', function(data){
    lastFed = data.val();
  })
  food = new Food(200,300,40);
  
  readState = dateabase.ref('gameState');
  readState.on("value",function(data){
    gameState = data.val();

  })

}

function draw() {  
  background(46,139,87);

 // if(keyDown(UP_ARROW)){
 //   writeStock(foodS);
 //   dog.addImage(dogHappy);
 //   }
  food.display();
  drawSprites();
  //add styles here

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x <= 0){
  x = 0;
  }
  else{
    x = x -1;
  }
  database.ref('/').update({
  Food : x

  })
  if(gameState !="Hungry"){
  feed.hied();
  addFood.hide();
  dog.remove();
  }else{
    feed.show();
    addFood.show();
    dog.addImage(sadDog);
  }
}
function update(state){
  database.ref('/').update({
    gameState : state
  })
}
