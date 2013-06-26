function dsphw(hwlist) {
	head = "<h1>Homework</h1>"
	starttag = '<table border="1"><tr><th>Due Date</th><th>Task / Subject</th><th>Description</th></tr>'
	endtag = "</table>";
	btn = '<button class="button success round" onclick="newhw()">Add New Homework</button>'
	document.getElementById("hwdsp").innerHTML = head + starttag + hwlist + endtag + btn;
}

function finddb(tx) {
	tx.executeSql('SELECT * FROM homework;', [], hwrender, errorCB);
}

function hwrender(tx, results) {
	var finalt;
	var len = results.rows.length;
	for (var i = 0; i < results.rows.length; i++) {
		finalt += "<tr>";
		date = results.rows.item(i).duedate;
		title = results.rows.item(i).title;
		task = results.rows.item(i).desc;
		finalt += "<td>" + date + "</td>";
		finalt += "<td>" + title + "</td>";
		finalt += "<td>" + task + "</td>";
		finalt += "</tr>";
		dsphw(finalt);
	}
}


$("#date").datepicker({
	beforeShowDay : $.datepicker.noWeekends,
	dateFormat : "dd/mm/yy"
});

$("#hwsubmit").click(function() {
	date = $("#date").val();
	task = $("#task").val();
	content = $("#content").val();
	var db = window.openDatabase("timetable", "1.0", "timetable", 1024 * 1024 * 80);
	function addtodb(tx) {
		tx.executeSql('INSERT INTO homework(duedate,title,desc) VALUES("' + date + '","' + task + '","' + content + '");');
	}

	function errorCB(tx, err) {
		console.log("error at" + err);
	}

	function successCB() {
		console.log("success Added some HW");
	}


	db.transaction(addtodb, errorCB, successCB);
	db.transaction(finddb, errorCB);
});
