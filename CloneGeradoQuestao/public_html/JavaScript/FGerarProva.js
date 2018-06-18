function  validarDados(nQuestao, nMateria) {
    if (nQuestao <= 0) {
        alert("Necessário preencher o Número de Questão");
    } else if (nMateria <= 0) {
        alert("Necessário preencher o Número de Matéria");
    } else if (nMateria > nQuestao) {
        alert("O número de Matéria não pode ultrapassar a quantidade de Questão");
    } else {
        gerarTabelaDinamica(nMateria);
    }
}

function gerarTabelaDinamica(num) {
    var tabelaFinal = '';
    var cabecalhoTab = '<thead>\n\
                            <tr>\n\
                                <th style="width: 30%">Materias</th>\n\
                                <th style="width: 20%">Fácil</th>\n\
                                <th style="width: 20%">Médio</th>\n\
                                <th style="width: 20%">Difícil</th>\n\
                                <th style="width: 10%"></th>\n\
                            </tr>\n\
                        </thead>';

    var inicioCorpo = '<tbody>';
    var fimCorpo = '</tbody>';

    tabelaFinal += cabecalhoTab;
    tabelaFinal += inicioCorpo;

    var id;

    for (var i = 0; i < num; i++) {
        id = i + 1;
        tabelaFinal +=
                '<tr>\n\
                    <td>\n\
                        <select id="disciplina" name="disciplina" style="width:100%">\n\
                            <option value=""></option>\n\
                            <option value="humanas">Humanas</option>\n\ \n\
                            <option value="cien_bio">Ciências Biológicas</option>\n\
                            <option value="ling_estra">Línguas Estrangeiras</option>\n\
                            <option value="tecno">Tecnologia</option>\n\
                            <option value="cont">Contábeis</option>\n\
                            <option value="cont">PI</option>\n\
                        </select>\n\
                    </td>\n\
                    <td><input type="number" class="valor" style="width:100%"></td>\n\
                    <td><input type="number" class="valor" style="width:100%"></td>\n\
                    <td><input type="number" class="valor" style="width:100%"></td>\n\
                    <td>\n\
			<input type="button" class="btn btn-action btn-group" role="button" value="Remover" onclick="excluirLinha(this.parentNode.parentNode.rowIndex)">\n\
                    </td>\n\
                </tr>';
    }

    tabelaFinal += fimCorpo;

    document.getElementById('gridProva').innerHTML += tabelaFinal;

    document.getElementById('acoesFinais').style.visibility = "visible";
    document.getElementById('gerarTabela').style.visibility = "hidden";
}

function cancelarAcao() {
    var opcao = confirm("Deseja cancelar ?");
    if (opcao) {
        location.href = "gerarProva.html";
    }
}

function excluirLinha(i) {
    var materia = document.getElementById('numMateria').value;

    if (materia > 1) {
        document.getElementById('gridProva').deleteRow(i);
        materia--;
        document.getElementById('numMateria').value = materia;
    }
}

function salvarAcao() {
    var opcao = confirm("Deseja cancelar ?");
    if (opcao) {
        location.href = "DownloadProva.html";
    }
}