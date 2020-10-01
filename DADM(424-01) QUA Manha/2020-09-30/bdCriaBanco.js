var mysql = require('mysql');

var conexao = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "123456"
    }
);

conexao.connect(
    function(err) {
        if (err) 
            throw err;
        else {
            console.log('Conexão estabelecida com sucesso!!!');

            conexao.query('CREATE DATABASE agenda',
                function(err) {
                    if (err)
                        throw err;
                    else
                        console.log('Banco de dados criado com sucesso!!!');
                }
            );
        }
    }
);