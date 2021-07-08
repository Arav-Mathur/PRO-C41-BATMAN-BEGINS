class Drops {
    constructor(x,y){
        var options = 
        {friction: 0.001,
        restitution: 0.1}
        this.drops = Bodies.circle(x,y,5,options)
        this.radius = 5
        World.add(world,this.drops)
    }
    display(){
        var pos = this.drops.position
        fill("blue")
        ellipseMode(CENTER)
        ellipse(pos.x,pos.y,this.radius,this.radius)

    }
    update(){
        if(this.drops.position.y >height){
            Body.setPosition(this.drops,{x:random(0,400),y:0})
        }
    }
}