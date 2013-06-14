
function onLoad() {
     document.addEventListener("deviceready", onDeviceReady, false);
}
var url = "https://raw.github.com/thesoftmodder/timetable-android-13-html5/downloads/upcode/updates.js"

/* var db = window.openDatabase("timetable", "1.0", "Timetable DB", 3000000);
function populateDB(tx) {
	tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id unique, data)');
}
function errorCB(tx, err) {
	console.log("error at " + tx);
}
function successCB() {
        console.log("success");
}
db.transaction(populateDB, errorCB, successCB); */
// Updater
var appv = "1.1"; //REMEMBER Needs UPDATE
var updateAvailable = false;
var updateText;
function openjs(jsfile) {
	$.ajax({
  		url: jsfile,
  		dataType: "script",
     	}); 	  
}

function onDeviceReady() {
     $.ajax({
  	url: url,
  	dataType: "script",
     });
     console.log("device READY");
     var db = window.sqlitePlugin.openDatabase({name: "timetable"});
     console.log("db opened");
}

