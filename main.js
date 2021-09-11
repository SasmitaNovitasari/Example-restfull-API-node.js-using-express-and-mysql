const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();

app.use(bodyParser.json());

// Connect database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'dev',
    password: 'root',
    database: 'rest_api'
});

db.connect((err) => {
    if (err) throw err;
    else console.log(`Connected!`);
});


// Settings CRUD
// Metode POST (CREATE)
app.post('/create', (req, res) => {
    let data = {
        id: req.query.id,
        tittle: req.query.tittle,
        url: req.query.url
    }
    let sql = `INSERT INTO data SET ?`;
    db.query(sql, [data], (req, result) => {
        res.send(`Data berhasil ditambahkan!`);
    });
});

// Methode GET (READ)
app.get('/get-all', (req, res) => {
    let sql = `SELECT * FROM data`;
    db.query(sql, (err, result) => {
        res.send(result);
    });
});

    // GEt data by id or tittle or url
app.get('/get-id/:id', (req, res) => {
    let sql = `SELECT * FROM data WHERE id=${req.params.id}`;
    db.query(sql, (err, result) => {
        res.send(result);
    });
});

app.get('/get-tittle/:id', (req, res) => {
    let sql = `SELECT * FROM data WHERE tittle='${req.params.id}'`;
    db.query(sql, (err, result) => {
        res.send(result);
    });
});

app.get('/get-url/:id', (req, res) => {
    let sql = `SELECT * FROM data WHERE url='${req.params.id}'`;
    db.query(sql, (err, result) => {
        res.send(result);
    });
});

// Methode put (UPDATE)
app.put('/update/:id', (req, res) => {
    let data = {
        id: req.query.id,
        tittle: req.query.tittle,
        url: req.query.url
    }
    let sql = `UPDATE data SET ? WHERE id='${req.params.id}'`;
    db.query(sql, [data], (req, result) => {
        res.send(`Data berhasil diubah!`);
    });
});

// Methode delete (DELETE)
app.delete('/delete/:id', (req, res) => {
    let sql = `DELETE FROM data WHERE id=${req.params.id}`;
    db.query(sql, (req, result) => {
        res.send(`Data berhasil dihapus!`);
    });
});

// Create server
var port = 3000;
app.listen(port, () =>{
    console.log(`Connected on port ${port}`);
});