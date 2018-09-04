function deleteCrap() {
    $(".bibliotron-notification").remove()
    $("[class^=sharingFooterWrapper]").remove();
    $("[class^=classUpsellContainer]").remove();
}

deleteCrap();
setInterval(deleteCrap, 1000);
