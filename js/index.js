$(document).ready(function () {
    console.log("Your index.js file is loaded correctly")

    $('#footer').hide();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 10) {
            $('#footer').show();
        }else {
                $('#footer').hide();
            }
        });
});