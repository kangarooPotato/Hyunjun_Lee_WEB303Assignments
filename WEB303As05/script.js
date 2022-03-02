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

	//make 5 contents items
	let F150 = new ContentItem("0", "F150", "strong car", "SUV");
	let content1 = new ContentItem("id1","name1","exp1","genre1");
	let content2 = new ContentItem("id2","name2","exp2","genre2");
	let content3 = new ContentItem("id3","name3","exp3","genre3");
	let content4 = new ContentItem();
	
	let F150String = `${F150}`;
	let content1String = `${content1}`;
	// note: console.log doesn't invoke toString
	
//	console.log(F150);
//	console.log(F150String);
//	console.log(content1);
//	console.log(content1String);
	//console.log(ContentItem);
	
	console.log(F150["carId"], F150.carName, F150.carDes, F150.carGenre);
	
	for (const property in F150){
		console.log(`Property: ${property} / and value: ${F150[property]}`);
	}


});
