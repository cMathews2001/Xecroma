$(document).ready(function() {
    $('#toggleNav').on('click', function(e) {
        e.preventDefault();
        $(this).parent().attr('id') == 'expand' ? changeAttr($(this).parent(), 'expand', 'compact') : changeAttr($(this).parent(), 'compact', 'expand');
    });

    var container = $(".pageNav");

    $(document).click(function(e) {
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            changeAttr(container, 'expand', 'compact');
        }
    });

    $('.subtoggle').on('click', function(e) {
        e.preventDefault();
        id = $(this).attr('id');
        $(this).parent().animate({left: "-285px"}, 300);
        if ($($($($(this).parent()).parent()).children('.submenu')).is('#' + id)) {
            $($($(this).parent()).parent()).children('#' + id).animate({left: "0px"}, 300);
        }
    });

    $('.exit').on('click', function(e) {
        e.preventDefault();
        $(this).parent().animate({left: "285px"}, 300);
        $($($(this).parent()).parent()).children('.links').animate({left: "0px"}, 300);
    });
});

function changeAttr(element, oldAttr, newAttr) {
    element.removeAttr('id', oldAttr);
    element.attr('id', newAttr);

    if (element.attr('id') == 'compact') {
        element.children('.submenu').animate({left: "285px"}, 300);
        element.children('.links').animate({left: "0px"}, 300);
    }
}