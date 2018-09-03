function deleteCrap() {

    if (location.pathname == '/') {
        $("#contents").remove();
        $("ytd-two-column-browse-results-renderer").remove();
    }

    if (/\/watch/.test(location.pathname)) {
        $("#related").remove();
        $("#subscribe-button").remove();
        $("#comments").remove();
    }
}

setInterval(deleteCrap, 1000);
