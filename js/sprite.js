function sprt(_sx , _sy , _w , _h , _x, _y ){
    
    this.srcX  = _sx,
    this.srcY  = _sy,
    this.w = _w,
    this.h = _h,    
    this.x = _x,
    this.y = _y,
    this.g = 0.15,
    this.v = 0 ,
    this.r = 0; 

    this.fill = Fill;
    this.fall = Fall;
    this.move = Move;
    this.draw = Draw;
    this.bounce = Bounce;
    this.draw();

}

function Fill(){
    ctx.fillStyle = '#70c5ce';
    ctx.fillRect(0,0, cnv.width, cnv.height)
}

function Fall(){

    this.r += Math.PI / 180  * this.v;

    //ctx.translate(1 , 11);
    //ctx.rotate(10 , 10)
    //ctx.drawImage(img, -width / 2, -height / 2, width, height);
    //ctx.rotate(-10 * Math.PI / 180);
    //ctx.translate(-this.x, -this.y);

    //ctx.save();
    //ctx.translate(this.x + this.w / 2 , this.y + this.h / 2);
    //ctx.rotate(this.r);
    //ctx.restore();
    
    if(this.y + this.h >= cnv.height){
        if(this.v <= 1)
            return;

        this.bounce();
    }
    
    //this.r++;
    this.v += this.g;
    this.y += this.v;
}

function Move(_x ,  _y){
    this.x += _x;
    this.y += _y;
}

function Draw(_rotate){

    if(_rotate && this.v > 1)
    {
        ctx.save();
        ctx.translate(this.x + this.w / 2 , this.y + this.h / 2);
        ctx.rotate(this.r);
        ctx.drawImage(
            sprites , 
            this.srcX , this.srcY ,
            this.w , this.h , 
            -this.w / 2 , -this.h /2 , 
            this.w , this.h
        );
        ctx.restore();
    }else{

        ctx.drawImage(
            sprites , 
            this.srcX , this.srcY ,
            this.w , this.h , 
            this.x , this.y , 
            this.w , this.h
        );
    }

   
  
      
}


function Bounce(){
    this.y -=  (this.v * 3) ;
    this.v = this.v / 3;
}
