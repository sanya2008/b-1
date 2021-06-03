class lines {
    constructor(x,y,w,h){
    var option={
        isStatic:true,
    }
    this.w=w
    this.h=h
    this.body=Bodies.rectangle(x,y,w,h,option)
    World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        rectMode(CENTER)
        fill ("red")
        rect(pos.x,pos.y,this.w,this.h)
    }
}