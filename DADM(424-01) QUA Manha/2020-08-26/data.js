var data = new Date();

exports.retornarDia = function() {
    return data.getDate();
};

exports.retornarMes = function() {
    return data.getMonth() + 1;
};

exports.retornarAno = function() {
    return data.getFullYear();
};

exports.retornarHora = function() {
    return data.getHours();
};

exports.retornarMinuto = function() {
    return data.getMinutes();
};