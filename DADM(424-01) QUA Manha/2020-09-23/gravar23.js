var http = require('http');
var url = require('url');
var fs = require('fs');
var formidable = require('formidable');

http.createServer(
    function(req, res) {
        if (req.url == '/gravar23') {
            var form =  new formidable.IncomingForm();

            form.parse(req, 
                function(err, fields, files) {
                    var arquivoAtual = files.foto.path;
                    var arquivoNovo = 'C:/Users/jpvoi/Documents/DADM/' + files.foto.name;

                    fs.rename(arquivoAtual, arquivoNovo,
                        function(err) {
                            if (err)
                                throw err;
                        }
                    );

                    res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'});
                    res.write('<h1>Dados do Animal Cadastrado</h1>');
                    res.write('<p>Nome: ' + fields.nome + '</p>');
                    res.write('<p>Ano de nascimento: ' + fields.ano + '</p>');
                    res.write('<p>Espécie: ' + fields.especie + '</p>');
                    res.write('<p>Raça: ' + fields.raca + '</p>');
                    res.write('<p>Foto do animal: <img src="' + arquivoNovo + '"></p>');
                    res.end();
                }
            );
        }
        else {
            fs.readFile('cadastro23.html',
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