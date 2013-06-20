
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
	//var db = window.sqlitePlugin.openDatabase({name: "timetable"});
	var db = window.openDatabase("timetable", "1.0", "timetable", 1024*1024*80);
	console.log("db opened");
	function popdb() {

		function populateDB(tx) {
			tx.executeSql('CREATE TABLE IF NOT EXISTS appinfo (id INTEGER PRIMARY KEY, name TEXT, value TEXT);');
			tx.executeSql('CREATE TABLE IF NOT EXISTS grades (id INTEGER PRIMARY KEY,lessid NUMERIC, reportid NUMERIC, grade TEXT);');
			tx.executeSql('CREATE TABLE IF NOT EXISTS ranksample (id INTEGER PRIMARY KEY, reportid NUMERIC, points NUMERIC, rank NUMERIC);');
			tx.executeSql('CREATE TABLE IF NOT EXISTS scores (id INTEGER PRIMARY KEY,lessid NUMERIC, reportid NUMERIC, task TEXT, score NUMERIC, average NUMERIC, rank NUMERIC);');
			tx.executeSql('CREATE TABLE IF NOT EXISTS gradedef (id INTEGER PRIMARY KEY,name NUMERIC, reportid NUMERIC,points NUMERIC, max NUMERIC, min NUMERIC, average NUMERIC, nstudents NUMERIC);');
			tx.executeSql('CREATE TABLE IF NOT EXISTS reports (id INTEGER PRIMARY KEY, name TEXT,nstudents NUMERIC);');
			tx.executeSql('CREATE TABLE IF NOT EXISTS weeks(id INTEGER PRIMARY KEY, layname TEXT, layout TEXT, days TEXT, bellid NUMERIC);');
			tx.executeSql('CREATE TABLE IF NOT EXISTS belltimes(id INTEGER PRIMARY KEY, name TEXT, bells TEXT, desc TEXT);');
			tx.executeSql('CREATE TABLE IF NOT EXISTS schoolterm (id INTEGER PRIMARY KEY, dates TEXT,weekid NUMERIC);');
			tx.executeSql('CREATE TABLE IF NOT EXISTS lessons (id INTEGER PRIMARY KEY, name TEXT, sname TEXT, teacher TEXT, color TEXT, numstudents NUMERIC, totalgrade NUMERIC, rank NUMERIC, hidden NUMERIC);');
			tx.executeSql('CREATE TABLE IF NOT EXISTS classes (id INTEGER PRIMARY KEY, lessid NUMERIC, week TEXT, day TEXT, period NUMERIC, room TEXT);');
			tx.executeSql('CREATE TABLE IF NOT EXISTS holidays (id INTEGER PRIMARY KEY, dates TEXT);');
			tx.executeSql('CREATE TABLE IF NOT EXISTS homework (id INTEGER PRIMARY KEY, lessid NUMERIC, duedate TEXT, duetime TEXT,photo TEXT, desc TEXT, done NUMERIC);');
			console.log("PASS");
			tx.executeSql('INSERT INTO belltimes(id,name,bells,desc) VALUES(1,"SBHS 2013","09:00;09:05;10:05;10:10;11:10;11:50;12:50;12:55;13:55;14:15;15:15/09:00;09:05;10:05;10:10;11:10;11:50;12:50;12:55;13:55;14:15;15:15/09:00;09:05;10:05;10:10;11:10;11:30;12:30;13:10;14:10;14:15;15:15/09:00;09:05;10:05;10:10;11:10;11:30;12:30;13:10;14:10;14:15;15:15/09:30;10:25;10:30;10:10;11:25;12:05;13:00;13:05;14:00;14:20;15:15","School Starts;1;Transition;2;Lunch;3;Transition;4;Recess;5;End Of Day/School Starts;1;Transition;2;Lunch;3;Transition;4;Recess;5;End Of Day/School Starts;1;Transition;2;Recess;3;Lunch;4;Transition;5;End Of Day/School Starts;1;Transition;2;Recess;3;Lunch;4;Transition;5;End Of Day/School Starts;1;Transition;2;Lunch;3;Transition;4;Recess;5;End Of Day");');
			tx.executeSql('INSERT INTO weeks(id,layname,layout,days,bellid) VALUES(1,"SBHS 2013 ABC","A B C","2 3 4 5 6", 1) ;');
			tx.executeSql('INSERT INTO appinfo(id,name,value) VALUES(1,"weekid","1");');
			//tx.executeSql('INSERT INTO appinfo(id,name,value) VALUES(2,"currentweek","A");');
		}
		function errorCB(tx, err) {
			console.log("error");
			db.transaction(populateDB, errorCB, successCB);
			var save = "<input type='submit' id='addweek' class='button round normal'></input>"
			var inputer = "<h3>What Week Letter is it</h3><input type='text'size=1id='weekl'pattern='[A-C]' required='true' maxlength='1'><br>";
			var inputer2 = "<h3>What Week Number is it</h3><input type='text'size=1id='weekn'pattern='[0-9]' required='true' maxlength='2'><<br>";
			var inputer3 = "<h3>What Term is it</h3><input type='text'size=1id='term'pattern='[1-4]' required='true' maxlength='1'></input>";
			document.getElementById("init").innerHTML=inputer+inputer2+inputer3+save;
		}
		function successCB() {
			console.log("success DB POPULATED OR CHECKED");
		}
		function checkinit(tx){
			tx.executeSql('SELECT * FROM appinfo where name="currentweekl"',[], checkr, errorCB);
		}
		function checkr(tx, results) {
			var len = results.rows.length;
			if (len == 0) {
				var save = "<input type='submit' class='button round normal' id='addweek' onclick='addweek()'></input>"
				var inputer = "<h3>What Week Letter is it</h3><input type='text'size=1id='weekl'pattern='[A-C]' required='true' maxlength='1'><br>";
				var inputer2 = "<h3>What Week Number is it</h3><input type='text'size=1id='weekn'pattern='[0-9]' required='true' maxlength='2'><br>";
				var inputer3 = "<h3>What Term is it</h3><input type='text'size=1id='term'pattern='[1-4]' required='true' maxlength='1'></input>";
				document.getElementById("init").innerHTML=inputer+inputer2+inputer3+save;
			}
			else {
				console.log("WOW ALREADY POPULATD");
			}
		}
		db.transaction(checkinit, errorCB);
	}
	popdb();
	function addweek(){
		var db = window.openDatabase("timetable", "1.0", "timetable", 1024*1024*80);
		weekl=document.getElementById("weekl").value;
		weekn=document.getElementById("weekn").value;
		term=document.getElementById("term").value;
		console.log(weekl);
		today= getdate()
		function writeweek(tx){
			//tx.executeSql('INSERT INTO appinfo(id,name,value) VALUES(2,"currentweekl",'+weekl+');');
			//tx.executeSql('INSERT INTO appinfo(id,name,value) VALUES(3,"lastweekupdate",'+today+');');
			//tx.executeSql('INSERT INTO appinfo(id,name,value) VALUES(3,"currentweekn",'+weekn+');');
			//tx.executeSql('INSERT INTO appinfo(id,name,value) VALUES(3,"currentterm",'+term+');');
		}
		function error2(tx, err) {
			console.log("error");
		}
		function success2() {
			console.log("success calues added");
		}
		db.transaction(writeweek, error2, success2);
		document.getElementById("init").innerHTML="Thanks";
	}
}

//Main App Functions
function getjs(name,func) {
	$.ajax({
	  url: "functions/"+name+".js",
	  success: func,
	  dataType: "script",
	});

}
function scriptloader(name2,func) {
	$.ajax({
	  url: name2,
	  success: func,
	  dataType: "script",
	});

}
function getdate(){
	var today = new Date(); 
	var dd = today.getDate(); 
	var mm = today.getMonth()+1;//January is 0! 
	var yyyy = today.getFullYear(); 
	if(dd<10){dd='0'+dd} 
	if(mm<10){mm='0'+mm} 
	return(dd+'/'+mm+'/'+yyyy); 
}


