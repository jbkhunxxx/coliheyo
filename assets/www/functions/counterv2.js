
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
function countdown(belltimes){
	
	console.log("Fgee");
	console.log(belltimes);
	document.getElementById("week").innerHTML=belltimes;
}
function onDeviceReady(){
	console.log("Ready Settings");
	var db = window.openDatabase("timetable", "1.0", "timetable", 1024*1024*80);
 	function querySuccess(tx, results) {
        var len = results.rows.length;
        console.log("BELLTIMES table: " + len + " rows found.");
        for (var i=0; i<len; i++){
            console.log("Row = " + i + " ID = " + results.rows.item(i).id + " Data =  " + results.rows.item(i).bells);
            document.getElementById("belltimes").innerHTML= results.rows.item(i).bells;
            document.getElementById("descs").innerHTML= results.rows.item(i).desc;
        }
    }
 	function queryDB(tx) {
        tx.executeSql('SELECT * FROM belltimes', [], querySuccess, error);
    }
	function error(err) {
	    alert("Error processing SQL: "+err.code);
	}
	db.transaction(queryDB, error);
	countdown(belltimes);
    
}



