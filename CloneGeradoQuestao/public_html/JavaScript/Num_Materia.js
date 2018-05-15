function  criarTabela() {
    var nQuestao = document.getElementById('NdeQuest').value;
    var nMateria = document.getElementById('NdeMat').value;
    var table = document.getElementById('item');

    if (nQuestao.length <= 0) {
        alert("Necessário preencher o Número de Questão");
    } else if (nMateria.length <= 0) {
        alert("Necessário preencher o Número de Matéria");
    } else if (table.rows.length === 0) {
        Materia();
    } else {
        while (table.rows.length > 0) {
            table.deleteRow(0);
        }
        Materia();
    }
}

function Materia() {
    var num = document.getElementById('NdeMat').value;
    
    var inicioTab = '<table border=1 style="width: 100%"><tbody>';
    var corpoTab  = '<tr>\n\
                        <td>Materias</td>\n\
                        <td>Facil</td>\n\
                        <td>Medio</td>\n\
                        <td>Dificil</td>\n\
                    </tr>';
    
    var gridProva = '<tr>\n\
                        <td style="width: 40%">\n\
                            <select>\n\
                                <option value="Matematica">Matematica</option>\n\
                                <option value="Infomatica">Infomatica</option> \n\
                                <option value="pota">P.O.T.A</option> \n\
                                <option value="ia">I.A</option>\n\
                            </select>\n\
                        </td> \n\
                        <td style="width: 20%"><input type="number></td>\n\
                        <td style="width: 20%"><input type="number"></td>\n\
                        <td style="width: 20%"><input type="number"></td>\n\
                    <tr/>';
    
    var fimCorpo = '</td>';
    var fimTab   = '</tbody></table>';
    
    document.getElementById('item').innerHTML += inicioTab;
    document.getElementById('item').innerHTML += corpoTab;

    for (var i = 0; i < num; i++) {
        document.getElementById('item').innerHTML += gridProva;
    }

    document.getElementById('item').innerHTML += fimCorpo;
    document.getElementById('item').innerHTML += fimTab;

    document.getElementById('acoesFinais').style.visibility  = "visible";
    document.getElementById('gerarTabela').style.visibility  = "hidden";
}

function cancelaAcao() {
    location.href = "Gerar.html";
}
