class Polygon{
    constructor(x,y,width,height) {
var options = {
    restitution: 0.8,
    friction: 1.0,
    density:1.0

}

this.polygon = loadImage("polygon.png")

    
    this.body = Bodies.polygon(x,y,width,height,options);
    World.add(world, this.body);
}
display(){
 image(this.polygon,polygon.position.x,polygon.position.y,40,40)
}
}