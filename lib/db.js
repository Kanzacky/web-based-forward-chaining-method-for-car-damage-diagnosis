import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: process.env.MYSQLHOST || "localhost",
  user: process.env.MYSQLUSER || "root",
  password: process.env.MYSQLPASSWORD || "",
  database: process.env.MYSQLDATABASE || "sistem_pakar_mobil",
  port: process.env.MYSQLPORT || 3306,
});
