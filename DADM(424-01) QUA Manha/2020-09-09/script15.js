var fs = require('fs');

fs.rename('arquivoNovo.txt', 'arquivoNovissimo.txt',
    function(err) {
        if (err)
            throw err;
    }
);

console.log('Arquivo renomeado com sucesso!');