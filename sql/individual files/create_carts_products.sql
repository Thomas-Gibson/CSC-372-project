-- Creates the CartProducts page

CREATE TABLE CartProducts (
		id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
   item_id INTEGER NOT NULL,
product_id INTEGER NOT NULL,
  quantity INTEGER NOT NULL);