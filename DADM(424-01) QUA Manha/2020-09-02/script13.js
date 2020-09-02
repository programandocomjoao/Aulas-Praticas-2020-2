var fs = require('fs');

fs.appendFile('arquivo5.txt', 'DADM\n',
    function(err) {
        if (err)
            throw err;
    }
);

console.log('Arquivo atualizado com sucesso!');