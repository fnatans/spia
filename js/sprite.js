function sprt(_sx , _sy , _w , _h , _x, _y ){
    
    this.srcX  = _sx,
    this.srcY  = _sy,
    this.w = _w, //width/largura
    this.h = _h, //heigth / altura
    this.x = _x, 
    this.y = _y,

    this.g = 0.98,
    this.v = 0 ,
    this.sv = 15 , //scape velocity
    this.rv = 15, //rotate velocity
    this.r = 0,
    this.status = Status,

    this.fill = Fill;
    this.fall = Fall;
    this.move = Move;
    this.draw = Draw;
    this.jump = Jump;
    this.bounce = Bounce;
    this.draw();

}

function Status(){
    var s = `x: ${this.x} \ny: ${this.y}`;
    s += `\nv: ${this.v} \ng: ${this.g}`;
    s += `\nh: ${this.h} \ny+h: ${this.y + this.h}`;
    s += `\nsv: ${this.sv}`;
    s += `\nr: ${this.r}`;
    return s;
}
function Fill(){
    ctx.fillStyle = '#70c5ce';
    ctx.fillRect(0,0, cnv.width, cnv.height)
}

function Fall(){

    
    this.v += this.g;
    this.y += this.v;
    this.r += Math.PI / 180  * this.rv;

    if(this.y + this.h  > cnv.height){

        this.y = cnv.height - this.h;
        if(this.sv > this.g && this.v > this.g  ){
            this.bounce();
            return;
        }
        
        this.v = 0;
        this.sv = 15;
        
    }
        
}

function Jump(){
    this.v = -this.sv;
    this.sv = this.sv/2;
}

function Bounce(){
    this.jump();
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
