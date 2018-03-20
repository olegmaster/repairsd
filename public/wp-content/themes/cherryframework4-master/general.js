/*----------------Smooth Scroll----------------*/
jQuery(function() {
    // Default
    jQuery.scrollSpeed(100, 800);

    // Custom Easing
    jQuery.scrollSpeed(100, 800, 'easeOutCubic');
})

jQuery(document).ready(function() {
    var tech_to_repair;
    var brand_to_repair;
    var time_for_visible = 500;
    var time_for_hide = 0;
    var whatCurrentPage = 0;
    var other = "Other";
    var answer_from_script;

    jQuery(".req-brand").hide();
    jQuery(".req-form").hide();
    jQuery(".complete").hide();
    jQuery(".back").hide();
    jQuery(".butt_finish").hide();
    jQuery(".block_brand_to_repair").hide();
    jQuery(".block_form_to_request").hide();
    jQuery(".buttons").css({"display":"flex"});
    jQuery(".wpcf7-response-output").hide();

    // jQuery(".chek").css({"opacity":"1","position":"absolute"});
    // jQuery(".req-brand").css({"opacity":"0","position":"absolute"});
    // jQuery(".req-form").css({"opacity":"0","position":"absolute"});
    // jQuery(".complete").css({"opacity":"0"});
    // jQuery(".back").css({"opacity":"0"});
    // jQuery(".butt_finish").css({"opacity":"0"});
    // jQuery(".block_brand_to_repair").css({"opacity":"0"});
    // jQuery(".block_form_to_request").css({"opacity":"0"});


    jQuery(".next_step").css("opacity", "0.6");
    jQuery("#applience").children('div').children('div').children('div').children('div:nth-child(1)').css("opacity", "1");
    jQuery("#butt_send").hide();

    // jQuery(".back").css({"display":"block", "opacity" : "0"});
    // jQuery(".req-brand").css({"display":"block","opacity" : "0"});
    // jQuery(".chek").animate({"display":"block","opacity" : "1"});

    jQuery('a.tech_to_repair').on('click', function(e){
        tech_to_repair = jQuery(this).text();
        jQuery(".next_step").css({"opacity":"1", "transition":"1s"});
        jQuery("#appliances").val(tech_to_repair);
    });

    jQuery('.slick-image-slide').on('click', function(e){
        brand_to_repair = jQuery(this).children("a").children("img").attr("alt");
        //alert(brand_to_repair);
        console.log(brand_to_repair);


    });


    //jQuery(".butt_finish").after( '<div class="loader"></div>' );

    jQuery(".butt_finish").on('click', function(e){//Thank you for your message. It was successfully sent.
        jQuery(".butt_finish").after( '<div class="loader"></div>' );
        jQuery("#butt_send").click();

        // console.log(jQuery(".wpcf7-response-output").hasClass("wpcf7-mail-sent-ok"));

    });

    setInterval(function(){

        if ( jQuery(".wpcf7-response-output").hasClass("wpcf7-mail-sent-ok") ) {
            jQuery(".req-form").hide(time_for_hide);
            jQuery(".back").hide(time_for_hide);
            jQuery(".butt_finish").hide(time_for_hide);
            jQuery(".complete").show(time_for_visible);
            jQuery(".name_of_article h2 span").remove();
            jQuery("#applience").children('div').children('div').children('div').children('div:nth-child(4)').css("opacity", "1");
            jQuery('a.step4').parent('div').addClass('bg2');
            jQuery(".info").hide(time_for_hide);
            jQuery(".loader").remove();
        }else{
            jQuery(".loader").remove();
        }

        if( jQuery(".wpcf7-response-output").hasClass("wpcf7-validation-errors") ){
            jQuery(".wpcf7-response-output").css({"display":"none"});
        }

    }, 100);


    jQuery(".next_step").click(function(){

        if(!!tech_to_repair){

            whatCurrentPage++;
            switch(whatCurrentPage){

                case 0:
                    jQuery(".chek").show(time_for_visible);
                    break;
                case 1://Brand
                    jQuery(".back").show(time_for_visible);
                    jQuery(".req-brand").show(time_for_visible);
                    jQuery(".chek").hide(time_for_hide);

                    // jQuery(".back").animate({opacity:"1"}, 500);
                    // jQuery(".req-brand").animate({opacity:"1"}, 500);
                    // jQuery(".chek").animate({opacity:"0"}, 500);

                    //    JQuery(".back").animate({/*"display":"block", */opacity : "1"},1);
                    // jQuery(".req-brand").animate({/*"display":"block", */opacity : "1"},1);
                    // jQuery(".chek").animate({"display":"none", "opacity" : "0"},1);
                    // jQuery(".block_technique_to_repair").animate({"display":"none", "opacity" : "0"},1);
                    //    jQuery(".block_brand_to_repair").animate({"display":"block", "opacity" : "1"},1);



                    jQuery(".name_of_article h2 span span").text(" Brand to Repair");
                    jQuery(".step2").css("opacity", "1");
                    jQuery("#applience").children('div').children('div').children('div').children('div:nth-child(2)').css("opacity", "1");
                    //jQuery("#applience").children('div').children('div').children('div').children('div:nth-child(2)').css("backgroud-position: -88px -170px");

                    jQuery(".block_technique_to_repair").hide();
                    jQuery(".block_brand_to_repair").show(time_for_visible);



                    jQuery('.step2').addClass('bg_my');
                    jQuery('a.step2').parent('div').addClass('bg2');
                    break;
                case 2: //Fill form
                    //jQuery(".req-brand").css("display", "none");
                    //console.log("fuck");

                    if(!!brand_to_repair){
                        jQuery("#brand").val(brand_to_repair);
                    }else{
                        jQuery("#brand").val(other);
                    }
                    jQuery(".req-brand").hide(time_for_hide);
                    jQuery(".req-form").show(time_for_visible);
                    jQuery(".next_step").hide(time_for_hide);
                    jQuery(".butt_finish").show(time_for_visible);
                    jQuery(".butt_finish").css({"opacity":"1"});
                    jQuery(".name_of_article h2 span strong").text("Fill ");
                    jQuery(".name_of_article h2 span span").text("Form Request");
                    jQuery("#applience").children('div').children('div').children('div').children('div:nth-child(3)').css("opacity", "1");
                    jQuery(".block_brand_to_repair").hide();
                    jQuery(".block_form_to_request").show(time_for_visible);
                    jQuery('.step3').addClass('bg_my');
                    jQuery('a.step3').parent('div').addClass('bg2');
                    break;
                case 3: //complete

                    jQuery(".req-form").hide(time_for_hide);
                    jQuery(".back").hide(time_for_hide);
                    jQuery(".butt_finish").hide(time_for_hide);
                    jQuery(".complete").show(time_for_visible);
                    jQuery(".name_of_article h2 span strong").text("");
                    jQuery(".step4").css("opacity", "1");
                    jQuery(".block_form_to_request").hide();
                    jQuery('.step4').addClass('bg_my');
                    // jQuery('a.step3').parent('div').addClass('bg2');
                    break;
            }
        }
    });
    jQuery(".back").click(function(){

        if(whatCurrentPage == 2){
            jQuery(".wpcf7-not-valid-tip").remove();
            console.log("Spans have been removed!!!");
        }
        whatCurrentPage--;
        switch(whatCurrentPage){

            case 0:
                jQuery(".back").hide(time_for_hide);
                jQuery(".chek").show(time_for_visible);
                jQuery(".req-brand").hide(time_for_hide);
                jQuery(".name_of_article h2 span strong").text("Choose");
                jQuery(".name_of_article h2 span span").text(" Technique to Repair");
                jQuery("#applience").children('div').children('div').children('div').children('div:nth-child(2)').css("opacity", "0.6");
                // jQuery(".motopress-service-box-content-section p").text("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
                jQuery(".block_brand_to_repair").hide();
                jQuery(".block_technique_to_repair").show(time_for_visible);
                jQuery('a.step2').parent('div').removeClass('bg2');

                break;
            case 1: //brand
                jQuery(".back").show(time_for_visible);
                jQuery(".req-brand").show(time_for_visible);
                jQuery(".chek").hide(time_for_hide);
                jQuery(".req-form").hide(time_for_hide);
                jQuery(".next_step").show(time_for_visible);
                jQuery(".butt_finish").hide(time_for_hide);
                jQuery(".name_of_article h2 span strong").text("Choose");
                jQuery(".name_of_article h2 span span").text(" Brand to Repair");
                jQuery(".block_form_to_request").hide();
                jQuery(".block_brand_to_repair").show(time_for_visible);
                jQuery("#applience").children('div').children('div').children('div').children('div:nth-child(3)').css("opacity", "0.6");
                // jQuery(".motopress-service-box-content-section p").text("change text1");
                jQuery('a.step3').parent('div').removeClass('bg2');
                break;
            case 2: // fill form
                //jQuery(".req-brand").css("display", "none");
                //console.log("fuck");
                jQuery(".req-brand").hide(time_for_hide);
                jQuery(".req-form").show(time_for_visible);
                jQuery(".complete").hide(time_for_hide);
                jQuery(".next_step").show(time_for_hide);
                jQuery(".butt_finish").hide(time_for_hide);
                jQuery(".name_of_article h2 span strong").text("Fill ");
                jQuery(".name_of_article h2 span span").text("Form Request");
                jQuery("#applience").children('div').children('div').children('div').children('div:nth-child(4)').css("opacity", "0.6");
                jQuery('a.step4').parent('div').removeClass('bg2');
                // jQuery(".motopress-service-box-content-section p").text("change text2");
                break;
            case 3: // complete
                jQuery(".req-form").hide(time_for_hide);
                jQuery(".complete").show(time_for_visible);

                break;
        }
    });

    /*jQuery('.next_step, .back, .butt_finish').on('click', function () {

         var firstStep = jQuery(".block_technique_to_repair").css('display');

         var secondStep = jQuery(".block_brand_to_repair").css('display');

         var thirdStep = jQuery(".block_form_to_request").css('display');

         var fourthStep = jQuery(".complete").css('display');


         jQuery('a.step2').parent('div').removeClass('bg2');
         jQuery('a.step3').parent('div').removeClass('bg2');
         jQuery('a.step4').parent('div').removeClass('bg2');


         if (firstStep == 'block') {

         }

         if (secondStep == 'block') {
             jQuery('a.step2').parent('div').addClass('bg2');
         }

         if (thirdStep == 'block') {
             jQuery('a.step3').parent('div').addClass('bg2');
         }

         if (fourthStep == 'block') {
             jQuery('a.step4').parent('div').addClass('bg2');

         }
     });*/


});

