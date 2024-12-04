--Creates the cart table.

CREATE TABLE Carts(
		   id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	   status TEXT NOT NULL,
creation_date TEXT NOT NULL,
	  user_id INTEGER NOT NULL);