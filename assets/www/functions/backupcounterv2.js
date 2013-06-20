
function onLoad() {
	document.addEventListener("deviceready", onDeviceReady, false);
}

/* function querySuccess(tx, results) {
	for (var i=0; i < results.rows.length; i++){
		row = results.rows.item(i);
		editRecords2(row.name,row.total);
	}
}
var results = 
function errorCB(err) {
    alert("Error processing SQL: "+err.code);
}
function queryDB(tx) {
	tx.executeSql('SELECT * FROM belltimes', results, querySuccess(tx,results))

} */
function countdown(belltimes2){
	
	document.getElementById("week").innerHTML=belltimes2;
}
function countstart(belltimes,descs){
	console.log("PLACEHOLDER");
	console.log(belltimes);
	now = new Date;
	var day;
	var todayHours;
	var todayMinutes;
	var todayDesc;
	var nextDay = false;
	var weekChecked = false;

	

}
function querySuccess(tx, results) {
	var len = results.rows.length;
	console.log("BELLTIMES table: " + len + " rows found.");
	///console.log("Row = " + "0" + " ID = " + results.rows.item(0).id + " Data =  " + results.rows.item(0).bells);
	belltimes = results.rows.item(0).bells;
	descs = results.rows.item(0).desc;
	countstart(belltimes,descs);
    }
function querydb(tx) {
    tx.executeSql('SELECT * FROM belltimes', [], querySuccess, error);
}
function error(err) {
    alert("Error processing SQL: "+err.code);
}
function onDeviceReady(){
	console.log("READY COUNTER V2");
	/*var db = window.openDatabase("timetable", "1.0", "timetable", 1024*1024*80);
 	function querySuccess(tx, results) {
        var len = results.rows.length;
        console.log("BELLTIMES table: " + len + " rows found.");
        for (var i=0; i<len; i++){
            console.log("Row = " + i + " ID = " + results.rows.item(i).id + " Data =  " + results.rows.item(i).bells);
            document.getElementById("belltimes").innerHTML= results.rows.item(i).bells;
            document.getElementById("descs").innerHTML= results.rows.item(i).desc;
            return results.rows.item(0).bells;
        }
    }
 	function queryDB(tx) {
        tx.executeSql('SELECT * FROM belltimes', [], querySuccess, error);
    }
	function error(err) {
	    alert("Error processing SQL: "+err.code);
	}*/
	console.log("READY");
	var db = window.openDatabase("timetable", "1.0", "timetable", 1024*1024*80);
	db.transaction(querydb, error);
    
}

    


