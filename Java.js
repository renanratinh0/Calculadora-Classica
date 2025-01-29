function verificarPreenchimento() {
  const N1 = document.getElementById('1').value;
  const N2 = document.getElementById('2').value;

  if (N1 === '' || N2 === '') {
    alert('Por favor, preencha ambos os campos!');
    return false; // Retorna falso para evitar a execução das operações
  }
  return true; // Retorna verdadeiro se ambos os campos estiverem preenchidos
}

function Somar(){
    if (!verificarPreenchimento()) return; // Verifica se os campos estão preenchidos
    var N1 = parseFloat(document.getElementById("1").value);
    var N2 = parseFloat(document.getElementById("2").value);
    var NR = (N1 + N2)
      Resultado.innerHTML = NR ;
  }
  function Menos(){
    if (!verificarPreenchimento()) return; // Verifica se os campos estão preenchidos
    var N1 = parseFloat(document.getElementById("1").value);
    var N2 = parseFloat(document.getElementById("2").value);
    var NR = (N1 - N2)
      Resultado.innerHTML = NR ;
  }
  function Mutlipicar(){
    if (!verificarPreenchimento()) return; // Verifica se os campos estão preenchidos
    var N1 = parseFloat(document.getElementById("1").value);
    var N2 = parseFloat(document.getElementById("2").value);
    var NR = (N1 * N2)
      Resultado.innerHTML = NR ;
  }
  function Pontecia(){
    if (!verificarPreenchimento()) return; // Verifica se os campos estão preenchidos
    var N1 = parseFloat(document.getElementById("1").value);
    var N2 = parseFloat(document.getElementById("2").value);
    var NR = (N1 ** N2)
      Resultado.innerHTML = NR ;
  }
  function Divisão(){
    if (!verificarPreenchimento()) return; // Verifica se os campos estão preenchidos
    var N1 = parseFloat(document.getElementById("1").value);
    var N2 = parseFloat(document.getElementById("2").value);
    var NR = (N1 / N2)
    Resultado.innerHTML =  NR ;
  }