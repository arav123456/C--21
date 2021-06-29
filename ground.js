class ground{
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        var option={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,option)
        World.add(world,this.body)
    }
    display(){
   var groundPos = this.body.position 
   push();
   translate(groundPos.x,groundPos.y)
   fill(128,128,128)
   
   rectMode(CENTER);
   rect(0,0,this.width,this.height);
   
   pop();

    }

}