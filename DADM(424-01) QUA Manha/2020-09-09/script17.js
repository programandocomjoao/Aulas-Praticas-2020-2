var http = require('http');
var url = require('url');

var end = 'http://localhost:8080/data.html?dia=17&mes=3&ano=2003';
var dados = url.parse(end, true);
var d = dados.query;

http.createServer(
    function(req, res) {
        res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'});

        res.write('<h1>Dados do Endereço</h1>');
        res.write('Host: ' + dados.host + '<br>');
        res.write('Caminho: ' + dados.pathname + '<br>');
        res.write('Argumentos: ' + dados.search);

        res.write('<h1>Dados dos Argumentos</h1>');
        res.write('Dia: ' + d.dia + '<br>');
        res.write('Mês: ' + d.mes + '<br>');
        res.write('Ano: ' + d.ano);

        res.end();
    }
).listen(8080);

console.log('Servidor iniciado na porta 8080. Pressione Ctrl + C para encerrar.');