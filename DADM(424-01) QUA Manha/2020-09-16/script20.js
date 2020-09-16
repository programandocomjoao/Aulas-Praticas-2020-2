var fs = require('fs');
var rs = fs.createReadStream('./arquivo1.txt');

rs.on('open',
    function() {
        console.log('O arquivo foi aberto!!!');
    }
);