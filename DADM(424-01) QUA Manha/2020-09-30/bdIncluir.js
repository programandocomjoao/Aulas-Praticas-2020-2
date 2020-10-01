var conexao = require('./bdConectaAgenda');

conexao.connect(
    function(err) {
        if (err)
            throw err;
        else {
            console.log('Conexão estabelecida com sucesso!!!');

            var operacao = "INSERT INTO pessoa(nome, email) VALUES('Maria da Conceicao', 'maria.conceicao@gmail.com')";
            //var operacao = "UPDATE pessoa SET nome = 'Jose Maria' WHERE id = 1";

            conexao.query(operacao,
                function(err) {
                    if (err)
                        throw err;
                    else
                        console.log('Pessoa incluída com sucesso!!!');
                }
            );
        }
    }
);