jQuery(document).ready(function () {
       jQuery('#repair .type .motopress-button-inner-obj a.motopress-btn').bind('click', function(event){
        jQuery('#repair .type .motopress-button-inner-obj a.motopress-btn').removeClass('cheked');
        var hasClass = jQuery(this).hasClass('cheked');
        if (!hasClass) {
            jQuery(this).addClass('cheked', hasClass);
        }
    });
});

jQuery('#repair .type a').attr('href', 'javascript:void(0)');

jQuery('#repair .type a').bind('click', function(event){
    jQuery('#repair .type a').removeClass('cheked');
    var hasClass = jQuery(this).hasClass('cheked');
    if (!hasClass) {
        jQuery(this).addClass('cheked', hasClass);
    }
});

jQuery('#repair .req-brand .slick-image-slide').bind('click', function(event){
    jQuery('#repair .req-brand .slick-image-slide').removeClass('cheked');
    var hasClass = jQuery(this).hasClass('cheked');
    if (!hasClass) {
        jQuery(this).addClass('cheked', hasClass);
    }
});

jQuery("#repair .type .motopress-button-group-inner-wrapper .motopress-button-inner-obj").click(function(e) {
    jQuery("#repair .type .motopress-button-group-inner-wrapper .motopress-button-inner-obj").removeClass('active2');
    jQuery(this).addClass('active2');
    return false;
})

