var mysql = require('mysql');

var conexao = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'agenda'
    }
);

module.exports = conexao;