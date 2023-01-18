// Create an SQL with your favorite dishes and cuisines.
import { createConnection } from "mysql2";
import { dbConnection } from "./secrets.js";

//! remeber to comment out the query after creating a table
try {
	const db = createConnection(dbConnection);

	console.log("We are connected...");

	// creat table query
	db.query(
		"CREATE TABLE dishes (ID INT PRIMARY KEY NOT NULL auto_increment, Dish_ID CHAR(10), dish_name VARCHAR(20), rating INT)",
		(err, result) => {
			if (err) console.error(`ERROR ---> ${err}`);
			console.table();
		}
	);

	// insert data into database table query // data for dish 1
	db.query(
		"INSERT INTO dishes (ID, Dish_ID, dish_name, rating) values (null, 'd1', 'moms lasagna', '10')",
		(err, result) => {
			if (err) console.error(`ERROR --> ${err}`);
			console.table();
		}
	);

	// data for dish 2
	db.query(
		"INSERT INTO dishes (ID, Dish_ID, dish_name, rating) values (null, 'd2', 'sushi', '7')",
		(err, result) => {
			if (err) console.error(`ERROR --> ${err}`);
			console.table();
		}
	);

	// show tables query
	db.query("SHOW TABLES", (err, result) => {
		if (err) console.error(`ERROR --> ${err}`);
		console.table(result);
	});

	// query to show items from table
	db.query("SELECT * FROM dishes", (err, result) => {
		if (err) console.error(`ERROR --> ${err}`);
		console.table(result);
	});

	db.end();

} catch (err) {

	console.error(err);
}
