/*
    Assignment 05
	Hyun-jun Lee 0770897
*/

$(document).ready(function () {
	// your code here

	class ContentItem {
		// animalType;
		constructor(id, name, description, genre) {
			this.carId = id;
			this.carName = name;
			this.carDes = description;
			this.carGenre = genre;
		}
	}
	
	//updateContentItem

	//make 5 contents items
	let Ford = new ContentItem(0, "F-150", "Strong car", "SUV");
	let BMW = new ContentItem(1, "5 Series", "Expensive car", "Sedan");
	let Audi = new ContentItem(2, "name", "exp", "genre");
	let Benz = new ContentItem(3);
	let Toyota = new ContentItem(4);

	let FordString = `${Ford}`;
	let BMWString = `${BMW}`;

	console.log(Ford);
	//console.log(FordString);
	console.log(BMW);
	//	console.log(BMWString);
	console.log(ContentItem);

	console.log(Ford["carId"], Ford.carName, Ford.carDes, Ford.carGenre);

	for (const property in Ford) {
		console.log(`Property: ${property} / and value: ${Ford[property]}`);
	}


});
