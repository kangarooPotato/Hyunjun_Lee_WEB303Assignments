$(function () {
    $.ajax({
        url: "characters.json",
        dataType: "json",
        type: "get",
        success: function (data) {
            $(data.MCU).each(function (key, val) {
                $('#datathead').append(`
                <tr>
                    <td>${val.heroName}</td>
                    <td>${val.species}</td>
                    <td>${val.gender}</td>
                    <td>${val.fname}</td>
                    <td>${val.lname}</td>
                </tr>`);
            });
        },
        error: function () {
             console.log('error');
        }
    });
});