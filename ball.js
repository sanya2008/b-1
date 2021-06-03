class ball{
    constructor(x,y,r)
{
    var options={
        isStactic:false,
        restitution:1.5,
        friction:0.5,
        density:2
    }

    this.x=x;
    this.y=y;
    this.r=r
    this.body=Bodies.circle(x,y,r/2,options)
    this.image=loadImage("ball-removebg-preview.png")
    World.add(world,this.body)
}
display()
{
    
   var paperpos=this.body.position;
   push ()
   translate (paperpos.x,paperpos.y)
   imageMode(CENTER)
   strokeWeight(3);
  image(this.image,0,0,this.r,this.r)
   pop ()


}
}