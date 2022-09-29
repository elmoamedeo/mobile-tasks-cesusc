const mysql = require('mysql2');


function execSQLQuery(sqlQuery, res) {
    const connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'mobile',
        database: 'cesusc'
    });

    connection.connect((error) => {
        if(error) return console.log(error);
        createTable(connection);
        adicionaLinhas(connection);    
    });

    connection.query(sqlQuery, (error, results, fields) => {
        if (error) {
            res.json(results);
        } else {
            res.json(results);
            connection.end;
        }
    }); 
}



function createTable(conn) {
    const sql = `CREATE TABLE IF NOT EXISTS users(
                 ID int NOT NULL AUTO_INCREMENT,
                 NAME VARCHAR(150) NOT NULL,
                 PRIMARY KEY (ID)
                );`;

    conn.query(sql, (error, results, fields) => {
        if(error) return console.log(error);
    });  
}


function adicionaLinhas(conn) {
    const sql = "INSERT INTO users(NAME) Values ?";
    const Values = [
        ['Test'],
        ['Test 2'],
        ['Test 3']
    ];
    conn.query(sql, [Values], (error, results, fields) => {
        if(error) return console.log(error);
        conn.end();
    });
}

module.exports = execSQLQuery;