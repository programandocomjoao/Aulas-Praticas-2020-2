var http = require('http');
var fs = require('fs');
var formidable = require('formidable');
var conexao = require('./bdConectaAgenda');

http.createServer(
    function(req, res) {
        if (req.url == '/bdCadastro') {
            var form = formidable.IncomingForm();

            form.parse(req,
                function(err, fields, files) {
                    res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'});
                    res.write('<h1>Dados da Pessoa Cadastrada</h1>');
                    res.write('<p>Nome: ' + fields.nome + '</p>');
                    res.write('<p>E-mail: ' + fields.email + '</p>');

                    conexao.connect(
                        function(err) {
                            if (err)
                                throw err;
                            else {
                                var operacao = `INSERT INTO pessoa(nome, email) VALUES('${fields.nome}', '${fields.email}')`;
                                
                                conexao.query(operacao, 
                                    function(err) {
                                        if (err) 
                                            throw err;
                                    }
                                );
                            }
                        }
                    );

                    res.end();
                }    
            );
        }
        else {
            fs.readFile('bdCadastro.html',
                function(err, pagina) {
                    res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'});
                    res.write(pagina);
                    res.end();
                }
            );
        }
    }
).listen(8080);

console.log('Servidor iniciado na porta 8080. Pressione Ctrl + C para encerrar.');