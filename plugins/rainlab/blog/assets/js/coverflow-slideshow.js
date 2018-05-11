$(document).ready(function () {
    //Initiliaze
    var itemList, item, className, thisItem, newOrder, itemDesc, desc;
    let curItem = $('.cercle').data('id');
    let direction = 0;
    itemList = $('#itemlist');
    item = itemList.children('.article-single');
    itemDesc = $('#itemdescription');
    desc = itemDesc.children('span');
    //Add class name for each item
    item.each(function (index) {
        className = 'item-' + index;
        $(this).addClass(className).attr('data-order', index);
        console.log($(this).data('order'));
    });
    $('.cercle').click(function () {
        $('.cercle').removeClass('active');
        $(this).addClass('active');
        if ($(this).data('id') == 0) {
            $(item[0]).removeAttr('class');
            $(item[0]).attr('class', 'article-single item-1');
            $(item[1]).removeAttr('class');
            $(item[1]).attr('class', 'article-single item-2');
            $(item[2]).removeAttr('class');
            $(item[2]).attr('class', 'article-single item-0');
            return;
        }
        if ($(this).data('id') == 1) {
            $(item[0]).removeAttr('class');
            $(item[0]).attr('class', 'article-single item-2');
            $(item[1]).removeAttr('class');
            $(item[1]).attr('class', 'article-single item-0');
            $(item[2]).removeAttr('class');
            $(item[2]).attr('class', 'article-single item-1');
            return;
        }
        if ($(this).data('id') == 2) {
            $(item[0]).removeAttr('class');
            $(item[0]).attr('class', 'article-single item-0');
            $(item[1]).removeAttr('class');
            $(item[1]).attr('class', 'article-single item-1');
            $(item[2]).removeAttr('class');
            $(item[2]).attr('class', 'article-single item-2');
            return;
        }
    });
    function moveItem(up)
    {
        let activeItem = $('.cercle.active');
        let cercles = $('.cercle');
        console.log(cercles);
        if (up) {
            let activeItemId = activeItem.data('id');
            console.log(activeItemId);
            if (activeItemId == 2) {
                $(item[0]).removeAttr('class');
                $(item[0]).attr('class', 'article-single item-2');
                $(item[1]).removeAttr('class');
                $(item[1]).attr('class', 'article-single item-0');
                $(item[2]).removeAttr('class');
                $(item[2]).attr('class', 'article-single item-1');
                activeItem.removeClass('active');
                $(cercles[1]).addClass('active');
                console.log(cercles)
            } else if (activeItemId == 1) {
                $(item[0]).removeAttr('class');
                $(item[0]).attr('class', 'article-single item-1');
                $(item[1]).removeAttr('class');
                $(item[1]).attr('class', 'article-single item-2');
                $(item[2]).removeAttr('class');
                $(item[2]).attr('class', 'article-single item-0');
                activeItem.removeClass('active');
                $(cercles[0]).addClass('active');
            } else if (activeItemId == 0) {
                $(item[0]).removeAttr('class');
                $(item[0]).attr('class', 'article-single item-0');
                $(item[1]).removeAttr('class');
                $(item[1]).attr('class', 'article-single item-1');
                $(item[2]).removeAttr('class');
                $(item[2]).attr('class', 'article-single item-2');
                activeItem.removeClass('active');
                $(cercles[2]).addClass('active');
            }
        } else {
            let activeItemId = activeItem.data('id');
            if (activeItemId == 2) {
                $(item[0]).removeAttr('class');
                $(item[0]).attr('class', 'article-single item-1');
                $(item[1]).removeAttr('class');
                $(item[1]).attr('class', 'article-single item-2');
                $(item[2]).removeAttr('class');
                $(item[2]).attr('class', 'article-single item-0');
                activeItem.removeClass('active');
                $(cercles[0]).addClass('active');
            } else if (activeItemId == 1) {
                $(item[0]).removeAttr('class');
                $(item[0]).attr('class', 'article-single item-0');
                $(item[1]).removeAttr('class');
                $(item[1]).attr('class', 'article-single item-1');
                $(item[2]).removeAttr('class');
                $(item[2]).attr('class', 'article-single item-2');
                activeItem.removeClass('active');
                $(cercles[2]).addClass('active');
            } else if (activeItemId == 0) {
                $(item[0]).removeAttr('class');
                $(item[0]).attr('class', 'article-single item-2');
                $(item[1]).removeAttr('class');
                $(item[1]).attr('class', 'article-single item-0');
                $(item[2]).removeAttr('class');
                $(item[2]).attr('class', 'article-single item-1');
                activeItem.removeClass('active');
                $(cercles[1]).addClass('active');
            }
        }
    }
    $('.arrow_up').click(function () {
        console.log('up');
        let up = true;
        moveItem(up);
    })
    $('.arrow_down').click(function () {
        console.log('down');
        let up = false;
        moveItem(up);
    })
});
Powered by Redmine © 2006-2016 Jean-Philippe Lang