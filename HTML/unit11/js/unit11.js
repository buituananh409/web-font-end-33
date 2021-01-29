$(document).ready(function($) {
   
    console.log($('p'));
    console.log($('.web-33'));
    console.log($('#sayHi'));
    console.log($(':input'));
    console.log($(':password'));
    //Jquery Object >< DOM object

    console.log($('#sayHi').text());
    $('#sayHello').text('web front end 33');

    console.log($('#sayHi').html());
    $('#sayHello').html('<b>Ahihi</b>');

    $('.web-33').css('font-size', '24px');

    console.log($('#myDiv').width());
    $('#myDiv').width(300);

    //$('#myDiv').remove();

    //$('#sayHi').empty();

    $('#myDiv').prepend('<a href="">Youtube prepend</a>');
    $('#myDiv').append('<a href="">Youtube append</a>');
    $('#myDiv').before('<a href="">Youtube before</a>');
    $('#myDiv').after('<a href="">Youtube after</a>');

   // $('#sayHi').addClass('class-1');
   // $('#sayHi').removeClass('class-2');

    $('#sayHi').toggleClass('class-1');
    $('#sayHi').toggleClass('class-2');

    console.log($('#sayHi').hasClass('web-33'));
    
    $('#name').click(function(){
        $(this).css('color', 'red');
    });

    $('#name').mouseenter(function(){
        $(this).css('color', 'blue');
    });

    $('#name').on('click mouseenter', function(){
        console.log(1);
        $(this).css('color', 'blue');
    });

    $(document).ready(function(){
        $('#btn1').on('click', function(){
        $(this).after('<button id="btn2">Click 2</button>');
    });
    });

    $(document).on('click', '#btn2', function(){
        alert('HI');
    });



    $(document).ready(function(){
        $('#add').on('')


    

    
});