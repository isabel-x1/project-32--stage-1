class ComputerPlayer{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.image=loadImge("./assets/player.png");

        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        this.image(this.image,0,0,width,height);

        pop();


    }
}