jQuery( ".info .motopress-button-group-inner-wrapper" ).append( "<span></span>" );
jQuery(".info .motopress-button-group-inner-wrapper span").addClass("ajax-loader");
//jQuery("#static-area-header-top, ").wrapAll("<div class='new'></div>");

/*Header*/

jQuery('.site-header').append(
    jQuery('<div/>').append(
        jQuery('#static-area-header-top'),
        jQuery('#static-area-header-bottom'),

    )
)

jQuery("#header div").addClass("header");

jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > 1){
        jQuery('header').addClass("fixhead");
    }
    else{
        jQuery('header').removeClass("fixhead");
    }
});

/*------Blocks--------*/

jQuery('#blocks .block:first-of-type .motopress-cta-content-section').append('<p>We repair such household appliances as: refrigerators, washers, dryers, dishwashers, ranges, ovens, freezers and cooktops. Our clients choose us for a high level of professionalism and a guarantee of reliable work.</p>');
jQuery('#blocks .block:nth-child(2) .motopress-cta-content-section').append('<p>We will review your application as quickly as possible, so you can avoid the inconvenience associated with your equipment. Our experts perform repairs of household appliances quickly, efficiently and inexpensively.</p>');
jQuery('#blocks .block:nth-child(3) .motopress-cta-content-section').append('<p>All the necessary components we receive from the manufacturer, so we guarantee a quality replacement of the components of the most famous brands. Having experience with many manufacturers, we can easily solve your problem.</p>');
jQuery('#blocks .block:last-of-type .motopress-cta-content-section').append('<p>All you need is to fill out a form and describe your problem, our manager will give you a good discount. Do not wait for companies that offer a minimum system of discounts, we have the most beneficial offer for you.</p>');


