class Paper{
    constructor(x,y,radius) {
        var options = {
            restitution:0.3,
            density:1.2,
            friction:1.3
        }
        this.body = Bodies.circle(50,650,20,options);
        World.add(world, this.body);
      }
      display(){
        push()
        fill("red")
        var pos =this.body.position;
        translate (pos.x, pos.y)
        rotate (this.body.angle)
        rectMode(CENTER);
        circle(0,0,40,40);
        pop ()
     
    }     
}
