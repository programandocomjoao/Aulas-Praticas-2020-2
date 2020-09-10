var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(
    function(req, res) {
        var end = url.parse(req.url, true);
        var arquivo = '.' + end.pathname;

        fs.readFile(arquivo,
            function(err, pagina) {
                if (err) {
                    res.writeHead(404, {'Content-Type':'text/html; charset=UTF-8'});
                    res.write('<h1>Erro 404</h1>');
                    res.write('<p>Page Not Found (Página Não Encontrada).</p>');
                    res.write('<p>Digite o nome de um Tokusatsu válido na URL.</p>');
                    res.end();
                }
                else {
                    res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'});
                    res.write(pagina);
                    res.end();
                }
            }
        );
    }
).listen(8080);

console.log('Servidor iniciado na porta 8080. Pressione Ctrl + C para encerrar.');