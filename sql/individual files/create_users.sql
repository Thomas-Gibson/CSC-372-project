--Creates the user table.

CREATE TABLE Users(
		   id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
creation_date TEXT NOT NULL,
	 username TEXT NOT NULL,
		email TEXT NOT NULL,
		 type TEXT NOT NULL);