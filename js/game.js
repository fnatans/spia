const sprites = new Image();
sprites.src = "./sprites/foods.png";
const cnv = document.querySelector("canvas");
const ctx = cnv.getContext("2d");

foods = [
    { name : 'grape' , x : 13 ,  y : 10 , w : 42 , h : 54  } , 
    { name : 'melon' , x : 82 ,  y : 10 , w : 55 , h : 54  } , 
    { name : 'watermelon' , x : 149 ,  y : 15 , w : 50 , h : 54  } , 
    { name : 'orange' , x : 231 ,  y : 9 , w : 42 , h : 52  } , 
    { name : 'lemon' , x : 300 ,  y : 11 , w : 50 , h : 49  } , 
    { name : 'banana' , x : 374 ,  y : 9 , w : 44 , h : 53  } , 
    { name : 'pineapple' , x : 455 ,  y : 8 , w : 28 , h : 59  } , 
    { name : 'mango' , x : 516 ,  y : 7 , w : 46 , h : 56  } , 
    { name : 'apple' , x : 586 ,  y : 9 , w : 52 , h : 53  } , 
    { name : 'greenapple' , x : 659 ,  y : 10 , w : 51 , h : 51  } ,
    { name : 'pear' , x : 729 ,  y : 16 , w : 54 , h : 46  } , 
    { name : 'peach' , x : 802 ,  y : 6 , w : 52 , h : 60  } , 
    { name : 'cherry' , x : 881 ,  y : 9 , w : 37 , h : 54  } , 
    { name : 'strawberry' , x : 953 ,  y : 6 , w : 38 , h : 59  } , 
    { name : 'blueberry' , x : 1023 ,  y : 15 , w : 48 , h : 48  } , 
    { name : 'kiwi' , x : 1090 ,  y : 10 , w : 52 , h : 52  } , 
    { name : 'tomato' , x : 9 ,  y : 78 , w : 54 , h : 55  } , 
    { name : 'olive' , x : 86 ,  y : 86 , w : 43 , h : 44  } , 
    { name : 'coconut' , x : 153 ,  y : 81 , w : 53 , h : 53  } , 
    { name : 'avocado' , x : 234 ,  y : 81 , w : 36 , h : 53  } , 
    { name : 'eggplant' , x :  298 ,  y : 80 , w : 53 , h : 55  } , 
    { name : 'potato' , x : 372 ,  y : 80 , w : 48 , h : 57  } , 
    { name : 'carrot' , x : 446 ,  y : 81 , w : 46 , h : 54  } , 
    { name : 'corn' , x : 516 ,  y : 86 , w : 47 , h : 47  } , 
    { name : 'chili' , x : 586 ,  y : 81 , w : 53 , h : 50  } , 
    { name : 'xxxxxx' , x : 000 ,  y : 000 , w : 000 , h : 000  } , 


]

function loopGame(){
    bg.fill();
    gameFoods.forEach(f =>{
        f.fall();
        f.draw(true);
    })

    requestAnimationFrame(loopGame);
}

var bg  = new sprt(0,0,0,0,0,0);
var q = 35;
var gameFoods = [];

for(var x = 0; x < q ; x++){
    _i = Math.floor(Math.random() * foods.length)
    _x = Math.floor(Math.random() * cnv.width * 0.8)
    _y = Math.floor(Math.random() * (cnv.height / 2) - 100)

    var f = foods[_i];
    var food = new sprt(f.x  , f.y, f.w, f.h , _x , _y);
    gameFoods.push(food);
}

console.log(gameFoods)
loopGame()