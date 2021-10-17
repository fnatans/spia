function sprt( _sprite , _sx , _sy , _sw , _sh , _x, _y , _w , _h ){
    
    this.sprite = _sprite ,
    this.srcX  = _sx,
    this.srcY  = _sy,
    this.srcW = _sw, //width/largura
    this.srcH = _sh, //heigth / altura

    this.w = _w ,
    this.h = _h ,

    this.x = _x, 
    this.y = _y,
    this.g = 0.9,
    this.m = 0 , //mass / massa
    

    this.v = 0 ,
    this.sv = 15 , //scape velocity

    this.isRotating = false;
    this.rv = 2, //rotate velocity
    this.r = 0,
    this.status = Status,

    this.refresh = refresh,
    this.fill = Fill;
    this.fall = Fall;
    this.move = Move;
    this.draw = Draw;
    this.jump = Jump;
    this.bounce = Bounce;
    this.draw();

}

function refresh(){
    if(this.isRotating)
        this.r += Math.PI / 180  * this.rv;
    this.wg = this.g * this.m ; //weight (g * m) /peso 
}

function Status(){
    var s = `x: ${this.x} \ny: ${this.y}`;
    s += `\nv: ${this.v} \ng: ${this.g}`;
    s += `\nh: ${this.h} \ny+h: ${this.y + this.h}`;
    s += `\nsv: ${this.sv}`;
    s += `\nr: ${this.r}`;
    s += `\nrv: ${this.rv}`;
    s += `\nm: ${this.m}`;
    s += `\nwg: ${this.wg}`;
    return s;
}
function Fill(){
    ctx.fillStyle = '#70c5ce';
    ctx.fillRect(0,0, cnv.width, cnv.height)
}

function Fall(){

    this.v += (this.g) *  (this.wg );
    this.y += this.v;
    
    if(this.y + this.h  > (cnv.height - table.h)){

        this.y = (cnv.height - table.h) - this.h;
        if(this.sv > this.g && this.v > ((this.g) *  (this.wg ))  ){
            this.bounce();
            return;
        }
        
        this.v = 0;
        this.isRotating = false;
        this.rv = 0;
        this.sv = 15;
        
    }
        
}

function Jump(){
    
    this.v = -this.sv;
    this.sv = this.sv/2;
    this.isRotating = true;
    

}

function Bounce(){
    this.jump();
}

function Move(_x ,  _y){
    this.x += _x;
    this.y += _y;
}

function Draw(){
    this.refresh();
    if(this.isRotating  || this.r > 0  )
    {
        ctx.save();
        ctx.translate(this.x + this.w / 2 , this.y + this.h / 2);
        ctx.rotate(this.r);
        ctx.drawImage(
            this.sprite , 
            this.srcX , this.srcY ,
            this.srcW , this.srcH , 
            -this.w / 2 , -this.h /2 , 
            this.w , this.h
        );
        ctx.restore();
    }else{

        ctx.drawImage(
            this.sprite , 
            this.srcX , this.srcY ,
            this.srcW , this.srcH , 
            this.x , this.y , 
            this.w , this.h
        );
    }
      
}
