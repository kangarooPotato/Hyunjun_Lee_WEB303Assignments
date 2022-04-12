$(function () {

    var $tbody = $('tbody'); // reference <tbody> element
    var $search = $('#filter-search'); // Get input
    var cache = [
        // example of how the cache gets built
        // {
        //     element: $row0Reference,
        //     text: "magnus"
        // },
        // {
        //     element: $row1Reference,
        //     text: "ding"
        // }
    ]; // Create array

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

            cache.push({ // Create rows array
                element: $row, // Reference to the row element
                text: val.fname.trim().toLowerCase() // The text we're searching against (which in this case is first name)
            });
        });
    });
    // $imgs.each(function () { // Each img
    //     cache.push({ // Add to cache
    //         element: this, // This image
    //         text: this.alt.trim().toLowerCase() // Its alt text
    //     });
    // });
    function filter() {
        var query = this.value.trim().toLowerCase(); // Get query
        if (query) { // If there’s a query
            cache.forEach(function (marvleHeros) { // Each cache entry
                var index = 0; // Set index to 0
                index = marvleHeros.text.indexOf(query); // Is text in there?
                if (index != -1) { // we found the string in their first navs.element.addClass("found-first-name"); // we will apply colours based on this class
                }
                else { // player firs tname doesn't have the query string, make sure it's not higlighted
                    marvleHeros.element.removeClass("found-first-name")
                }
            });
        }
    }
    if ('oninput' in $search[0]) {
        // Use input event to call filter()
        $search.on('input', filter);
    } else { // Otherwise
        // Use keyup event to call filter()
        $search.on('keyup', filter);
    }
});

