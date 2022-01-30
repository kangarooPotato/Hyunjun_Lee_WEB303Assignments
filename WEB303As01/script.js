/*
	WEB 303 Assignment 1 - jQuery
	{Hyun-jun, Lee 0770897}
*/

$(document).ready(function () {

	$('fieldset').change(function () {

		//console.log('fieldset Changed');

		let $salaryVal = $('#yearly-salary').val();
		let $percnetVal = $('#percent').val();
		let $amount = $salaryVal * $percnetVal / 100;

		console.log('$salaryVal * $percnetVal / 100');

		$('span#amount').text('$' + $amount.toFixed(2));

	});
});
