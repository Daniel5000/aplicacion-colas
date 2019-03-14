//comando para establecer la conexion

var socket = io();
var label = $('#lblNuevoTicket');

socket.on('connect', function() {

    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Desconectado del servidor');
});


socket.on('estadoActual', function(resp) {
    label.text(resp.actual);
});



$('button').on('click', function() {

    //enviar informacion
    socket.emit('SiguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket);
    });

});