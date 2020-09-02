var http = require('http');
var fs = require('fs');

http.createServer(
    function(req, res) {
        fs.readFile('pagina08.html',
            function(err, dados) {
                res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'});
                res.write(dados);

                fs.writeFile('arquivo4.txt', dados,
                    function(err) {
                        if (err)
                            throw err;
                    }
                );

                res.end();
            }
        );
    }
).listen(8080);

console.log('Servidor iniciado na porta 8080. Pressione Ctrl + C para encerrar.');