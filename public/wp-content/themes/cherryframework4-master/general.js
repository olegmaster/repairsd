/*Header*/
jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > 1){
        jQuery('header').addClass("fixhead");
        jQuery('header').css({"margin-top":"0"});
        jQuery('button#responsive-menu-button').css({"top":"42"});
    }
    else{
        jQuery('header').removeClass("fixhead");
        jQuery('header').css({"margin-top":"25px"});
        jQuery('button#responsive-menu-button').css({"top":"60"});
    }
});

jQuery(document).ready(function () {

    var div = jQuery('<div/>');
    jQuery('.site-header').append(
       div.append(
            jQuery('#static-area-header-top'),
            jQuery('#static-area-header-bottom')
        )
    );
    div.addClass("header");



});

/*
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




jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > 1){
        jQuery('header').addClass("fixhead");
    }
    else{
        jQuery('header').removeClass("fixhead");
    }
});

jQuery(document.body).on("click",".block .motopress-button-wrap a",function () {
    var parent = jQuery(this).parents('.block');

    jQuery('p:last', parent).slideToggle("slow", function() {
    });
    /!*parent.css({
        'height':'320px'
    })*!/

    if (parent.hasClass('block-hover')) {
        jQuery(this).text('READ MORE');
        parent.removeClass('block-hover');
    } else {
        jQuery(this).text('HIDE');
        parent.addClass('block-hover');
    }

});


jQuery(document).ready(function(){
    jQuery("#type-btm .motopress-button-obj a").click(function(){
        jQuery("#type-btm .type-brand-none").toggle();
        jQuery("#type-btm .motopress-button-obj a").hide();
        jQuery("#type-btm").css({"height":"875"});
        jQuery("#type-btm h2").css({"margin-top":"130px"})
    });
});

/!*Slider Types*!/
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

/!*Big Testimonials*!/
jQuery(".strong-view .prev").removeClass("page-numbers");
jQuery(".strong-view .next").removeClass("page-numbers");

/!*Form Testimonials*!/

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

/!*-------------New Rewievs--------------*!/

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


/!*BLOG*!/
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
        /!*jQuery('.single-post article figure'),*!/
        jQuery('.single-post article .entry-meta-top'),
        jQuery('.single-post article .entry-content'),
        jQuery('.single-post article .entry-meta-bottom')
    )
);

jQuery('.single-post article .article-single .entry-meta-top').prepend(jQuery('.single-post .cherry-breadcrumbs .page-title'));

jQuery('.single-post article .entry-content p:first-of-type').prepend(jQuery('.single-post article figure'));

/!*---------Terms of Services----------*!/

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

/!*---------FAQ----------*!/

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


*/
