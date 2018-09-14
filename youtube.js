function deleteCrap() {
  if (location.pathname == '/') {
    $("#contents").hide();
    $("#spinner").remove();
  } else {
    $("#contents").show();
  }

  if (/\/watch/.test(location.pathname)) {
    $("#secondary").remove();
    $("#comments").remove();
    $("#menu-container").remove();
  }
}

deleteCrap();
setInterval(deleteCrap, 1000);
