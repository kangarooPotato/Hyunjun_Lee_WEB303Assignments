// WEB303 Assignment 3
// Hyun-jun Lee (0770897)

let teamJson = $.getJSON("team.json");

let teamAjax = $.ajax({
	url: "team.json",
	datatype: 'json',
	type: "GET",
	success: function () {
		$('#team').append("Loding...");
		console.log('success');
			  }
});

$(function () {

//	teamJson.done(function (data) {
//        
//        $.each(data.members, function (key, val) {
//            console.log("data key: ", key, " and data value: ", val);
//
//            $('#team').append(`<h2 class="name">${val.name}</h2>
//                <h5 class="position">${val.position}</h5>
//                <p class="bio">${val.bio}</p></br>
//            </div>`);
//        });
//    });
	
teamAjax.done(function (data) {
	
	$.each(data.members, function (key, val) {

            $('#team').append(`<h2 class="name">${val.name}</h2>
                <h5 class="position">${val.position}</h5>
                <p class="bio">${val.bio}</p>
            </div></br>`);
        });
	

	});
});