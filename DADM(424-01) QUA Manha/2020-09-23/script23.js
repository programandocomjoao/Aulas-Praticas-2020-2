var http = require('http');
var fs = require('fs');

http.createServer(
    function(req, res) {
        fs.readFile('cadastro23.html',
            function(err, pagina) {
                res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'});
                res.write(pagina);
                res.end();
            }
        );
    }
).listen(8080);

console.log('Servidor iniciado na porta 8080. Pressione Ctrl + C para encerrar.');