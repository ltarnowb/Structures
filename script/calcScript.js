$(function(){
    let dropdown = $('#shape-drop');

    dropdown.empty();

    dropdown.append('<option selected="true" disabled>Choose Shape</option>');
    dropdown.prop('selectedIndex', 0);

    const url = "/Structures/data/steel/angleREF.json";

    // Populate dropdown with list of provinces
    $.getJSON(url, function (data) {
    $.each(data, function (key, entry) {
        dropdown.append($('<option></option>').attr('value', entry.size).text(entry.size));
    })
    });
});
