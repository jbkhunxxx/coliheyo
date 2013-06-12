function onLoad() {
     document.addEventListener("deviceready", onDeviceReady, false);
}
var url = "https://raw.github.com/thesoftmodder/timetable-android-13-html5/downloads/upcode/updates.js"
function onDeviceReady() {
     $.ajax({
  	url: url,
  	dataType: "script",
  	success: success
     });
     var db = window.openDatabase("timetable", "1.0", "Timetable DB", 3000000);
}

