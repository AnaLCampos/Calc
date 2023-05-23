function calcularJurosSimples() {
  var principal = parseFloat(document.getElementById('principal').value);
  var taxa = parseFloat(document.getElementById('taxa').value);
  var periodo = parseFloat(document.getElementById('periodo').value);

  if (isNaN(principal) || isNaN(taxa) || isNaN(periodo)) {
    document.getElementById('resultado').innerHTML = '<p class="erro">Por favor, preencha todos os campos corretamente.</p>';
    return;
  }

  var jurosSimples = principal * taxa * periodo / 100;
  var valorFuturo = principal + jurosSimples;

  document.getElementById('resultado').innerHTML = 'O valor do juros simples é: ' + valorFuturo.toFixed(2);
}

function calcularJurosCompostos() {
  var principal = parseFloat(document.getElementById('principal').value);
  var taxa = parseFloat(document.getElementById('taxa').value);
  var periodo = parseFloat(document.getElementById('periodo').value);

  if (isNaN(principal) || isNaN(taxa) || isNaN(periodo)) {
    document.getElementById('resultado').innerHTML = '<p class="erro">Por favor, preencha todos os campos corretamente.</p>';
    return;
  }

  var jurosCompostos = principal * Math.pow((1 + taxa / 100), periodo);
  var valorFuturo = principal + jurosCompostos;

  document.getElementById('resultado').innerHTML = 'O valor do juros composto é: ' + valorFuturo.toFixed(2);
}

// parseFloat: tenta extrair um número válido a partir do início da string fornecida e ignora qualquer conteúdo não numérico subsequente. Ela para de analisar assim que encontra um caractere não numérico ou ao atingir o final da string.