class Dustbin {
    constructor (x, y){
        var options = { 
            isStatic: false,
            'restitution':0,
            'friction':1,
            'density':0.1

        }
        this.body = Bodies.rectangle(x, y, 200,200);
        this.width = 200;
        this.height = 200;
        this.image=loadImage("dustbingreen.png");
        World.add(world, this.body);


    }

    display(){
        rectMode(CENTER);
        fill(255);
        image(this.image,this.body.position.x, this.body.position.y);

    }
}