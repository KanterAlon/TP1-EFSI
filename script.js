function calcularPromedio() {
    const notas = obtenerNotas();
    if(notas === null) return;
    let promedio = (notas.notaMatematica + notas.notaLengua + notas.notaEFSI) / 3;
    console.log(promedio);
 
  }

  function obtenerNotas()
  {
    let notaMatematica = document.getElementById("notaMatematica").value;
    let notaLengua = document.getElementById("notaLengua").value;
    let notaEFSI = document.getElementById("notaEFSI").value;
    
    if(notaMatematica === "" || notaLengua === "" || notaEFSI === ""){
        alert("Todos los campos son obligatorios.");
        return null;
      }

      notaMatematica = parseFloat(notaMatematica);
      notaLengua = parseFloat(notaLengua);
      notaEFSI = parseFloat(notaEFSI);

      if( notaMatematica < 1 || notaMatematica > 10 || notaLengua < 1 || notaLengua > 10 || notaEFSI < 1 || notaEFSI > 10){
     alert("Las notas deben ser números entre 1 y 10.");
     return null;
   }
   
   return { notaMatematica, notaLengua, notaEFSI };
  }