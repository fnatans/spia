const foodSprites = new Image();
const tableSprite = new Image();

foodSprites.src = "./sprites/foods.png";
tableSprite.src = "./sprites/table2.png";

const cnv = document.querySelector("canvas");
const ctx = cnv.getContext("2d");

foods = [
    { name : 'grape' , x : 13 ,  y : 10 , w : 42 , h : 54 , m : 1 } , 
    { name : 'melon' , x : 82 ,  y : 10 , w : 55 , h : 54  , m : 2 } , 
    { name : 'watermelon' , x : 149 ,  y : 15 , w : 50 , h : 54  , m : 1 } , 
    { name : 'orange' , x : 231 ,  y : 9 , w : 42 , h : 52  , m : 1 } , 
    { name : 'lemon' , x : 300 ,  y : 11 , w : 50 , h : 49  , m : 0.8 } , 
    { name : 'banana' , x : 374 ,  y : 9 , w : 44 , h : 53  , m : 0.9 } , 
    { name : 'pineapple' , x : 455 ,  y : 8 , w : 28 , h : 59  , m : 1 } , 
    { name : 'mango' , x : 516 ,  y : 7 , w : 46 , h : 56  , m : 2 } , 
    { name : 'apple' , x : 586 ,  y : 9 , w : 52 , h : 53  , m : 1 } , 
    { name : 'greenapple' , x : 659 ,  y : 10 , w : 51 , h : 51  , m : 1 } ,
    { name : 'pear' , x : 729 ,  y : 16 , w : 54 , h : 46   , m : 1} , 
    { name : 'peach' , x : 802 ,  y : 6 , w : 52 , h : 60   , m : 1} , 
    { name : 'cherry' , x : 881 ,  y : 9 , w : 37 , h : 54  , m : 1 } , 
    { name : 'strawberry' , x : 953 ,  y : 6 , w : 38 , h : 59  , m : 1 } , 
    { name : 'blueberry' , x : 1023 ,  y : 15 , w : 48 , h : 48  , m : 0.8 } , 
    { name : 'kiwi' , x : 1090 ,  y : 10 , w : 52 , h : 52  , m : 1 } , 
    { name : 'tomato' , x : 9 ,  y : 78 , w : 54 , h : 55  , m : 1 } , 
    { name : 'olive' , x : 86 ,  y : 86 , w : 43 , h : 44  , m : 1 } , 
    { name : 'coconut' , x : 153 ,  y : 81 , w : 53 , h : 53  , m : 2 } , 
    { name : 'avocado' , x : 234 ,  y : 81 , w : 36 , h : 53  , m : 1 } , 
    { name : 'eggplant' , x :  298 ,  y : 80 , w : 53 , h : 55  , m : 1 } , 
    { name : 'potato' , x : 372 ,  y : 80 , w : 48 , h : 57  , m : 1 } , 
    { name : 'carrot' , x : 446 ,  y : 81 , w : 46 , h : 54  , m : 1 } , 
    { name : 'corn' , x : 516 ,  y : 86 , w : 47 , h : 47  , m : 1 } , 
    { name : 'chili' , x : 586 ,  y : 81 , w : 53 , h : 50  , m : 0.8 } , 
    { name : 'xxxxxx' , x : 000 ,  y : 000 , w : 000 , h : 000  , m : 1 } , 


]

function gameStatusLog(obj){
    ctx.fillStyle = "#156915";
    ctx.font = "12px Consolas";
    var lineheight = 15;
    var lines = obj.status().split('\n');
    
    for (var i = 0; i<lines.length; i++)
        ctx.fillText(lines[i], 0, 15 + (i*lineheight) ); 
}

function loopGame(){
    bg.fill();
    table.width = 10;
    table.draw();

    gameFoods.forEach(f =>{
        f.fall();
        f.draw();
    })

    gameStatusLog(gameFoods[0]);
    requestAnimationFrame(loopGame);
}

var bg  = new sprt(foodSprites, 0,0,0,0,0,0,0,0);
var table = new sprt(tableSprite,0,0,1280,720, 50  ,300, 250, 100 );

var q = 100;
var gameFoods = [];

for(var x = 0; x < q ; x++){
    _i = Math.floor(Math.random() * foods.length)
    _x = Math.floor(Math.random() * cnv.width * 0.8)
    _y = Math.floor(Math.random() * (cnv.height / 2) - 100)

    var f = foods[_i];
    var food = new sprt(foodSprites , f.x  , f.y, f.w, f.h , _x , _y , f.w , f.h);
    food.m = f.m;
    gameFoods.push(food);
}

//console.log(gameFoods)
loopGame();

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        gameFoods[0].jump();
    }
}