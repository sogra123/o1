class paper{
    constructor( x,y){
        var options={
            isstatic:false,
            restitution:0.3,
            density:1.2,
            friction:0.5,
        }
        this.body=Bodies.circle( x,y,20,options);
        World.add( world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        fill( "pink");
        ellipseMode( RADIUS);
        ellipse(pos.x,pos.y,20)

        pop();
    }

}