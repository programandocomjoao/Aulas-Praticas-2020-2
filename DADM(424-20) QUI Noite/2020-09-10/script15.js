var fs = require('fs');

fs.rename('arquivoVelho.txt', 'arquivoNovo.txt',
    function(err) {
        if (err)
            throw err;
    }
);

console.log('Arquivo renomeado com sucesso!');