jQuery(document.body).on("click",".block .motopress-button-wrap a",function () {
    var parent = jQuery(this).parents('.block');

    jQuery('p:last', parent).slideToggle("slow", function() {
    });
    /*parent.css({
        'height':'320px'
    })*/

    if (parent.hasClass('block-hover')) {
        jQuery(this).text('READ MORE');
        parent.removeClass('block-hover');
    } else {
        jQuery(this).text('HIDE');
        parent.addClass('block-hover');
    }

});

/*Time and Date Picker*/

/*jQuery('#appoin-date').datepicker({
    closeText: '×',
    minDate: 0,
    dayNamesMin: [ "MO", "TU", "WE", "TH", "FR", "SA", "SU" ],
    showButtonPanel: true,
    beforeShow: function (element, inst) {
        jQuery(inst.input).parent('p').addClass('field');
    },
    onClose: function (date, inst) {
        jQuery(inst.input).parent('p').removeClass('field');
    }
});

jQuery('#appoin-time').timepicker(
    {
        "closeText": '×',
        "timeFormat":"hh:mm TT",
        "addSliderAccess":true,
        "sliderAccessArgs":{"touchonly":true},
        beforeShow: function (element, inst) {
            jQuery(inst.input).parent('p').addClass('field');
            console.log('beforeShow: ');
        },
        onClose: function (date, inst) {
            jQuery(inst.input).parent('p').removeClass('field');
            console.log('onClose: ');
        }
    }
)*/

jQuery(document).ready(function(){
    jQuery("#type-btm .motopress-button-obj a").click(function(){
        jQuery("#type-btm .type-brand-none").toggle();
        jQuery("#type-btm .motopress-button-obj a").hide();
        jQuery("#type-btm").css({"height":"875"});
        jQuery("#type-btm h2").css({"margin-top":"130px"})
    });
});

/*------Sucsess Form------*/
jQuery(document).ready(function(jQuery) {
    jQuery(".wpcf7").on('wpcf7:mailsent', function(event){
        setTimeout(function(){
            jQuery('.wpcf7-response-output').fadeOut(600, 'swing', function(){
            });},2500);
            jQuery('.wpcf7-response-output').css ({"opacity":"1"})
    });
});

/*Slider Types*/
jQuery('#rewievs .testimonial-name').prepend('<div>');
jQuery('#rewievs .testimonial-client').prepend('<a target="_self" href="javascript:void(0)" class="motopress-btn">BOOK NOW</a>');
jQuery('.strong-view-id-2 .testimonial-inner').append('<img src="http://ocrepairs.com/wp-content/uploads/2018/01/border-test.png"">');

jQuery("#rewievs .testimonial-client a").on("click",function () {
    if (jQuery("#form-button").hasClass("active-nst")){
        jQuery("#form-button").removeClass("active-nst");
        jQuery("#form-button").css({"display":"none"})
    }else {
        jQuery("#form-button").addClass("active-nst");
        jQuery("#form-button").css({"display":"flex"});
    }
});

