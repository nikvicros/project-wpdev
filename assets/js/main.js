$(function () {

    //Parallax
    var $window = $(window);
    $('section[data-type="background"]').each(function () {
        var $bgobj = $(this);
        $(window).scroll(function () {

            var yPos = -($window.scrollTop() / $bgobj.data('speed'));
            var coords = '50% ' + yPos + 'px';

            $bgobj.css({backgroundPosition: coords})
        });
    });

    // Modal
    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').focus()
    })

});