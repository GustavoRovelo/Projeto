function validarCadastro(){
    var nome, email,confemail, senha, confsenha;
    nome       = document.getElementById('nomeCompleto').value;
    email       = document.getElementById('email').value;
    confemail   = document.getElementById('confEmail').value;
    senha       = document.getElementById('senha').value;
    confsenha   = document.getElementById('confSenha').value;
    
    if(nome === ""){
        alert("Nome não pode ser em branco");
        document.getElementById('nomeCompleto').focus();
    }
    
    else if(email === ""){
        alert("E-mail não pode ser em branco");
        document.getElementById('email').focus();
    }
    
    else if(confemail === ""){
        alert("Confirmação do e-mail não pode ser em branco");
        document.getElementById('confEmail').focus();
    }
    
    else if(senha === ""){
        alert("E-mail não pode ser em branco");
        document.getElementById('confEmail').focus();
    }
    
    else if(confsenha === ""){
        alert("Confirmação de Senha não pode ser em branco");
        document.getElementById('confSenha').focus();
    }
    
    else if(email !== confemail){
        alert("E-mails não conferem");
        document.getElementById('confEmail').focus();
    }
    
    else if(senha !== confsenha){
        alert("Senhas não conferem");
        document.getElementById('confSenha').focus();
    }
    else {
        location.href = "Index.html";
    }
}