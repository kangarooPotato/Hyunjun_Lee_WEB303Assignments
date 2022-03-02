/*
    Assignment 05
	Hyun-jun Lee 0770897
*/

$(document).ready(function () {
    // your code here
	
	class ContentItem {
    // animalType;
    constructor(id, name, description, category, genre) {
        this.conId = id;
		this.conName = name;
		this.conDes ;
        this.conCat = category;
		this.conGen = 
    }
    toString() {
        return "This animal is a " + this.animalType;
    }
}


let rabbit = new Animal("Rabbit","long");
let rabbitString = `The animal says: ${rabbit}`;
// note: console.log doesn't invoke toString
console.log(rabbit);
console.log(rabbitString);
	
	
	
	
	
});


