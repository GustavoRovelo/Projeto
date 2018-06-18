function testarConexao(nomeUser, emailUser) {
    var contato = {nome: nomeUser, email: emailUser};
    $.ajax({
        async: false,
        type: 'POST',
        url: 'localhost:51565/api/Contato',
        data: JSON.values({contato}),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: onSuccess,
        failure: function (response) {
            alert(response.d);
        }
    });

    function onSuccess(response) {
        alert(response.d);
    }
}

function pegarContato() {
    $.ajax({
        async: false,
        type: 'GET',
        url: 'localhost:51565/api/Contato',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: onSuccess,
        failure: function (response) {
            alert(response.d);
        }
    });

    function onSuccess(response) {
        alert(response.d);
    }
}