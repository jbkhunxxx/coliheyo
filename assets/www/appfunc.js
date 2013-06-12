function onLoad() {
     document.addEventListener("deviceready", onDeviceReady, false);
}
var url = "https://raw.github.com/thesoftmodder/timetable-android-13-html5/downloads/upcode/updates.js"
function onDeviceReady() {
     var db = window.openDatabase("timetable", "1.0", "Timetable DB", 3000000);
     $.ajax({
  	url: url,
  	dataType: "script",
  	success: success
     }); 
     function populateDB(tx) {
	       tx.executeSql('CREATE TABLE holidays (id INTEGER PRIMARY KEY, dates TEXT);');
	       tx.executeSql('CREATE TABLE classes (id INTEGER PRIMARY KEY, lessid NUMERIC, week TEXT, day TEXT, room TEXT);');
	       tx.executeSql('CREATE TABLE homework (id INTEGER PRIMARY KEY, lessid NUMERIC, duedate TEXT, homework BLOB);');
	       tx.executeSql('CREATE TABLE holidays (id INTEGER PRIMARY KEY, dates TEXT);');
     }
     function errorCB(tx, err) {
	       console.log("error");
     }
     function successCB() {
               console.log("success");
		alert("d");
     }
     db.transaction(populateDB, errorCB, successCB);


}

