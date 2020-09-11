var fs = require('fs');

fs.unlink('arquivoFeio.txt',
    function(err) {
        if (err)
            throw err;
    }
);

console.log('Arquivo excluído com sucesso!');