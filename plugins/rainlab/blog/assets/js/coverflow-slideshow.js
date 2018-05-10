$(document).ready(function () {

    //Initiliaze
    var itemList, item, className, thisItem, newOrder, itemDesc, desc;

    let curItem = 0;

    let direction = 0;

    itemList = $('#itemlist');
    item = itemList.children('.article-single');

    itemDesc = $('#itemdescription');
    desc = itemDesc.children('span');

    //Add class name for each item
    item.each(function (index) {

        className = 'item-' + index;

        $(this).addClass(className).attr('data-order', index);

    });

    $('.cercle').click(function () {

        if (curItem == $(this).data('id')) {
            return;
        }


        curItem = $(this).data('id');
        console.log(curItem);

        if (curItem == 0) {
            item[0].click();
            activateButton();
            return;
        }

        if (curItem == 1) {
            item[1].click();
            activateButton();
            return;
        }

        if (curItem == 2) {

            item[2].click();
            activateButton();
            return;
        }
    });


    function slideNext() {
        direction = 1;
        item[nextIndex(curItem)].click();
    }

    function slidePew() {
        direction = -1;
        item[prewIndex(curItem)].click();

    }

    function activateButton() {
        $('.cercle').removeClass('active');
        $('[data-id=' + curItem + ']').addClass('active');

    }


    $('.arrow_up').click(function () {
        slideNext();


        if (curItem == 2) {
            curItem = 0
        } else {
            curItem += 1;
        }

        activateButton();

    })

    $('.arrow_down').click(function () {
        slidePew();


        if (curItem == 0) {
            curItem = 2
        } else {
            curItem -= 1;
        }

        activateButton();
    })


    function nextIndex(curItem) {
        if (curItem < 2) {
            return ++curItem;
        } else {
            curItem = 0;
            return 0;
        }
    }

    function prewIndex(curItem) {
        if (curItem == 2) {
            curItem = 1;
            return curItem;
        } else if (curItem == 1) {
            curItem = 0;
            return curItem;
        } else if (curItem == 0) {
            curItem = 2;
            return curItem;
        }
    }


    //Show first item description
    desc.filter(':first-child').fadeIn();

    //On clicked fire animation
    item.on('click', function () {


        thisItem = $(this);

        thisOrder = parseInt(thisItem.attr('data-order')) - 1;

        thisItem.addClass('show');

        //Reorder item position
        item.on('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function () {

            thisItem.removeClass().addClass('article-single item-0 ').attr('data-order', '0');

            //Show selected item description
            // desc.hide();
            desc.filter('[data-for=' + thisItem.attr('id') + ']').fadeIn('fast');
        });

        //Move siblings items backward
        window.setTimeout(function () {

            for (var i = thisOrder; i >= 0; i--) {

                //Reorder item position
                movedItem = item.filter('[data-order=' + i + ']');
                newOrder = parseInt(movedItem.attr('data-order')) + 1;
                className = 'item-' + newOrder;

                //Move them with transition
                movedItem.addClass('transition ' + className).attr('data-order', newOrder);

                //Remove their transition
                item.on('transitionend webkitTransitionEnd MSTransitionEnd oTransitionEnd', function () {
                    item.removeClass('transition');
                });
            }
        }, 500);
    });
});