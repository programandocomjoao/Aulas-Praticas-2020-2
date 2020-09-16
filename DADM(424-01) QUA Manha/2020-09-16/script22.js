var http = require('http');
var fs = require('fs');
var formidable = require('formidable');

http.createServer(
    function(req, res) {
        if (req.url == '/script22') {
            var form = new formidable.IncomingForm();

            form.parse(req,
                function(err, fields, files) {
                    var nomeAntigo = files.arquivo.path;
                    var nomeNovo = 'C:/Users/jpvoi/Documents/DADM/' + files.arquivo.name;

                    fs.rename(nomeAntigo, nomeNovo,
                        function(err) {
                            if (err)
                                throw err;
                        }
                    );

                    res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'});
                    res.write('<h1>Upload de Arquivos</h1>');
                    res.write('<p>Arquivo enviado com sucesso!</p>');
                    res.write(nomeAntigo + '<br>' + nomeNovo);
                    res.end();
                }
            );              
        }
        else {
            res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'});

            res.write('<h1>Upload de Arquivos</h1>');
            res.write('<form action="script22" method="post" enctype="multipart/form-data">');
            res.write('<fieldset>');
            res.write('<legend>Envio de Arquivos</legend>');
            res.write('<p><input type="file" name="arquivo"></p>');
            res.write('<p><input type="submit" value="Enviar"></p>');
            res.write('</fieldset>');
            res.write('</form>');

            res.end();
        }
    }
).listen(8080);

console.log('Servidor iniciado na porta 8080. Pressione Ctrl + C para encerrar.');