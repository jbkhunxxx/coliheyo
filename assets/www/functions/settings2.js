
function settings() {
	document.addEventListener("deviceready", onDeviceReady, false);
}
function onDeviceReady(){
	console.log("Ready Settings");
    var db = window.sqlitePlugin.openDatabase({name: "timetable"});
}
