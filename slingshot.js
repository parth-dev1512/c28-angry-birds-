class Slingshot
{
    constructor(bodya, pointb){
        var options={
            bodyA:bodya,
            pointB:pointb,
            stiffness:0.05,
            length:10
            
        }
        this.sling=Matter.Constraint.create(options) 
        World.add(world,this.sling)
    }

    display()
    {
        if(this.sling.bodyA)
        {
            line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,
            this.sling.pointB.x,this.sling.pointB.y)
    
        }
    }

    azad()
    {
        this.sling.bodyA=null;
    }


}

