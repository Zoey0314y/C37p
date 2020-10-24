class Food{
    constructor(){
    this.foodStock = 0;
    this.lastFed;
    this.milk = loadImage("images/Milk.png");
    }
    
    
    getFoodStock(){
        var foodStockref = database.ref('FoodStock');
        foodStockref.on("value",function(data){
            foodStock = data.val();
    
        })
    }
    
        updateFoodStock(count){
        database.ref('/').update({
        foodCount : count

        })
    
        }

        deductFood(count){
        var foodIndex = "food" + foodCount;
        database.ref(foodIndex).set({
        count : count
        })

        }
        display(){
        var x = 80,y = 100;
        imageMode(CENTER);

        if(this.foodStock !=0){
        for(var i = 0 ; i < this.foodStock; i++){
            if(i % 10 == 0){
                x = 80;
                y = y + 50;
            }
            image(this.image,x,y,50,50);
            x = x + 30;
        }

        }

        }

        bedroom(){
            background(bedroom,550,500);
        }
        garden(){
            background(garden,550,500);
        }
        washroom(){
            background(washroom,550,500);
        }
        currentTime = hour();

        if(currentTime=(lastFed +1)){
        update("Playing");
        foodObj.garden();
        }
        if(currentTime = (lastFed +2)){
            update("Sleeping");
            foodObj.bedroom();
        }
        if(currentTime =(lastFed + 2) && currentTime <= (lastFed + 4)){
            update("Bathing");
            foodObj.washroom();
        }
        /*else{
            update("Hungry");
            foodObj.display();

        }*/

    }
