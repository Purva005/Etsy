import mysql from "C:\Users\DELL\Etsy\myslq2/promise";

//connect to mysql server
const db = await mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"Qwerty@123",
        // database:"",
    }
);

console.log("MySQL Connected Successfully");

//create database
await db.execute(`create database mysql_db`);
console.log(await db.execute("show databse"));

createtable
await db.execute(`
        CREATE TABLE users (
    id INT AUTO_INCREAMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE
    );
 `);

//insert data
await db.execute(`
    insert into users(username, email) values('purva','sukhwalpurva@example.com')
`);

//recommended
await db.execute(`insert into users(username, email) values(?,?)`,
    ["purva", "sukhwalpurva@example.com"]
);

const values = [
    ["Alice","alice@example.com"],
    ["Bob","bob@example.com"],
    ["Charlie","charlie@example.com"],
    ["David","david@example.com"],
    ["Emma","emma@example.com"],
    ["Dom","dom@example.com"],
]

await db.query("insert into users(username, email) values ?", [values]);

//read data
const [rows] = await db.execute(`select * from users where username ="emma"`);
console.log(rows);

//update
//  ! SYNTAX ! //
// UPDATE table_name
// SET column1 = value1, column2 = value2, ...
// WHERE condition;

try {
    const [rows] = await db.executr(
        "UPDATE users set username='emma' where email=c"
    );
    console.log("All Users:", rows);
}
catch (error){
    console.error(error);
}

//delete

// ! SYNTAX ! //
//DELETE FROM table_name
// WHERE condition;

try{
    const [rows] = await db.executr(
        "DELETE FROM users where email=emma@example.com");
    console.log("All Users:", rows);
}
catch (error){
    console.error(error);
}