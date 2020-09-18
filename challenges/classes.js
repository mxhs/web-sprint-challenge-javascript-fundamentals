// 1. Copy and paste your prototype in here and refactor into class syntax.

class Cuboid{
    constructor (attribute){
    this.length = attribute.length;
    this.width = attribute.width;
    this.height = attribute.height;
    }

    volume(length, width, height){
        return this.length * this.width * this.height;
    }

    surfaceArea(length, width, height){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
    }
}

const cuboidOne = new Cuboid({
    length: 4, 
    width: 5, 
    height: 5
})
    

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboidOne.volume()); // 100
console.log(cuboidOne.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends Cuboid{
    constructor(attribute){
        super(attribute);
    }
}

const cubeOne = new CubeMaker({
    length: 2,
    width: 2,
    height: 2,
})

console.log(cubeOne.volume()); 
console.log(cubeOne.surfaceArea());
// Formulas still apply but can be simplified to since all sides are same length:
//Surface Area =6length^2
//Volume = length^3