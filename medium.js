function deleteCrap() {
    $(".postMeterBar").remove();
    $(".js-elevatePostActions").remove();
    $(".u-paddingTop20").remove();
    $(".postActions").remove();
    $(".js-postFooterPlacements").remove();
    $(".js-postShareWidget").remove();
    $(".js-elevateBottomRecirc").remove();
    $(".elevateSidebar").remove();
    $(".tags").remove();
}

deleteCrap();
setInterval(deleteCrap, 1000);