/*Big Testimonials*/
jQuery(".strong-view .prev").removeClass("page-numbers");
jQuery(".strong-view .next").removeClass("page-numbers");

/*Form Testimonials*/

jQuery('.review-form .field-featured_image').append('<input type="text" id="test-text" placeholder="Drag files to upload">');
jQuery('.review-form .field-featured_image').append('<input type="button" value="Choose File" id="test-button">');
jQuery('.review-form .upload-file').append(jQuery('#wpmtst_featured_image'));
jQuery(document).ready(function(){
    jQuery('.field-featured_image input[type="file"]').change(function(e){
        jQuery(this).siblings('input[type="text"]').val(e.target.files[0].name);
    });
});
jQuery('.review-form .field-featured_image').append(
    jQuery('<label/>').append(
        jQuery('#wpmtst_featured_image'),
        jQuery('#test-text'),
        jQuery('#test-button')
    )
)

jQuery('#wpmtst-submission-form').append('<a href="javascript:void(0)" class="close-form"></a>');
jQuery('#wpmtst-submission-form .field-client_name label').append('<span class="symbol">*</span>');
jQuery('#wpmtst-submission-form .field-post_title label').append('<span class="symbol">*</span>');
jQuery('#wpmtst-submission-form .field-featured_image label:first-of-type').append('<span class="symbol">*</span>');
jQuery('#wpmtst-form input').attr("required", "true");
jQuery('.wpcf7 .form .wpcf7-tel').mask('(000) 000 0000');
jQuery('.wpcf7 .form .zipcode').mask('00000');

jQuery('#wpmtst-form .field-client_name').attr('maxlength', '35');
jQuery('#wpmtst-form .field-post_title').attr('maxlength', '35');
jQuery('#wpmtst-form .field-post_content').attr('maxlength', '350');

/*-------------New Rewievs--------------*/

jQuery(".review-button a").click(function () {
    if (jQuery("#reviews-big .review-form").hasClass("active-nst")){
        jQuery("#reviews-big .review-form").removeClass("active-nst");
        jQuery("#reviews-big .review-form").css({"display":"none"})
    }else {
        jQuery("#reviews-big .review-form").addClass("active-nst");
        jQuery("#reviews-big .review-form").css({"display":"block"});
    }
});
jQuery(document.body).on("click",".close-form",function () {
    jQuery("#reviews-big .review-form").removeClass("active-nst");
    jQuery("#reviews-big .review-form").css({"display":"none"})
});
jQuery(document.body).on("click",".close-review",function () {
    jQuery(document.body).find("#reviews-big .review-form").css({"display":"none"});
});
jQuery(document.body).on("click",".dark-bg",function () {
    jQuery(document.body).find("#reviews-big .review-form").css({"display":"none"});
    jQuery("#reviews-big .review-form").removeClass("active-nst");
});

jQuery('#reviews-big .review-form').append('<div class="dark-bg"></div>');

//AIzaSyCnc3Svf7CEAW2IAMQXDU0-CsnUPkk1j3k
//map


/*BLOG*/
jQuery(".blog .content-area").prepend(jQuery("<div class=\"blog-head\">\n" +
    "<div class=\"articles-us\">\n" +
    "<div class=\"contact-us\">\n" +
    "<div class=\"motopress-text-obj\">\n" +
    "<h1>Articl</h1>\n" +
    "<h1>Es &#8211;</h1>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"mp-row-fluid\">\n" +
    "<div class=\"contact-text articles-text\">\n" +
    "<div class=\"motopress-text-obj\">\n" +
    "<p>Read <span>Latest</span></p>\n" +
    "<p>Added <span>Articles</span></p>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>"));

jQuery(".single-post .site-main").prepend(jQuery("<div class=\"contact-top\"\n><div class=\"contacts\">\n" +
    "<div class=\"articles-us\">\n" +
    "<div class=\"contact-us\">\n" +
    "<div class=\"motopress-text-obj\">\n" +
    "<h1>Article</h1>\n" +
    "<h1>Page &#8211;</h1>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"mp-row-fluid\">\n" +
    "<div class=\"contact-text articles-text\">\n" +
    "<div class=\"motopress-text-obj\">\n" +
    "<p>Read <span>Latest</span></p>\n" +
    "<p>Added <span>Articles</span></p>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>"));

