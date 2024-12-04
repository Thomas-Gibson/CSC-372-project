--Creates the products table

CREATE TABLE Products(
		 id	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	  name	TEXT NOT NULL,
description	TEXT NOT NULL,
  image_url	TEXT NOT NULL,
	  price	REAL NOT NULL,
category_id	INTEGER NOT NULL);