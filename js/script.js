$(function () {

    var $tbody = $('tbody'); // reference <tbody> element

    $.getJSON("MCUheros.json").done((data) => {
        // jQuery.each of the players in the array
        $.each(data.heros, function (key, val) {
            console.log("data key: ", key, " and data value: ", val);

            var $row = $('<tr></tr>'); // Create their row
            // populate data
            $row.append($('<td></td>').text(val.fname));
            $row.append($('<td></td>').text(val.lname));
            $row.append($('<td></td>').text(val.heroName));
            $row.append($('<td></td>').text(val.species));
            $row.append($('<td></td>').text(val.gender));

            $tbody.append($row); // Add row to the tbody

            // rows.push({ // Create rows array
            //     person: person, // Person object
            //     $element: $row // jQuery object: row
            // });
        });
    });

});