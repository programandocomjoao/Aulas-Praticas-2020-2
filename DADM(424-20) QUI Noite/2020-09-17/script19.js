var http = require('http');
var uppercase = require('upper-case');

http.createServer(
    function(req, res) {
        res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'});
        res.write(uppercase.upperCase('Aprender Programação é Construir o Futuro'));
        res.end();
    }
).listen(8080);

console.log('Servidor iniciado na porta 8080. Pressione Ctrl + C para encerrar.');