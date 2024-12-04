/*********************************************
	Users Listing
**********************************************/
DROP TABLE IF EXISTS Users;

CREATE TABLE Users(
		   id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
creation_date TEXT NOT NULL,
	 username TEXT NOT NULL,
		email TEXT NOT NULL,
		 type TEXT NOT NULL);


/*********************************************
	Categories Listing
**********************************************/
DROP TABLE IF EXISTS Categories;

CREATE TABLE Categories(
  id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
name TEXT NOT NULL);

INSERT INTO Categories(name)
	   VALUES ('Home');
	
INSERT INTO Categories(name)
	   VALUES ('Office');
	
INSERT INTO Categories(name)
	   VALUES ('Travel');
	
/**********************************************
	Products Listing
**********************************************/
DROP TABLE IF EXISTS Products;

CREATE TABLE Products(
		 id	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	  name	TEXT NOT NULL,
description	TEXT NOT NULL,
  image_url	TEXT NOT NULL,
	  price	REAL NOT NULL,
category_id	INTEGER NOT NULL);

INSERT INTO Products(name, description, image_url, price, category_id)
	   VALUES ( 'product1', 'description1', 'https://example.com', 23.45, 1); 
	   
INSERT INTO Products(name, description, image_url, price, category_id)
       VALUES ( 'product2', 'description2', 'https://example.com', 44.21, 2); 

INSERT INTO Products(name, description, image_url, price, category_id)
       VALUES ( 'product2', 'description2', 'https://example.com', 15.45, 3); 

/**********************************************
	Carts Listing
**********************************************/
DROP TABLE IF EXISTS Carts;

CREATE TABLE Carts(
		   id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	   status TEXT NOT NULL,
creation_date TEXT NOT NULL,
	  user_id INTEGER NOT NULL);
	  
/*********************************************
	CartProducts Listing
**********************************************/	  
DROP TABLE IF EXISTS CartProducts;

CREATE TABLE CartProducts (
		id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
   item_id INTEGER NOT NULL,
product_id INTEGER NOT NULL,
  quantity INTEGER NOT NULL);