jQuery(".tag .site-main").prepend(jQuery("<div class=\"contact-top\"\n><div class=\"contacts\">\n" +
    "<div class=\"articles-us\">\n" +
    "<div class=\"contact-us\">\n" +
    "<div class=\"motopress-text-obj\">\n" +
    "<h1>Articl</h1>\n" +
    "<h1>Es &#8211;</h1>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"mp-row-fluid\">\n" +
    "<div class=\"contact-text articles-text\">\n" +
    "<div class=\"motopress-text-obj\">\n" +
    "<p>Read <span>Latest</span></p>\n" +
    "<p>Added <span>Articles</span></p>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>"));
var a = undefined;
 jQuery.each(jQuery('.related-posts .related-posts_item .entry-content'),function (index) {
   a = jQuery(this).next()
     jQuery(this).append(a)
 });


jQuery('.single-post article').append(
    jQuery('<div class="article-single"></div>').append(
        /*jQuery('.single-post article figure'),*/
        jQuery('.single-post article .entry-meta-top'),
        jQuery('.single-post article .entry-content'),
        jQuery('.single-post article .entry-meta-bottom')
    )
);

jQuery('.single-post article .article-single .entry-meta-top').prepend(jQuery('.single-post .cherry-breadcrumbs .page-title'));

jQuery('.single-post article .entry-content p:first-of-type').prepend(jQuery('.single-post article figure'));

/*---------Terms of Services----------*/

jQuery("a[class=tos-fot]").on("click",function () {
    if (jQuery("#tos").hasClass("active-nst")){
        jQuery("#tos").removeClass("active-nst");
        jQuery("#tos").css({"display":"none"})
    }else {
        jQuery("#tos").addClass("active-nst");
        jQuery("#tos").css({"display":"flex"});
    }
});
jQuery(document.body).on("click",".close-tos",function () {
    jQuery("#tos").removeClass("active-nst");
    jQuery("#tos").css({"display":"none"})
});
jQuery(document.body).on("click",".tos-but .motopress-btn",function () {
    jQuery(document.body).find("#tos").css({"display":"none"});
    jQuery("#tos").removeClass("active-nst");
});
jQuery(document.body).on("click",".dark-bg",function () {
    jQuery(document.body).find("#tos").css({"display":"none"});
    jQuery("#tos").removeClass("active-nst");
});

jQuery('#tos').append('<div class="dark-bg"></div>');

/*---------FAQ----------*/

jQuery('.page-id-2914 #faq .faq-but .motopress-btn').attr('href', 'tel:1-888-884-8848');

jQuery("a[class=faq-fot]").on("click",function () {
    if (jQuery("#faq").hasClass("active-nst")){
        jQuery("#faq").removeClass("active-nst");
        jQuery("#faq").css({"display":"none"})
    }else {
        jQuery("#faq").addClass("active-nst");
        jQuery("#faq").css({"display":"flex"});
    }
});
jQuery(document.body).on("click",".close-faq",function () {
    jQuery("#faq").removeClass("active-nst");
    jQuery("#faq").css({"display":"none"})
});
jQuery(document.body).on("click",".faq-but .motopress-btn",function () {
    jQuery(document.body).find("#faq").css({"display":"none"});
    jQuery("#faq").removeClass("active-nst");
});
jQuery(document.body).on("click",".dark-bg",function () {
    jQuery(document.body).find("#faq").css({"display":"none"});
    jQuery("#faq").removeClass("active-nst");
});

jQuery('#faq').append('<div class="dark-bg"></div>');

/*---------Form Button----------*/

jQuery("#buynow a").on("click",function () {
    if (jQuery("#form-button").hasClass("active-nst")){
        jQuery("#form-button").removeClass("active-nst");
        jQuery("#form-button").css({"display":"none"})
    }else {
        jQuery("#form-button").addClass("active-nst");
        jQuery("#form-button").css({"display":"flex"});
    }
});
jQuery(".crellyslider-slider a").on("click",function () {
    if (jQuery("#form-button").hasClass("active-nst")){
        jQuery("#form-button").removeClass("active-nst");
        jQuery("#form-button").css({"display":"none"})
    }else {
        jQuery("#form-button").addClass("active-nst");
        jQuery("#form-button").css({"display":"flex"});
    }
});
jQuery(document.body).on("click",".close-form-but",function () {
    jQuery("#form-button").removeClass("active-nst");
    jQuery("#form-button").css({"display":"none"})
});
jQuery(document.body).on("click",".dark-bg",function () {
    jQuery(document.body).find("#form-button").css({"display":"none"});
    jQuery("#form-button").removeClass("active-nst");
});

