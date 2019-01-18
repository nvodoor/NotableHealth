const express = require('express');
const parser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const mysql = require('mysql');

const app = express();

app.use(express.static(path.join(__dirname, '../dist')));

app.use(parser());
app.use(morgan());


const connection = mysql.createConnection({
  host: 'localhost',
  user: '',
  password: '',
  database: 'notable',
  port: '3306'
});

connection.connect();

app.get('/physicians', (req, res) => {
  let querystring = 'SELECT physician from physicians';
  connection.query(querystring, (error, result) => {
    if (error) {
      console.log(error);
      res.send(error);
    } else {
      console.log(result);
      res.send(result);
    }
  })
})

app.get('/physicians/:physician', (req, res) => {
  console.log(req.params);
  let querystring = 'select p.email, a.physician, a.patient, a.appt, a.kind from appointments a INNER JOIN physicians p ON a.physician = p.physician WHERE a.physician = (?)';
  connection.query(querystring, [req.params.physician], (error, result) => {
    if (error) {
      console.log(error);
      res.send(error);
    } else {
      console.log(result);
      res.send(result);
    }
  })
})

app.listen(3000, () => {
  console.log('Listening in on port 3000.')
})