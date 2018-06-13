$('a#novo').on('click', function() {
console.log( 'novo pedido' );

    $.soap({
        url: 'http://localhost:8080/',
        method: 'colocar metodo',
        
        data: {
                mesa: 1,
                pedido: '1 suco de laranja'
        },

        success: function (soapResponse) {
                soapResponse.toString();
        },
        error: function (SOAPResponse) {
                alert(SOAPResponse.toString());
        }
    });
}); 