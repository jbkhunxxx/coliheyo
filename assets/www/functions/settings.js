var db = window.sqlitePlugin.openDatabase({name: "timetable"});
console.log("Settings Trying To Load");
function queryDB(tx) {
        tx.executeSql('SELECT * FROM belltimes', [], querySuccess, errorCB);
}
function querySuccess(tx, results) {
        var len = results.rows.length;
        console.log("DEMO table: " + len + " rows found.");
        for (var i=0; i<len; i++){
            console.log("Row = " + i + " ID = " + results.rows.item(i).id + " Data =  " + results.rows.item(i).data);
function errorCB(err) {
	console.log("Error processing SQL: "+err.code);
}
db.transaction(queryDB, errorCB);
var td = document.getElementById("output");
td.innerHTML = "New Content";

