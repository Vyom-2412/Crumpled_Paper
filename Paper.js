class Paper
{
   constructor(x,y)
   {
      var options = {
          isStatic : false,
          restitution : 0.3,
          friction : 0.5,
          density : 1.2,
      }
      this.body = Matter.Bodies.circle(x,y,50,options);
      this.radius = 50;
      World.add(world,this.body);
   }
   display()
   {
      ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
   }
}