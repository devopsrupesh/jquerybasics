// $('h1').hide(1000);   //1000 = 1ms it will hide 
// $('h1').hide('fast');
// $('h1').hide('slow');

//Show and Hide method
//start
$('#hide').click(function () {
    $('h1').hide(1000);   //duration is optional
});

//first hide the message then after show the alert
$('#hide').click(function () {
    $('h1').hide(1000, function () {
        alert('successfully hide the message');
    })
});

$('#show').click(function () {
    $('h1').show(1000);
});
//end

// fadeIN and fadeOUT animation
//start
$('#fadeIn').click(function () {
    $('h1').fadeIn(1000);
});

$('#fadeOut').click(function () {
    $('h1').fadeOut(1000);
});
//end

//slideUp and Slide Down
//start

$('#slideUp').click(function () {
    $('h1').slideUp(1000);
});
$('#slideDown').click(function () {
    $('h1').slideDown(1000);
});

$('#toggle').click(function () {
    $('h1').slideToggle(1000);
});

$('#fadeToggle').click(function () {
    $('h1').fadeToggle(1000);
})
//end

//animate method (declare css properties)
//start
$('#animate').click(function () {
    $('h1').animate({ 'background-color': 'blue', 'color': 'white', 'height': '100px', 'left': '100px' }, 1000)
});

//end


