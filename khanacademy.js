function deleteCrap() {
    $("[class^=sharingFooterWrapper]").remove();
    $(".urgent-wrapper").remove();
}

deleteCrap();
setInterval(deleteCrap, 1000);
