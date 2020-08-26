var http = require('http');

http.createServer(
    function(req, res) {
        res.writeHead(200, {'Content-type':'text/plain; charset=UTF-8'});

        res.write(req.url);

        res.end();
    }
).listen(8080);

console.log('Servidor iniciado na porta 8080. Pressione Ctrl + C para encerrar.');