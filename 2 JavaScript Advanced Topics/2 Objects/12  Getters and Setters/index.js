
function Circle(radius) {

    this.radius = radius;


    let defaultLocation = { x: 0, y: 0 };

    

    this.draw = function () {

      
        console.log('draw');
    };

    //first arguement is the object we want to add the attribute to
    //second is name of our property
    Object.defineProperty(this, 'defaultLocation', {
        get: function(){
            return defaultLocation;
        },
        set: function(value){
            /*  because we are using a function
                in this function, we can perform 
                some validation for this value before setting the 
                default location variable to it             
            */

                if (!value.x || !value.y)
                    throw new Error("Invalid location.");

            defaultLocation = value;
        }
    });
}

const circle = new Circle(10);
circle.defaultLocation = 1;