jQuery('#form-button').append('<div class="dark-bg"></div>');

/*FAQ*/
jQuery("#faq .motopress-accordion-item:first-of-type .ui-accordion-header").click(function(){
    jQuery("#faq .motopress-accordion-item:first-of-type .ui-accordion-content").toggle();
});
jQuery("#faq .motopress-accordion-item:nth-child(2) .ui-accordion-header").click(function(){
    jQuery("#faq .motopress-accordion-item:nth-child(2) .ui-accordion-content").toggle();
});
jQuery("#faq .motopress-accordion-item:nth-child(3) .ui-accordion-header").click(function(){
    jQuery("#faq .motopress-accordion-item:nth-child(3) .ui-accordion-content").toggle();
});
jQuery("#faq .motopress-accordion-item:nth-child(4) .ui-accordion-header").click(function(){
    jQuery("#faq .motopress-accordion-item:nth-child(4) .ui-accordion-content").toggle();
});
jQuery("#faq .motopress-accordion-item:nth-child(5) .ui-accordion-header").click(function(){
    jQuery("#faq .motopress-accordion-item:nth-child(5) .ui-accordion-content").toggle();
});
jQuery("#faq .motopress-accordion-item:nth-child(6) .ui-accordion-header").click(function(){
    jQuery("#faq .motopress-accordion-item:nth-child(6) .ui-accordion-content").toggle();
});
jQuery("#faq .motopress-accordion-item .ui-accordion-header").click(function(){
    if ( jQuery(this).next().css('display') == 'block')
    {
        jQuery(this).find("span").css({'transform' : 'rotate(180deg)'})
    }
    if ( jQuery(this).next().css('display') == 'none')
    {
        jQuery(this).find("span").css({'transform' : 'rotate(360deg)'})
    }
});

jQuery( '#tos .tos-text .mp-span12:nth-child(2) .motopress-text-obj' ).on( 'mousewheel DOMMouseScroll', function ( e ) {
    var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail;

    this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;
    e.preventDefault();

});

jQuery( '.faq .faq-list' ).on( 'mousewheel DOMMouseScroll', function ( e ) {
    var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail;

    this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;
    e.preventDefault();

});




/*--------COUPON-----------*/
jQuery(document.body).on("click",".close-coupon",function () {
    jQuery("#coupon").removeClass("active-nst");
    jQuery("#coupon").css({"display":"none"})
});
jQuery(document.body).on("click",".dark-bg",function () {
    jQuery(document.body).find("#coupon").css({"display":"none"});
    jQuery("#coupon").removeClass("active-nst");
});



/*MEDIA FOR DEVICE*/

if(window.matchMedia('(max-device-width: 768px)').matches) {
    jQuery('#head .motopress-btn').attr('href', 'tel:1-888-884-8848');
    jQuery('#blocks').slick({
        dots: true,
        arrows: false,
        infinite: true
    });
    jQuery('.blocks').css({'max-width' : '320px'});
    jQuery('.related-posts .related-posts_list').slick({
        dots: true,
        arrows: false,
        infinite: true
    });
};


/*var doc = new jsPDF();
jQuery('#download-coupon').click(function () {
    doc.fromHTML(jQuery('.coupon').html(), 10, 10, {
        'width': 33,
        'height': 64
    });
    doc.save('coupon.pdf');
});*/

jQuery('#download-coupon').click(function () {
    var pdf = new jsPDF('p', 'mm', [33 , 64]);
    jQuery('.close-coupon').css({'display':'none', });
    jQuery('#download-coupon').css({'display':'none', });
    pdf.addHTML(jQuery('.coupon')[0], function () {
        pdf.save('Coupon.pdf');
    });
    jQuery('#coupon').css({'display':'none'});

});

