function deleteCrap() {
    $(".bibliotron-notification").remove()
    $("[class^=sharingFooterWrapper]").remove();
    $("[class^=classUpsellContainer]").remove();
}

setInterval(deleteCrap, 1000);
