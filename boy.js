class Boy {
    constructor() {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(200,500,100,400,options);
      this.width = 100;
      this.height = 400;
      this.image = loadImage("boy.png");
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