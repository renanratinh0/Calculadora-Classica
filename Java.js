function Somar(){
    var N1 = parseFloat(document.getElementById("1").value);
    var N2 = parseFloat(document.getElementById("2").value);
    var NR = (N1 + N2)
      Resultado.innerHTML = NR ;
  }
  function Menos(){
    var N1 = parseFloat(document.getElementById("1").value);
    var N2 = parseFloat(document.getElementById("2").value);
    var NR = (N1 - N2)
      Resultado.innerHTML = NR ;
    console.log(N1 - N2)
  }
  function Mutlipicar(){
    var N1 = parseFloat(document.getElementById("1").value);
    var N2 = parseFloat(document.getElementById("2").value);
    var NR = (N1 * N2)
      Resultado.innerHTML = NR ;
  }
  function Pontecia(){
    var N1 = parseFloat(document.getElementById("1").value);
    var N2 = parseFloat(document.getElementById("2").value);
    var NR = (N1 ** N2)
      Resultado.innerHTML = NR ;
  }
  function Divisão(){
    var N1 = parseFloat(document.getElementById("1").value);
    var N2 = parseFloat(document.getElementById("2").value);
    var NR = (N1 / N2)
    Resultado.innerHTML =  NR ;
  }