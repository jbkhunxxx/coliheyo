CREATE TABLE lessons (id INTEGER PRIMARY KEY, name TEXT, sname TEXT, teacher TEXT, color TEXT);
CREATE TABLE classes (id INTEGER PRIMARY KEY, lessid NUMERIC, week TEXT, day TEXT, period NUMERIC, room TEXT);
CREATE TABLE holidays (id INTEGER PRIMARY KEY, dates TEXT);
