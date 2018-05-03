/*Fixed-Header*/
$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
        $('.header').addClass("fixed-header").css({'margin-top':'-20px'});
    }
    else{
        $('.header').removeClass("fixed-header").css({'margin-top':'0'});
    }
});

$(document).ready(function() {


    /*Hamburger*/
    $('.hamburger').click(function(){
        $(this).toggleClass('open');
    });
    var flag = {};
    $(function() {
        $('.javascript').each(function() {
            eval($(this).text());
        });
    });
    $( "#book" ).animate({
        opacity: 0.25,
        left: "+=50",
        height: "toggle"
    }, 5000, function() {
        // Animation complete.
    });
    $("#btn-slide").click(function(){
        $("#test-slide").animate({
            width: "toggle",
            height: 20
        }, 1200, function() {});
    });


    /*Brands*/
    $('.brands').slick({
        infinite: true,
        arrows: false,
        dots: true,
        initialSlide: 1,
        slidesToShow: 1,
        slidesToScroll: 1
    });


    /*Fix Form*/
    /*show*/
    $(function(f){
        var element = f('#modal-form-btn');
        f(window).scroll(function(){
            element['fade'+ (f(this).scrollTop() > 800 ? 'In': 'Out')](500);
        });
    });
    /*hide*/
    $(document).ready(function() {
        var socialFloat = document.querySelector('#modal-form-btn');
        var footer = document.querySelector('footer');
        function checkOffset() {
            function getRectTop(el){
                var rect = el.getBoundingClientRect();
                return rect.top;
            }
            if((getRectTop(socialFloat) + document.body.scrollTop) + socialFloat.offsetHeight >= (getRectTop(footer) + document.body.scrollTop) - 10)
                socialFloat.style.position = 'absolute';
            if(document.body.scrollTop + window.innerHeight < (getRectTop(footer) + document.body.scrollTop))
                socialFloat.style.position = 'fixed'; // restore when you scroll up
        }
        document.addEventListener("scroll", function(){
            checkOffset();
        });
    });


    /*Fix Call*/
    /*show*/
    $(function(f){
        var element = f('#modal-call-btn');
        f(window).scroll(function(){
            element['fade'+ (f(this).scrollTop() > 800 ? 'In': 'Out')](500);
        });
    });
    /*hide*/
    $(document).ready(function() {
        var socialFloat = document.querySelector('#modal-call-btn');
        var footer = document.querySelector('footer');
        function checkOffset() {
            function getRectTop(el){
                var rect = el.getBoundingClientRect();
                return rect.top;
            }
            if((getRectTop(socialFloat) + document.body.scrollTop) + socialFloat.offsetHeight >= (getRectTop(footer) + document.body.scrollTop) - 10)
                socialFloat.style.position = 'absolute';
            if(document.body.scrollTop + window.innerHeight < (getRectTop(footer) + document.body.scrollTop))
                socialFloat.style.position = 'fixed'; // restore when you scroll up
        }
        document.addEventListener("scroll", function(){
            checkOffset();
        });
    });

    /*Fix Review*/
    /*show*/
    $(function(f){
        var element = f('#modal-review-btn');
        f(window).scroll(function(){
            element['fade'+ (f(this).scrollTop() > 100 ? 'In': 'Out')](500);
        });
    });
    /*hide*/
    $(document).ready(function() {
        var socialFloat = document.querySelector('#modal-review-btn');
        var footer = document.querySelector('footer .logo');
        function checkOffset() {
            function getRectTop(el){
                var rect = el.getBoundingClientRect();
                return rect.top;
            }
            if((getRectTop(socialFloat) + document.body.scrollTop) + socialFloat.offsetHeight >= (getRectTop(footer) + document.body.scrollTop) - 10)
                socialFloat.style.position = 'absolute';
            if(document.body.scrollTop + window.innerHeight < (getRectTop(footer) + document.body.scrollTop))
                socialFloat.style.position = 'fixed'; // restore when you scroll up
        }
        document.addEventListener("scroll", function(){
            checkOffset();
        });
    });

    /*Modal blocks*/
    $('.btn-modal-forms').on('click', function() {
        var role = $(this).attr('role');
        var currentFormID = $(this).attr('data-target');//fixed-form
        var anotherForms = $('.fixed-form').not(currentFormID);

        if (role == 'clicked') {
            $('.fixed-form').modal('hide');
            $(this).removeAttr('role');
            return false;
        }

        $(anotherForms).modal('hide');
        $(currentFormID).modal('show');

        $('.btn-modal-forms').removeAttr('role');
        $(this).attr('role', 'clicked');
        return false;
    });

    /*Slider reviews*/
    var $slider=$("#slider-reviews");
    var slideLength = $("#slider-reviews > .slide-review").length-1;
    var is3D=false;
    $(".key").mousedown(function(){
        if($(this).hasClass("ctrl")){
            if($(this).hasClass("active")) is3D = true;
            $("#slider-reviews").removeClass("_3D");
        }
        $(this).addClass("active");
    }).mouseup(function(){
        if($(this).hasClass("down") || $(this).hasClass("right")) nextSlide();
        if($(this).hasClass("up") || $(this).hasClass("left")) prevSlide();
        if($(this).hasClass("ctrl active")){
            if(is3D){
                $(this).removeClass("active");
                $("#slider-reviews").addClass("_3D");
                is3D=false;
            }
        }else{
            $(this).removeClass("active");
        }
    });

    function nextSlide() {
        lastElem().addClass("active");
        $slider.addClass("transfomer");
        setTimeout(function(){
            var $slicedSlide = $('.slide-review').slice(slideLength);

            $slider.prepend($slicedSlide);
            $(document).find(".slide-review.active").removeClass("active");
            $slider.removeClass("transfomer");
        },300);
    };

    function prevSlide(){
        var $slicedSlide = $('.slide-review').slice(0,1).addClass("active");
        $slider.append($slicedSlide);
        setTimeout(function(){

            lastElem().removeClass("active");
        },50);
    };

    function lastElem(){
        return $("#slider-reviews > .slide-review").last();
    };


    /*Appliance Type Page Top Slider*/
    $('.applience-type-slider-top').slick({
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical:true,
        autoplay: true,
        autoplaySpeed: 2000
    });

    /*Appliance Type Page Middle Slider*/
    $('.type-slider').slick({
        infinite: true,
        dots: true,
        speed: 1000,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $('.type-slider').prepend($('.type-slider .slick-list'));

    /*Reviews Page Slider*/
    $('#reviews .reviews-page').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 1000,
        vertical: true,
        cssEase: 'linear'
    });
    $('#reviews .reviews-page').append('<div class="slick-nav">');
    $('#reviews .reviews-page .slick-nav').append($('#reviews .reviews-page .slick-prev'));
    $('#reviews .reviews-page .slick-nav').append($('#reviews .reviews-page .slick-dots'));
    $('#reviews .reviews-page .slick-nav').append($('#reviews .reviews-page .slick-next'));

    /*Articles Page Slider*/
    $('#articles .articles-page').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: 'linear'
    });
    $('#articles .articles-page').prepend($('#articles .articles-page .slick-list'));

    /*Appliance Type Page Tabs Advantages*/
    $(".button-circle:nth-child(2) a").hover(function () {
        $(".circle3").toggleClass("headphones");
    })
    $(".circle2 .button-circle a").hover(function() {
        $(".circle3").toggleClass("tools");
    });

    /*SlideDown from H1 button to form*/
    $(".background").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top -350;
        $('body,html').animate({scrollTop: top}, 1000);
        $("#articles #app-type").focus();
        $("#contact-page #name").focus();
    });

    /*Focus Form*/
    $('.form input').focus(function () {
        $(this).parent().addClass('point');
    }).blur(function () {
        $(this).parent().removeClass('point');
    });
    $('.form select').focus(function () {
        $(this).parent().addClass('point');
    }).blur(function () {
        $(this).parent().removeClass('point');
    });
    $('.form textarea').focus(function () {
        $(this).parent().addClass('point');
    }).blur(function () {
        $(this).parent().removeClass('point');
    });
});