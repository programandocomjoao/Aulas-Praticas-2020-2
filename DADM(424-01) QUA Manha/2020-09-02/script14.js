var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(
    function(req, res) {
        var dados = url.parse(req.url, true).query;
        var nome = dados.nome;
        var sobrenome = dados.sobrenome;
        var nc = nome + ' ' + sobrenome + '\r\n';

        fs.appendFile('listaNomes.txt', nc, 
            function(err) {
                if (err)
                    throw err;
            }
        );

        fs.readFile('resposta14.html',
            function(err, pagina) {
                res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'});
                res.write(pagina);
                res.end();
            }
        );
    }
).listen(8080);

console.log('Servidor iniciado na porta 8080. Pressione Ctrl + C para encerrar.');