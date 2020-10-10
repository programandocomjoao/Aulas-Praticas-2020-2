var conexao = require('./bdConectaAgenda');

conexao.connect(
    function(err) {
        if (err)
            throw err;
        else {
            var operacao = 'SELECT COUNT(id) AS qtd FROM pessoa';

            conexao.query(operacao,
                function(err, result, fields) {
                    if (err)
                        throw err;
                    else {
                        var operacao2 = 'SELECT * FROM pessoa';
                        var quantidade = result[0].qtd;

                        conexao.query(operacao2, 
                            function(err, result, fields) {
                                if (err)
                                    throw err;
                                else
                                    for (var i = 0; i < quantidade; i++)
                                        console.log('| ' + result[i].id + ' | ' + result[i].nome + ' | ' + result[i].email + ' |');
                            }
                        );
                    }
                }
            );
        }
    }
);