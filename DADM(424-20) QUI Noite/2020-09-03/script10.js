var fs = require('fs');

fs.writeFile('arquivo2.txt', 'Programar é a lei do universo!',
    function(err) {
        if (err)
            throw err;
    }
);

console.log('Arquivo gravado com sucesso!');