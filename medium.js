function deleteCrap() {
    $(".postMeterBar").remove();
    $(".js-elevatePostActions").remove();
    $(".u-paddingTop20").remove();
}

deleteCrap();
setInterval(deleteCrap, 1000);
