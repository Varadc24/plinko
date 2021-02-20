class Bin {
    constructor (x,y,w,h){
        var option = {
        isStatic:true
        }
        this.body = bodies.rectangle(x,y,w,h,option);
        this.w = w;
        this.h = h;
        world.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        Fill("white");
        rect(pos.x,pos.y,this.w,this.y);
    }
}
