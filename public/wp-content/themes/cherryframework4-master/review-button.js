jQuery(document).ready(function() {
    var socialFloat = document.querySelector('#reviews-big .review-button .motopress-button-obj');
    var footer = document.querySelector('#footer');
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
