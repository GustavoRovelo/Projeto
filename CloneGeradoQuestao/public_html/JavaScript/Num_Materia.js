function  criarTabelaQuestao(nQuestao, nMateria) {
    var table = document.getElementById('item');
    if (nQuestao <= 0) {
        alert("Necessário preencher o Número de Questão");
    } else if (nMateria <= 0) {
        alert("Necessário preencher o Número de Matéria");
    } else if (nMateria > nQuestao) {
        alert("O número de Matéria não pode ultrapassar a quantidade de Questão");
    } else if (table.rows.length === 0) {
        Materia(nMateria);
    } else {
        while (table.rows.length > 0) {
            table.deleteRow(0);
        }
        Materia(nMateria);
    }
}

function Materia(num) {
    var tabelaFinal = '';
    var cabecalhoTab = '<thead>\n\
                            <tr>\n\
                                <th style="width: 40%">Materias</th>\n\
                                <th style="width: 15%">Fácil</th>\n\
                                <th style="width: 15%">Médio</th>\n\
                                <th style="width: 15%">Difícil</th>\n\
                                <th style="width: 15%"></th>\n\
                            </tr>\n\
                        </thead>';

    var inicioCorpo = '<tbody>';
    var fimCorpo    = '</tbody>';

    tabelaFinal += cabecalhoTab;
    tabelaFinal += inicioCorpo;

    for (var i = 0; i < num; i++) {
        tabelaFinal += 
                '<tr>\n\
                     <td>\n\
		       <select id="disciplina" name="disciplina">\n\
		         <option value=""></option>\n\
			 <option value="humanas">Humanas</option>\n\
			 <option value="cien_bio">Ciências Biológicas</option>\n\
			 <option value="ling_estra">Línguas Estrangeiras</option>\n\
			 <option value="tecno">Tecnologia</option>\n\
			 <option value="cont">Contábeis</option>\n\
			 <option value="cont">PI</option>\n\
		       </select>\n\
                    </td>\n\
                    <td><input type="number"></td>\n\
                    <td><input type="number"></td>\n\
                    <td><input type="number"></td>\n\
                    <td>\n\
			<input type="button" value="Remover" onclick="excluirLinha(this.parentNode.parentNode.rowIndex)">\n\
                    </td>\n\
                </tr>';
    }

    tabelaFinal += fimCorpo;

    document.getElementById('item').innerHTML += tabelaFinal;
    
    document.getElementById('acoesFinais').style.visibility = "visible";
    document.getElementById('gerarTabela').style.visibility = "hidden";
    
    document.getElementById('html').innerHTML += tabelaFinal;
}

function cancelaAcao() {
    location.href = "Gerar.html";
}

function excluirLinha(i) {
    var qtdMateria = document.getElementById('NdeMat').value;
    document.getElementById('item').deleteRow(i);
    
    if (qtdMateria > 0){
        document.getElementById('NdeMat').value = qtdMateria - 1;
    }
}