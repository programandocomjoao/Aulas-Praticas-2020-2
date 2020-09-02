var http = require('http');
var fs = require('fs');

http.createServer(
    function(req, res) {
        fs.readFile('pagina08.html',
            function(err, dados) {
                res.writeHead(200, {'Content-type':'text/html; charset=UTF-8'});
                res.write(dados);
                res.end();
            }
        );
    }
).listen(8080);

console.log('Servidor iniciado na porta 8080. Pressione Ctrl + C para encerrar.');