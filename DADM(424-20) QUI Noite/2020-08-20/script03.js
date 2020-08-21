var http = require('http');

var nome = "Gabriel Duarte";
var idade = 17;
var peso = 69.3;
var altura = 1.69;
var sexo = 'M';

http.createServer(
    function(req, res) {
        res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'});

        res.write('<html>');
        res.write('<head>');
        res.write('<title>Clínica de Nutrição</title>');
        res.write('</head>');
        res.write('<body>');
        res.write('<h1>Dados do Paciente</h1>');
        res.write('<p>');
        res.write('Nome: ' + nome + '<br>');
        res.write('Idade: ' + idade + '<br>');
        res.write('Peso: ' + peso + '<br>');
        res.write('Altura: ' + altura + '<br>');
        res.write('Sexo: ' + sexo);
        res.write('</p>');
        res.write('</body>');
        res.write('</html>');

        res.end();
    }
).listen(8080);

console.log('Servidor iniciado na porta 8080. Pressione Ctrl + C para encerrar.');