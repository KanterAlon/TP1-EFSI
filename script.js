function calcularPromedio() {
    const datos = obtenerNotas();
    
    if (datos === null) {
      return;
    }
    
    let promedio = (datos.notaMatematica + datos.notaLengua + datos.notaEFSI) / 3;
    promedio = promedio.toFixed(1)
    const parrafo = document.getElementById("pResult");
    if (promedio>=6) 
    {
        parrafo.style.color = "green";
    }
    else
    {
        parrafo.style.color = "red";
    }
    parrafo.innerText = "Tu promedio es " + promedio;
  }
  
  function obtenerNotas() {

    const inputMatematica = document.getElementById("notaMatematica");
    const inputLengua = document.getElementById("notaLengua");
    const inputEFSI = document.getElementById("notaEFSI");
  

    const notaMatematica = parseFloat(inputMatematica.value);
    const notaLengua = parseFloat(inputLengua.value);
    const notaEFSI = parseFloat(inputEFSI.value);
  
    let valid = true;
  

    if (isNaN(notaMatematica) || notaMatematica < 1 || notaMatematica > 10) {
        inputMatematica.style.borderColor = "red";
        valid = false;
      } else {
        inputMatematica.style.borderColor = "green";
      }
      
      if (isNaN(notaLengua) || notaLengua < 1 || notaLengua > 10) {
        inputLengua.style.borderColor = "red";
        valid = false;
      } else {
        inputLengua.style.borderColor = "green";
      }
      
      if (isNaN(notaEFSI) || notaEFSI < 1 || notaEFSI > 10) {
        inputEFSI.style.borderColor = "red";
        valid = false;
      } else {
        inputEFSI.style.borderColor = "green";
      }
      

      if (valid) {
        const maxNota = Math.max(notaMatematica, notaLengua, notaEFSI);
      

        if (notaMatematica === maxNota) {
          inputMatematica.style.backgroundColor = "#00008077";
          inputMatematica.style.color = "white";
          inputMatematica.style.borderRadius = "5px";

        } else if (notaLengua === maxNota) {
          inputLengua.style.backgroundColor = "#00008077";
          inputLengua.style.color = "white";
          inputLengua.style.borderRadius = "5px";
        } else if (notaEFSI === maxNota) {
          inputEFSI.style.backgroundColor = "#00008077";
          inputEFSI.style.borderRadius = "5px";
          inputEFSI.style.color = "white";
        }
      }
      

    if (!valid) {
      alert("Por favor, ingresa notas válidas entre 1 y 10 en todos los campos.");
      return null;
    }
  
    return { notaMatematica, notaLengua, notaEFSI };
  }
  