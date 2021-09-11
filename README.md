# Preparation
Install module express, body-parser and mysql. Check the version I'm using in package.json

    "body-parser": "^1.19.0",
    "express": "^4.17.1",
    "mysql": "^2.18.1"
    
You should also create your own mysql database with tables containing id(int), title(char), url(char). Example:

    CREATE TABLE data(
      id int(255),
      tittle char(255),
      url char(255)
    );
    
# Explanation of the code
Connect to local database mysql. Change user, password and database as you need. Make sure mysql server is running

    const db = mysql.createConnection({
        host: 'localhost',
        user: 'dev',
        password: 'root',
        database: 'rest_api'
    });

Code for run mysql command line

    let sql = `SELECT * FROM data`;
    db.query(sql, (err, result) => {
        res.send(result);
    });

You can change the contents of the sql variable according to the command line you need. For example, insert data, read data, delete data, etc.

The express method used is:

    post (CEATE data)
    get (READ data)
    put (UPDATE data)
    delete (DELETE data)
