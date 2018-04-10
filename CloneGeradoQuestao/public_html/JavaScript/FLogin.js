var modal = document.getElementById('myModal');
var a = document.getElementById('showModal');
var span = document.getElementsByClassName("close")[0];

a.onclick = function () {
    modal.style.display = "block";
};

span.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

function validarEmail() {
    var email = document.getElementById('RecEmail').value;

    if (email.length <= 0) {
        document.getElementById('RecEmail').focus();
    } else {
        enviarEmail(email);
    }
}

function enviarEmail(mail) {
    var link = "mailto:" + mail
            + "?cc=henrique.mauricio@outlook.com"
            + "&subject=This is my subject"
            + "&body=Teste Envio Email";

    window.location.href = link;
}

function validaDados() {
    var email = document.getElementById('email').value;
    var senha = document.getElementById('pass').value;

    if ((email.length > 0) && (senha.length > 0)) {
        window.location = 'PaginaInicial.html';
    } else {
        alert("Dados inválidos");
    }
}