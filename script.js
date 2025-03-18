function calcularPromedio() {
  const datos = obtenerNotas();
  
  if (datos === null) {
    return;
  }
  
  let promedio = (datos.notaMatematica + datos.notaLengua + datos.notaEFSI) / 3;
  promedio = promedio.toFixed(1)
  const parrafo = document.getElementById("pResult");
  if (promedio >= 6) 
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

  const labelMatematica = document.getElementById("labelNotaMatematica");
  const labelLengua = document.getElementById("labelNotaLengua");
  const labelEFSI = document.getElementById("labelNotaEFSI");
  
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
      labelMatematica.style.backgroundColor = "#00008077";
      labelMatematica.style.color = "white";
      labelMatematica.style.fontWeight = "bold";
    } else {
      inputMatematica.style.backgroundColor = "";
      inputMatematica.style.color = "";
      labelMatematica.style.backgroundColor = "";
      labelMatematica.style.color = "";
      labelMatematica.style.fontWeight = "";
    }

    if (notaLengua === maxNota) {
      inputLengua.style.backgroundColor = "#00008077";
      inputLengua.style.color = "white";
      labelLengua.style.backgroundColor = "#00008077";
      labelLengua.style.color = "white";
      labelLengua.style.fontWeight = "bold";
    } else {
      inputLengua.style.backgroundColor = "";
      inputLengua.style.color = "";
      labelLengua.style.backgroundColor = "";
      labelLengua.style.color = "";
      labelLengua.style.fontWeight = "";
    }

    if (notaEFSI === maxNota) {
      inputEFSI.style.backgroundColor = "#00008077";
      inputEFSI.style.color = "white";
      labelEFSI.style.backgroundColor = "#00008077";
      labelEFSI.style.color = "white";
      labelEFSI.style.fontWeight = "bold";
    } else {
      inputEFSI.style.backgroundColor = "";
      inputEFSI.style.color = "";
      labelEFSI.style.backgroundColor = "";
      labelEFSI.style.color = "";
      labelEFSI.style.fontWeight = "";
    }
    }

  if (!valid) {
    alert("Por favor, ingresa notas válidas entre 1 y 10 en todos los campos.");
    return null;
  }
  
  return { notaMatematica, notaLengua, notaEFSI };
}