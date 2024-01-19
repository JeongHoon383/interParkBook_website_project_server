import mysql from "mysql2";

const pool = mysql.createPool({
  host: "192.168.50.16",
  port: "3306",
  user: "root",
  password: "1234",
  database: "book2023",
  dateStrings: "date",
});
export const db = pool.promise();
