$(function () {
    $('li:first').addClass('active');
    $('a').click(function() {
        var index = $(this).index();
        $('li').removeClass('active');
        (this).addClass('active')
    })
});

$(function() {
    $('span').click(function () {
        $('#change').html('Music for everyone').css({fontSize:25, paddingTop:40})
    });
});

$(function () {
    $('button').click(function () {
        $('#perfect').text('That is perfect!')
        
    });
});


