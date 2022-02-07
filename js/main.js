// WEB303 Assignment 2
// Hyun-jun Lee (0770897)

$(function () {
	
	let xhr = new XMLHttpRequest;
	let conBox = document.getElementById('content');

	$('#prospect').click(function () {
		$("div#content").html("").hide().fadeIn();
		
		xhr.open('GET', 'prospect.html', true);
		xhr.onload = function () {
		if ( xhr.status === 200 ){
			conBox.innerHTML = xhr.responseText;
			}
		}
		xhr.send(null);
	});

	$('#convert').click(function () {
		xhr.open('GET', 'convert.html', true);
		$("div#content").html("").hide().fadeIn();
	
		xhr.onload = function () {
		if ( xhr.status === 200 ){
			conBox.innerHTML = xhr.responseText;
			}
		}
		xhr.send(null);
	});

	$('#retain').click(function () {
		xhr.open('GET', 'retain.html', true);
		$("div#content").html("").hide().fadeIn();

		xhr.onload = function () {
		if ( xhr.status === 200 ){
			conBox.innerHTML = xhr.responseText;
			}
		}
		xhr.send(null);
	});

});
