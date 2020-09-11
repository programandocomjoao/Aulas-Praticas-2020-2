var http = require('http');
var url = require('url');

var end = 'http://localhost:8080/data.html?dia=17&mes=3&ano=2003';
var dados = url.parse(end, true);
var args = dados.query;

http.createServer(
    function(req, res) {
        res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'});

        res.write('<h1>Dados do Endereço</h1>');
        res.write('Domínio: ' + dados.host + '<br>');
        res.write('Arquivo: ' + dados.pathname + '<br>');
        res.write('Argumentos: ' + dados.search);

        res.write('<h1>Dados dos Argumentos</h1>');
        res.write('Dia: ' + args.dia + '<br>');
        res.write('Mês: ' + args.mes + '<br>');
        res.write('Ano: ' + args.ano);

        res.end();
    }
).listen(8080);

console.log('Servidor iniciado na porta 8080. Pressione Ctrl + C para encerrar.');