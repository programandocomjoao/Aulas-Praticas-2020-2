var conexao = require('./bdConectaAgenda');

conexao.connect(
    function(err) {
        if (err)
            throw err;
        else {
            console.log('Conexão estabelecida com sucesso!!!');

            var operacao = "INSERT INTO pessoa(nome, email) VALUES ?";
            
            var pessoas = [
                ['Dalira Baptista', 'dalira.baptista@gmail.com'],
                ['Ralf da Costa', 'ralf.costa@gmail.com'],
                ['Gerson dos Santos', 'gerson.santos@gmail.com'],
                ['Marco Valerio', 'marco.valerio@gmail.com'],
                ['Jose Augusto', 'jose.augusto@gmail.com'],
                ['Anderson Nascimento', 'anderson.nascimento@gmail.com']
            ];

            conexao.query(operacao, [pessoas],
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