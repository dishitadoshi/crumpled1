class Paper{
  
    constructor(x,y,width,height){
        var option = { 
         
          'restitution':0.3,
            'friction':0.5,
            'density':1.2,
            isStatic : false
         
       }
        this.body = Bodies.rectangle(x,y,width,height,option); 
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        } 
        display(){
             var pos = this.body.position
            // var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
       // rotate(angle);
              rectMode(CENTER); 
              fill("brown"); 
              rect(pos.x,pos.y,this.width,this.height);
              pop();
            }
}