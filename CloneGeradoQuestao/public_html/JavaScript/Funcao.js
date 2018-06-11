function trocarImagem(el) {
    switch (el) {
        case 'img_cabecalho_file':
            var img = document.getElementById('img_cabecalho_file').value;
            document.getElementById('img_cabecalho').src = img;
            document.getElementById('img_cabecalho1').src = img;
            document.getElementById('img_cabecalho').style = 'visible';
            document.getElementById('img_cabecalho1').style = 'visible';
            break;

        case 'img_quest_A_file':
            var img = document.getElementById('img_quest_A_file').value;
            document.getElementById('img_quest_A').src = img;
            document.getElementById('img_quest_A1').src = img;

        case 'img_quest_B_file':
            var img = document.getElementById('img_quest_B_file').value;
            document.getElementById('img_quest_B').src = img;
            document.getElementById('img_quest_B1').src = img;
            break;

        case 'img_quest_C_file':
            var img = document.getElementById('img_quest_C_file').value;
            document.getElementById('img_quest_C').src = img;
            document.getElementById('img_quest_C1').src = img;
            break;

        case 'img_quest_D_file':
            var img = document.getElementById('img_quest_D_file').value;
            document.getElementById('img_quest_D').src = img;
            document.getElementById('img_quest_D1').src = img;
            break;

        case 'img_quest_E_file':
            var img = document.getElementById('img_quest_E_file').value;
            document.getElementById('img_quest_E').src = img;
            document.getElementById('img_quest_E1').src = img;
            break;

        default:
            alert('Opção inválida selecionada');
            break;
    }
};

function validarTransacao() {
    // validar disciplina
    if (document.getElementById('disciplina').value === ''){
        alert('Preencha a disciplina.');
        document.getElementById('disciplina').focus();
    }
    
    // validar dificuldade
    else if (document.getElementById('dificuldade').value === ''){
        alert('Preencha a dificuldade.');
        document.getElementById('dificuldade').focus();
    }
    
    // validar subject(Area de texto)
    else if (document.getElementById('subject').value === ''){
        alert('Preencha o campo para a Pergunta.');
        document.getElementById('subject').focus();
    }
    
    // validar campo de texto da resposta A
    else if (document.getElementById('txt_Resp_A').value === ''){
        alert('Preencha a resposta da questão A.');
        document.getElementById('txt_Resp_A').focus();
    }
    
    // validar campo de texto da resposta B
    else if (document.getElementById('txt_Resp_B').value === ''){
        alert('Preencha a resposta da questão B.');
        document.getElementById('txt_Resp_B').focus();
    }
    
    // validar campo de texto da resposta C
    else if (document.getElementById('txt_Resp_C').value === ''){
        alert('Preencha a resposta da questão C.');
        document.getElementById('txt_Resp_C').focus();
    }
    
    // validar campo de texto da resposta D
    else if (document.getElementById('txt_Resp_D').value === ''){
        alert('Preencha a resposta da questão D.');
        document.getElementById('txt_Resp_D').focus();
    }
    
    // validar campo de texto da resposta E
    else if (document.getElementById('txt_Resp_E').value === ''){
        alert('Preencha a resposta da questão E.');
        document.getElementById('txt_Resp_E').focus();
    }
    
    // validar marcação da resposta Correta
    else if (document.getElementsByName('respostaCorreta') === false){
        alert('Preencha a resposta correta.');
    }
}

function encodeImage(src, callback) {
    var canvas = document.createElement('canvas'),
            ctx = canvas.getContext('2d'),
            img = new Image();

    img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, img.width, img.height);
        callback(canvas.toDataURL());
    };
    img.src = src;
}  