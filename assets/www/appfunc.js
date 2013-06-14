
function onLoad() {
     document.addEventListener("deviceready", onDeviceReady, false);
}
var url = "https://raw.github.com/thesoftmodder/timetable-android-13-html5/downloads/upcode/updates.js"
//var dbfile = "file://android_asset/www/functions/dbpop.js"

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
var appv = 1.11; //REMEMBER Needs UPDATE
var updateAvailable = false;
var updateText;
function onDeviceReady() {
	$.ajax({
  		url: url,
  		dataType: "script",
     	}); 
	console.log("device READY");
	var db = window.sqlitePlugin.openDatabase({name: "timetable"});
	console.log("db opened");
	function popdb() {
		function populateDB(tx) {
			tx.executeSql('CREATE TABLE IF NOT EXISTS appinfo (id INTEGER PRIMARY KEY, name TEXT, setting TEXT);');
			tx.executeSql('CREATE TABLE IF NOT EXISTS weeks(id INTEGER PRIMARY KEY, layname TEXT, layout TEXT, days TEXT, bellid NUMERIC);');
			tx.executeSql('CREATE TABLE IF NOT EXISTS belltimes(id INTEGER PRIMARY KEY, name TEXT, bells TEXT, desc TEXT);');
			tx.executeSql('CREATE TABLE IF NOT EXISTS schoolterm (id INTEGER PRIMARY KEY, dates TEXT);');
			tx.executeSql('CREATE TABLE IF NOT EXISTS lessons (id INTEGER PRIMARY KEY, name TEXT, sname TEXT, teacher TEXT, color TEXT);');
			tx.executeSql('CREATE TABLE IF NOT EXISTS classes (id INTEGER PRIMARY KEY, lessid NUMERIC, week TEXT, day TEXT, period NUMERIC, room TEXT);');
			tx.executeSql('CREATE TABLE IF NOT EXISTS holidays (id INTEGER PRIMARY KEY, dates TEXT);');
			tx.executeSql('CREATE TABLE IF NOT EXISTS homework (id INTEGER PRIMARY KEY, lessid NUMERIC, duedate TEXT, duetime TEXT,photo BLOB, desc TEXT, done NUMERIC);');
			console.log("PASS");
			tx.executeSql('INSERT INTO belltimes(id,name,bells) VALUES(1,"SBHS 2013","09:00 09:05 10:05 10:10 11:10 11:50 12:50 12:55 13:55 14:15 15:15/09:00 09:05 10:05 10:10 11:10 11:50 12:50 12:55 13:55 14:15 15:15/09:00 09:05 10:05 10:10 11:10 11:30 12:30 13:10 14:10 14:15 15:15/09:00 09:05 10:05 10:10 11:10 11:30 12:30 13:10 14:10 14:15 15:15/09:30 10:25 10:30 10:10 11:25 12:05 13:00 13:05 14:00 14:20 15:15";');
			tx.executeSql('INSERT INTO weeks(id,layname,layout,days,bellid) VALUES(1,"SBHS 2013 ABC","A B C","2 3 4 5 6", 1) ;');
		}
		function errorCB(tx, err) {
			console.log("error at " + tx);
		}
		function successCB() {
			console.log("success DB POPULATED");
		}
		db.transaction(populateDB, errorCB, successCB);

	}
	popdb();
}
