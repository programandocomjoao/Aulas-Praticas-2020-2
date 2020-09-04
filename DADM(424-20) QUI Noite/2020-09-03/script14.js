var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(
    function(req, res) {
        var args = url.parse(req.url, true).query;
        var nome = args.nome;
        var sobrenome = args.sobrenome;
        var nc = nome + ' ' + sobrenome + '\n';

        fs.appendFile('listaNomes.txt', nc,
            function(err) {
                if (err)
                    throw err;
            }
        );

        fs.readFile('resposta14.html',
            function(err, dados) {
                res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'});
                res.write(dados);
                res.end();
            }
        );
    }
).listen(8080);

console.log('Servidor iniciado na porta 8080. Pressione Ctrl + C para encerrar.');