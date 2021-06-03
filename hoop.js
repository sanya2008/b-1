class hoop {
    constructor(x,y,w,h){
        
    var option={
        isStatic:true,
        
       
    }
    
    this.w=w
    this.h=h
    this.body=Bodies.rectangle(x,y,w,h,option)
    this.image=loadImage("hoop-removebg-preview.png")
    World.add(world,this.body)
    
    
    }
    display(){
        
        var pos=this.body.position
      imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,this.w,this.h)
    }
}
