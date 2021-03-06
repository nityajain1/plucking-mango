class Mango {
    constructor(x,y) {
      var options = {
          'isStatic':true,
          'restitution':0,
          'friction':1,
          
      }
      this.body = Bodies.circle(x,y,25, options);
      this.x = x;
      this.y = y;
      this.r = 25;
      this.image = loadImage("mango.png");
     
      World.add(world, this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
       
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
  }
  