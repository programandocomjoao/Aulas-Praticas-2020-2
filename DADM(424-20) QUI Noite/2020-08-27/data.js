var d = new Date();

exports.retornarDia = function() {
    return d.getDate();
};

exports.retornarMes = function() {
    return d.getMonth() + 1;
};

exports.retornarAno = function() {
    return d.getFullYear();
};

exports.retornarHoras = function() {
    return d.getHours();
};

exports.retornarMinutos = function() {
    return d.getMinutes();
};