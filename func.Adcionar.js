// Função para adicionar um produto na tabela
function adicionarProduto() {
    var table = document.getElementById("tabelaProdutos").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
    var cols = ["descricao", "unidadeMedida", "quantidadeEstoque", "valorUnitario", "valorTotal"];
  
    for (var i = 0; i < cols.length; i++) {
      var cell = newRow.insertCell(i);
      var input = document.createElement("input");
      input.type = "text";
      input.name = cols[i];
      if (cols[i] === "valorTotal") {
        input.readOnly = true;
      }
      cell.appendChild(input);
    }
  
    var actionsCell = newRow.insertCell(cols.length);
    actionsCell.innerHTML = '<button onclick="excluirProduto(this)">Excluir</button>';
  }
  
  // Função para excluir um produto da tabela
  function excluirProduto(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }
  
  // Função para excluir um anexo da tabela
  function excluirAnexo(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }
  
  // Função para visualizar um anexo
  function visualizarAnexo(button) {
    // Implemente a lógica para visualizar o anexo
  }
  
  // Função para salvar o fornecedor
  function salvarFornecedor() {
    // Implemente a lógica para salvar o fornecedor e gerar o JSON com os dados
    var jsonExemplo = {
      // Exemplo de estrutura do JSON
    };
    console.log(jsonExemplo); // Exibindo o JSON no console
  }
  
  // Ao carregar o documento
  document.addEventListener("DOMContentLoaded", function() {
    // Código para preencher automaticamente o endereço usando uma API via CEP
    // Implemente essa funcionalidade aqui
  });
  
  // Modal de Loading
  var modal = document.getElementById("loadingModal");
  var span = document.getElementsByClassName("close")[0];
  
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  // Fechar o modal quando o usuário clicar fora dele
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }