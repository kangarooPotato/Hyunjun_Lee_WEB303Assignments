
$(function(){
    $.ajax({
        url: "characters.json",
        dataType: "json",
        type: "get",
        success: function (data) {
            console.log('we win');
            $(data).each(function (key, val) {
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