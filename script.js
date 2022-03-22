function converter() {
  //Puxar o input do HTML
  var valorElemento = document.getElementById("valor");

  var valorReal = valorElemento.value;

  var valorTp = parseFloat(valorReal);

  var valorReala = (valorTp * 5).toFixed(2);

  var exp = document.getElementById("valorReal");
  exp.innerHTML = valorReala + " reais";
}

function converterBTC() {
  var elementoBTC = document.getElementById("valor");
  var valorBTC = elementoBTC.value;
  var valorImg = parseFloat(valorBTC);
  var valorReferencia = valorImg / 39869;

  var sep = document.getElementById("valorBTC");
  sep.innerHTML = valorReferencia + " bitcoins";
  console.log(sep)
}

function converterEUR() {
  var elementoEUR = document.getElementById("valor");
  var valorEU = elementoEUR.value;
  var valortrans = parseFloat(valorEU);
  var valorEutru = (valortrans * 0.91).toFixed(2);

  (document.getElementById("valorEU")).innerHTML = valorEutru + " euros";
  
}
