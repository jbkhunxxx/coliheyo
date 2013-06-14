function populateDB(tx) {
	tx.executeSql('CREATE TABLE IF NOT EXISTS appinfo (id INTEGER PRIMARY KEY, name TEXT, setting TEXT);');
	tx.executeSql('CREATE TABLE IF NOT EXISTS weeks(id INTEGER PRIMARY KEY, layname TEXT, data TEXT);');
	tx.executeSql('CREATE TABLE IF NOT EXISTS schoolterm (id INTEGER PRIMARY KEY, dates TEXT);');
	tx.executeSql('CREATE TABLE IF NOT EXISTS lessons (id INTEGER PRIMARY KEY, name TEXT, sname TEXT, teacher TEXT, color TEXT);');
	tx.executeSql('CREATE TABLE IF NOT EXISTS classes (id INTEGER PRIMARY KEY, lessid NUMERIC, week TEXT, day TEXT, period NUMERIC, room TEXT);');
	tx.executeSql('CREATE TABLE IF NOT EXISTS holidays (id INTEGER PRIMARY KEY, dates TEXT);');
	tx.executeSql('CREATE TABLE IF NOT EXISTS homework (id INTEGER PRIMARY KEY, lessid NUMERIC, duedate TEXT, duetime TEXT,photo BLOB, desc TEXT, done NUMERIC);');
}
function errorCB(tx, err) {
	console.log("error at " + tx);
}
function successCB() {
        console.log("success DB POPULATED");
}
db.transaction(populateDB, errorCB, successCB);
