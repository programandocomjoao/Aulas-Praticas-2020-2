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
                        console.log('| ' + result[0].id + ' | ' + result[0].nome + ' | ' + result[0].email + ' |');
                }
            );
        }
    }
);