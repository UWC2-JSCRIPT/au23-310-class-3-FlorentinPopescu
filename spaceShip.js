// 1. Create a class function SpaceShip
// - should set two properties: name and topSpeed
// - should have a method accelerate that logs to the console 
//   `${name} moving to ${topSpeed}`

class SpaceShip {
    /* creates a ship with two properies and one method */

    constructor(name, topSpeed) {
        this.name = name;
        this.topSpeed = topSpeed;
    }
    
    accelerate() {
        // option A: -use class properties directly for logout
        console.log(`${this.name} moving to ${this.topSpeed}`);
 
        // Option B: -unpack class properties into a local-scope object {name, topSpeed} and log it out
        /* 
            let {name, topSpeed} = this;
            console.log(`${name} moving to ${topSpeed}`);
        */
    }  
}

// 2. Call the constructor with a couple ships, 
// and call accelerate on both of them.

// instantiate new spaceships 
const Ship_A = new SpaceShip('Millennium Falcon', 'Light Speed');
const Ship_B = new SpaceShip('Star Treck', 'Ridiculous Speed');
const Ship_C = new SpaceShip('The Eagle 5', 'Ludicrous Speed');

// call class method onclass instances
Ship_A.accelerate();
Ship_B.accelerate();
Ship_C.accelerate();
