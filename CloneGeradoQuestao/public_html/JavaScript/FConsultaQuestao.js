function pesquisarCampo(campo, celula) {
    if (campo === 'dificuldade') {
        var itemSelecionado = getElementsByTagName(campo);
        campo = itemSelecionado;
    }

    var input, filter, table, tr, td, i;

    input = document.getElementById(campo);
    filter = input.value.toUpperCase();
    table = document.getElementById("tbDadosQuestoes");
    tr = table.getElementsByTagName("tr");

    //CELULA 0 = CÓDIGO
    //CELULA 1 = DESCRICAO
    //CELULA 2 = MATERIA
    //CELULA 3 = DIFICULDADE

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[celula];
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}