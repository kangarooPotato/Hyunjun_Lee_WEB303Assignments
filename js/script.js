// WEB303 Assignment 3
// Hyun-jun Lee (0770897)

let teamJson = $.getJSON("team.json");

let teamAjax = $.ajax({
	url: 'team.json',
	type: 'GET',
	datatype: 'json',
	success: $('#team').append(`<div>Loding...<div>`)
});

$(function () {
	console.log("ready!");

//	teamJson.done(function (data) {
//		$.each(data.members, function (key, val) {
//			console.log("data key: ", key, " and data value: ", val);
//
//		$('#team').append(`<h2 class="name">${val.name}</h2>
//                <h5 class="position">${val.position}</h5>
//                <p class="bio">${val.bio}</p></br>
//            </div>`);
//		});
//	});

	setTimeout(function () {
		teamAjax.done(function (data) {
			$('#team').html("");

			$.each(data.members, function (key, val) {
				console.log("data key: ", key, " and data value: ", val);

				$('#team').append(`<h2 class="name">${val.name}</h2>
                <h5 class="position">${val.position}</h5>
                <p class="bio">${val.bio}</p>
            </div></br>`);
			});
		});

	}, 3000);

});
