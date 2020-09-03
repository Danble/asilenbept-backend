const mysql = require('mysql')

const server = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'toor',
  database: 'Test'
})

server.connect(err => {
  if (err) throw err;
  server.query(`INSERT INTO users (id, users) VALUES (?, ?)`, [2, 'probando2'], (err, result, fields) => {
    if (err) throw err;
    console.log(result);
 })
})