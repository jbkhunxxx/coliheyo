function index() {
	document.addEventListener("deviceready", onDeviceReady, false);
}
var url = "https://raw.github.com/thesoftmodder/timetable-android-13-html5/downloads/upcode/updates.js"

var appv = 1.11; //REMEMBER Needs UPDATE
var updateAvailable = false;
var updateText;

function onDeviceReady() {
	$.ajax({
		url: url,
		dataType: "script",
	});
	console.log("device READY");
	//var db = window.sqlitePlugin.openDatabase({name: "timetable"});
	var db = window.openDatabase("timetable", "1.0", "timetable", 1024 * 1024 * 80);
	console.log("db opened");

	function popdb() {

		function populateDB(tx) {
			tx.executeSql('CREATE TABLE IF NOT EXISTS appinfo (id INTEGER PRIMARY KEY, name TEXT, value TEXT);');
			tx.executeSql('CREATE TABLE IF NOT EXISTS grades (id INTEGER PRIMARY KEY,lessid NUMERIC, reportid NUMERIC, grade TEXT,year NUMERIC);');
			tx.executeSql('CREATE TABLE IF NOT EXISTS ranksample (id INTEGER PRIMARY KEY, reportid NUMERIC, points NUMERIC, rank NUMERIC,year NUMERIC);');
			tx.executeSql('CREATE TABLE IF NOT EXISTS scores (id INTEGER PRIMARY KEY,lessid NUMERIC, reportid NUMERIC, task TEXT, score NUMERIC, average NUMERIC, rank NUMERIC, year NUMERIC);');
			tx.executeSql('CREATE TABLE IF NOT EXISTS gradedef (id INTEGER PRIMARY KEY,name NUMERIC, reportid NUMERIC,points NUMERIC, max NUMERIC, min NUMERIC, average NUMERIC, nstudents NUMERIC);');
			tx.executeSql('CREATE TABLE IF NOT EXISTS reports (id INTEGER PRIMARY KEY, name TEXT,nstudents NUMERIC,year NUMERIC);');
			tx.executeSql('CREATE TABLE IF NOT EXISTS weeks(id INTEGER PRIMARY KEY, layname TEXT, layout TEXT, days TEXT, bellid NUMERIC);');
			tx.executeSql('CREATE TABLE IF NOT EXISTS belltimes(id INTEGER PRIMARY KEY, name TEXT, bells TEXT, desc TEXT);');
			tx.executeSql('CREATE TABLE IF NOT EXISTS schoolterm (id INTEGER PRIMARY KEY, dates TEXT, weekid NUMERIC, weeks NUMERIC, year NUMERIC, name TEXT, rollovernxt NUMERIC);');
			tx.executeSql('CREATE TABLE IF NOT EXISTS lessons (id INTEGER PRIMARY KEY, name TEXT, sname TEXT, teacher TEXT, color TEXT, numstudents NUMERIC, totalgrade NUMERIC, rank NUMERIC, hidden NUMERIC, year NUMERIC);');
			tx.executeSql('CREATE TABLE IF NOT EXISTS classes (id INTEGER PRIMARY KEY, lessid NUMERIC, week TEXT, day TEXT, period NUMERIC, room TEXT,year NUMERIC);');
			tx.executeSql('CREATE TABLE IF NOT EXISTS holidays (id INTEGER PRIMARY KEY, dates TEXT);');
			tx.executeSql('CREATE TABLE IF NOT EXISTS homework (id INTEGER PRIMARY KEY, lessid NUMERIC, duedate TEXT, duetime TEXT,photo TEXT, desc TEXT, done NUMERIC);');
			console.log("PASS");
			tx.executeSql('INSERT INTO belltimes(id,name,bells,desc) VALUES(1,"SBHS 2013","09:00;09:05;10:05;10:10;11:10;11:50;12:50;12:55;13:55;14:15;15:15/09:00;09:05;10:05;10:10;11:10;11:50;12:50;12:55;13:55;14:15;15:15/09:00;09:05;10:05;10:10;11:10;11:30;12:30;13:10;14:10;14:15;15:15/09:00;09:05;10:05;10:10;11:10;11:30;12:30;13:10;14:10;14:15;15:15/09:30;10:25;10:30;10:10;11:25;12:05;13:00;13:05;14:00;14:20;15:15","School Starts;1;Transition;2;Lunch;3;Transition;4;Recess;5;End Of Day/School Starts;1;Transition;2;Lunch;3;Transition;4;Recess;5;End Of Day/School Starts;1;Transition;2;Recess;3;Lunch;4;Transition;5;End Of Day/School Starts;1;Transition;2;Recess;3;Lunch;4;Transition;5;End Of Day/School Starts;1;Transition;2;Lunch;3;Transition;4;Recess;5;End Of Day");');
			tx.executeSql('INSERT INTO weeks(id,layname,layout,days,bellid) VALUES(1,"SBHS 2013 ABC","A B C","2 3 4 5 6", 1) ;');
			tx.executeSql('INSERT INTO appinfo(id,name,value) VALUES(1,"weekid","1");');
			tx.executeSql('INSERT INTO appinfo(id,name,value) VALUES(2,"startweeknoroll","A");');
			tx.executeSql('INSERT INTO schoolterm(id,name,dates,year,rollovernxt) VALUES("1","Term 1 2013","28/01/2013;12/04/2013",2013,1);');
			tx.executeSql('INSERT INTO schoolterm(id,name,dates,year,rollovernxt) VALUES("2","Term 2 2013","29/04/2013;28/06/2013",2013,1);');
			tx.executeSql('INSERT INTO schoolterm(id,name,dates,year,rollovernxt) VALUES("3","Term 3 2013","15/07/2013;20/09/2013",2013,1);');
			tx.executeSql('INSERT INTO schoolterm(id,name,dates,year,rollovernxt) VALUES("4","Term 4 2013","07/10/2013;21/12/2013",2013,0);');
			tx.executeSql('INSERT INTO schoolterm(id,name,dates,year,rollovernxt) VALUES("5","Term 1 2014","27/01/2014;11/04/2014",2014,1);');
			tx.executeSql('INSERT INTO schoolterm(id,name,dates,year,rollovernxt) VALUES("6","Term 2 2014","28/04/2014;27/06/2014",2014,1);');
			tx.executeSql('INSERT INTO schoolterm(id,name,dates,year,rollovernxt) VALUES("7","Term 3 2014","14/07/2014;19/09/2014",2014,1);');
			tx.executeSql('INSERT INTO schoolterm(id,name,dates,year,rollovernxt) VALUES("8","Term 4 2014","06/10/2014;19/12/2014",2014,0);');
			tx.executeSql('INSERT INTO schoolterm(id,name,dates,year,rollovernxt) VALUES("9","Term 1 2015","26/01/2015;02/04/2015",2015,1);');
			tx.executeSql('INSERT INTO schoolterm(id,name,dates,year,rollovernxt) VALUES("10","Term 2 2015","20/04/2015;26/06/2015",2015,1);');
			tx.executeSql('INSERT INTO schoolterm(id,name,dates,year,rollovernxt) VALUES("11","Term 3 2015","13/07/2015;18/09/2015",2015,1);');
			tx.executeSql('INSERT INTO schoolterm(id,name,dates,year,rollovernxt) VALUES("12","Term 4 2015","05/10/2015;18/12/2015",2015,0);');
			//tx.executeSql('INSERT INTO appinfo(id,name,value) VALUES(2,"currentweek","A");');
		}

		function errorCB(tx, err) {
			console.log("error at"+err);
		}

		function successCB() {
			console.log("success DB POPULATED OR CHECKED");
		}

		function checkinit(tx) {
			tx.executeSql('SELECT * FROM sqlite_master WHERE tbl_name="appinfo";', [], checkr, errorCB);
		}

		function checkr(tx, results) {
			var len = results.rows.length;
			if (len == 0) {
				db.transaction(populateDB, errorCB, successCB);
			} else {
				console.log("WOW ALREADY POPULATD");
			}
		}
		db.transaction(checkinit, errorCB);
	}
	popdb();

}
//Main App Functions

function getjs(name, func) {
	$.ajax({
		url: "functions/" + name + ".js",
		success: func,
		dataType: "script",
	});

}

function scriptloader(name2, func) {
	$.ajax({
		url: name2,
		success: func,
		dataType: "script",
	});

}

function getdate() {
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth() + 1; //January is 0! 
	var yyyy = today.getFullYear();
	if (dd < 10) {
		dd = '0' + dd
	}
	if (mm < 10) {
		mm = '0' + mm
	}
	return (dd + '/' + mm + '/' + yyyy);
}