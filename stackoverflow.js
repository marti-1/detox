function deleteCrap() {
    $("#sidebar").html("");
    $("#left-sidebar").html("");
    $(".bottom-share-links").remove();
    $(".bottom-notice").remove();
}

setInterval(deleteCrap, 1000);
