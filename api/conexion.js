const mysql = require("mysql");
// Coloca aquí tus credenciales
module.exports = mysql.createConnection({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: 3306
  
});
