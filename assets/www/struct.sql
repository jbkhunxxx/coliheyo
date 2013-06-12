CREATE TABLE lessons (id INTEGER PRIMARY KEY, name TEXT, sname TEXT, teacher TEXT, color TEXT);
CREATE TABLE classes (id INTEGER PRIMARY KEY, lessid NUMERIC, week TEXT, day TEXT, room TEXT);
CREATE TABLE homework (id INTEGER PRIMARY KEY, lessid NUMERIC, duedate TEXT, homework BLOB);
CREATE TABLE holidays (id INTEGER PRIMARY KEY, dates TEXT);
