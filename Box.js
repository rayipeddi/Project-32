class Block{
    constructor(x, y, width, height, angle) {
        var options = {
            'isStatic': false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visiblity = 255
        World.add(world, this.body);
      }
      score(){
        if(this.Visiblity<0 && this.Visiblity > -150){
          score++
        }
      }
      display(){
        if(this.body.speed < 3){
          push();
          
          translate(this.body.position.x, this.body.position.y);
          fill(0,255,0)
          tint(255,this.Visiblity)
          rect(0, 0, this.width, this.height);
          pop();
                }
        else{
          World.remove(world,this.body)
        push()
        this.Visiblity = this.Visiblity - 5;
        pop()
      }
    }
}