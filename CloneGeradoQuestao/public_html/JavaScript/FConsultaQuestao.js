function criarTabela(){
   document.getElementById('tabelaConsulta').innerHTML += "<tr>";
   document.getElementById('tabelaConsulta').innerHTML += " <td width='542'>Item</td>";
   document.getElementById('tabelaConsulta').innerHTML += " <td width='100'>Quantidade</td>";
   document.getElementById('tabelaConsulta').innerHTML += " <td width='150'>Valor Unitário (R$)</td>";
   document.getElementById('tabelaConsulta').innerHTML += " <td width='100'>Desconto(%)</td>";
   document.getElementById('tabelaConsulta').innerHTML += " <td>Total(R$)</td>";
   document.getElementById('tabelaConsulta').innerHTML += " <td width='85'></td>";
   document.getElementById('tabelaConsulta').innerHTML += "</tr>";
}