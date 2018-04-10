function Validar() {
    var table = document.getElementById('item');

    if (table.rows.length === 0) {
        Materia();
    } else {
        while (table.rows.length > 0) {
            {
                table.deleteRow(0);
            }
        }
        Materia();
    }
};

function Materia() {
    var num = document.getElementById('NdeMat').value;

    document.getElementById('item').innerHTML += '<table><tbody>';
    document.getElementById('item').innerHTML +=
            '<tr><td>Materias</td>\n\
<td>Facil</td>\n\
<td>Medio</td>\n\
<td>Dificil</td> </tr>';

    for (var i = 0; i < num; i++) {

        document.getElementById('item').innerHTML +=
                '<tr>  <td><select><option value="Matematica"> Matematica</option>\n\
                <option value="Infomatica"> Infomatica</option> \n\
                <option value="pota"> P.O.T.A</option> \n\
                <option value="ia"> I.A</option>  </select></td> \n\
                <td><input type="number" min="0"></td>  \n\
                <td><input type="number" min="0"></td>  \n\
                <td><input type="number" min="0"></td>  \n\
            <tr/>';
    }
    document.getElementById('item').innerHTML += '</td>';
    document.getElementById('item').innerHTML += '</tbody></table>';


}