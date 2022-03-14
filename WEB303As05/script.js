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
		
		//updateContentItem
		updateContentItem(id, name, description, genre) {
			if (id == this.id && (name!=null || description!=null || genre!=null)){
					this.carName = name;
					this.carDes = description;
					this.carGenre = genre;
				}
		}
		
		toString() {
			return `<div class="dontent-itme-wrapper" id="content-item-${car.carId}">
						<h2>${car.carName}</h2>
						<p>${car.carDes}</p>
						<div>${car.carGenre}</div>
					</div>`;
		}
	}
	
	let carArray = [];

	//make 5 contents items
	carArray[1] = new ContentItem(0, "F-150", "Strong car", "SUV");
	carArray[2] = new ContentItem(1, "5 Series", "Expensive car", "Sedan");
	carArray[3] = new ContentItem(2, "A7", "Cool car", "Fastback");
	carArray[4] = new ContentItem(3, "G-Class", "Big car", "SUV");
	carArray[5] = new ContentItem(4, "IRON KNIGHT", "Nice Sports truck", "Truck");

	
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
	
	$('#content-item-list').append(`<div class="content-item-wapper" id="content-item-${car.carId}">
				<h2>${car.carName}</h2>
                <p>${car.carDes}</p>
                <div>${car.carGenre}</div></div>`);
 	};

	
//	for(var i=0; i<5; i++){
//	$(`#content-item-${i}`).css({"border": "solid #929ca4 1px", "width": "300px", "padding":"10px", "margin": "10px"});
//	};
	
	var i = 0;
	carArray.forEach(carElement =>{
		$('#content-item-list').append(carElement + "").css("border","10px");
	});

	
});