class ball{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.6,
            friction:0,
            density:1.2
     
        }   
       this.x=x
       this.y=y
       this.r=r
       this.body=Bodies.circle(this.x,this.y,(this.r-20)/2,options) 
       World.add(world,this.body)
    }
    display(){
      var ballPos = this.body.position
      push();
      translate(ballPos.x,ballPos.y)
      fill(255,0,255)
      ellipse(0,0,this.r,this.r)  
      pop(); 
    }
}