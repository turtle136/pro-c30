class Ground{

    constructor(){
        var ground_options={
            isStatic : true
          }
        
          this.ground = Bodies.rectangle(450,390,900,20,ground_options)
          World.add(world,this.ground);
    }
    display(){
        push();
        noStroke(); //if this is a thing im pretty sure noFill is a thing
        fill(188,67,67);
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,900,20);
        pop();
    }
}