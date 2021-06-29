class dustbin{
    constructor(x,y){
        var option={
           isStatic:true 
        }
       this.x=x
       this.y=y
       this.width=200
       this.height=213
       this.thikness=20
       this.bottomBody=Bodies.rectangle(this.x,this.y,this.width,this.thikness,option) 
       this.leftBody=Bodies.rectangle(this.x-this.width/2,this.y-this.height/2,this.thikness,this.height,option) 
       this.rightBody=Bodies.rectangle(this.x+this.width/2,this.y-this.height/2,this.thikness,this.height,option) 

       World.add(world,this.bottomBody)
       World.add(world,this.leftBody)
       World.add(world,this.rightBody)

    }
    display(){
        var bottomPos=this.bottomBody.position
        var leftPos=this.leftBody.position
        var rightPos=this.rightBody.position

        push();
        translate(leftPos.x,leftPos.y)
        rectMode(CENTER)
        strokeWeight(4)
        fill(255)
       
        rect(0,0,this.thikness,this.height)
        pop();

        push();
        translate(rightPos.x,rightPos.y)
        rectMode(CENTER)
        strokeWeight(4)
        fill(255)
       
        rect(0,0,this.thikness,this.height)
        pop();

        push();
        translate(bottomPos.x,bottomPos.y)
        rectMode(CENTER)
        strokeWeight(4)
        fill(255)
       
        rect(0,0,this.width,this.thikness)
        pop();
    }
}