/* global $, alert , console */
$(function () {
    'use strict';
    
    //adjust header height to window height
    var myHeader =  $('.header'),
        mySlider = $('.bxslider');
    
    myHeader.height($(window).height());
    
    
    //adjust header height to window height whene resize window too
    $(window).resize(function () {

        myHeader.height($(window).height());

        //adjust slider list item center
        mySlider.each(function () {
            $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2) ;
        });
    });

    // navbar background on scrolling
    $(window).scroll(function () {

        var navbar = $('.navbar');

        $(window).scrollTop() > $('.header').height()-100 ? navbar.addClass('activeNav') : navbar.removeClass('activeNav');
    });

    //add and remove class active to links
    $('.navbar .links li a').on('click', function () {
        $(this).parent().addClass('active').siblings().removeClass('active');   
    });

    //toggle btn navbar
    $('.navbar #btn').on('click', function () {
        $('.navbar-links ul').slideToggle();
    });

    //adjust slider list item center
    mySlider.each(function () {
        $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2) ;
    });

    //trigger bx slider 
    mySlider.bxSlider({
        pager: false
    });

    //smooth scroll to div dynamically
    $('.links li a').on('click', function () {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top 
        }, 1000);
    });

    //sync navbar links with section
    $(window).scroll(function () {

        //.section class occures in all sections in html
        $('.syncSection').each(function () {

            if($(window).scrollTop() > $(this).offset().top) {

            //get the id of current section
            var currentId = $(this).attr('id');

            //remove active from all a in navbar
            $('.navbar li').removeClass('active');

            //search for a that its data value == the current id and add active
            $('.navbar li a[data-value = "'+ currentId +'"]').parent().addClass('active');

            }

            if($(window).scrollTop() == 0) {

                //remove active from all a in navbar
                $('.navbar li').removeClass('active');

                //search for a that its data value == home
                $('.navbar li a[data-value = "home"]').parent().addClass('active');
            }

        });

    });

    //our auto slider code
    //self involk function
    (function autoSlider() {
        $('.slider .active').each(function () {
            if (!$(this).is(':last-child')) {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    autoSlider();
                });
            } else {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass('active');
                    $('.slider div').eq(0).addClass('active').fadeIn();
                    autoSlider()
                });
            }
        });
    }());

    //trigger mixitup
    window.mixitup('#Container');

    //adjust shuffle links   
    $('.shuffle li').on('click', function () {
        $(this).addClass('selected').siblings().removeClass('selected');
    });

    //trigger nicescroll
    $('html').niceScroll({
        cursorcolor: '#1abc9c' ,
        cursorwidth: '10px' ,
        cursorborder:'none' 
    });

    //trigger scroll-up btn
    var scrollButton = $("#scroll-up");

    //show and hide the button
    $(window).scroll(function(){

        if($(this).scrollTop()>=700){
            scrollButton.show();
        }else{
            scrollButton.hide();
        }
    });

     //click on button to scroll up
     scrollButton.click(function(){
        $("html,body").animate({scrollTop:0},600);
    });


 
});



