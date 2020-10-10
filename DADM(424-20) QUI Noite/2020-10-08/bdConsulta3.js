var conexao = require('./bdConectaAgenda');

conexao.connect(
    function(err) {
        if (err)
            throw err;
        else {
            var operacao1 = 'SELECT COUNT(id) AS quantidade FROM pessoa';

            conexao.query(operacao1,
                function(err, result, fields) {
                    if (err)
                        throw err;
                    else {
                        var quantidade = result[0].quantidade;
                        var operacao2 = 'SELECT * FROM pessoa';

                        console.log('Existem ' + quantidade + ' pessoas cadastradas');

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