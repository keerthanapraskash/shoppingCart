const mysql = require("mysql");

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "myexperiments",
  connectionLimit: 100,
});

connection.on("connection", (connection) => {
  console.log("Connected to the Database Successfully.");
});
module.exports = connection;
