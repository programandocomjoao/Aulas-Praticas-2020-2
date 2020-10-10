var conexao = require('./bdConectaAgenda');

conexao.connect(
    function(err) {
        if (err)
            throw err;
        else {
            var operacao = 'SELECT * FROM pessoa';

            conexao.query(operacao,
                function(err, result, fields) {
                    if (err)
                        throw err;
                    else
                        console.log('| ' + result[7].id + ' | ' + result[7].nome + ' | ' + result[7].email + ' |');
                }
            );
        }
    }
);