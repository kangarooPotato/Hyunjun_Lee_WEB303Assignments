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
		toString() {
			return `<div id="content-item-${car.carId}"><h4>${car.carName}</h4><p>${car.carDes}</p><div>${car.carGenre}</div></div>`;
		}
	}
	
	//updateContentItem

	//make 5 contents items
	let Ford = new ContentItem(0, "F-150", "Strong car", "SUV");
	let BMW = new ContentItem(1, "5 Series", "Expensive car", "Sedan");
	let Audi = new ContentItem(2, "A7", "Cool car", "Fastback");
	let Benz = new ContentItem(3, "G-Class", "Big car", "SUV");
	let Volvo = new ContentItem(4, "IRON KNIGHT", "Nice Sports truck", "Truck");

//	let FordString = `${Ford}`;
//	let BMWString = `${BMW}`;
//	let AudiString = `${Audi}`;
	
	console.log(Ford);
	//console.log(FordString);
	console.log(BMW);
	//	console.log(BMWString);
	console.log(Audi);
	
	//console.log(ContentItem); 

	console.log(Ford["carId"], Ford.carName, Ford.carDes, Ford.carGenre);

	for (const property in Ford) {
		console.log(`Property: ${property} / and value: ${Ford[property]}`);
	};
	
	function add(car){
		//console.log(car.carName);
	
	$('#content-item-list').append(`<div id="content-item-${car.carId}">
				<h4>${car.carName}</h4>
                <p>${car.carDes}</p>
                <div>${car.carGenre}</div></div>`);
 	};
	
	add(BMW);
	add(Ford);
	add(Audi);
	add(Benz);
	add(Volvo);
	
	for(var i=0; i<5; i++){
	$(`#content-item-${i}`).css({"border": "solid #929ca4 1px", "width": "300px", "padding":"10px", "margin": "10px"});
	};
	

	
});