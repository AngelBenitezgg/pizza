function convertir() {
  var cantidad = document.getElementById("cantidad").value;
  var de = document.getElementById("de").value;
  var a = document.getElementById("a").value;
  var grados = 0;
  
  if (de === "1") { 
    if (a === "2") { 
      grados = (cantidad - 32) * 5 / 9;
    } else if (a === "3") { 
      grados = (cantidad + 459.67) * 5 / 9;
    } else if (a === "4") { 
      grados = cantidad + 459.67;
    } else if (a === "5") { 
      grados = (cantidad - 32) * 4 / 9;
    }
  } else if (de === "2") { 
    if (a === "1") { 
      grados = (cantidad * 9 / 5) + 32;
    } else if (a === "3") {
      grados = cantidad + 273.15;
    } else if (a === "4") { 
      grados = (cantidad + 273.15) * 9 / 5;
    } else if (a === "5") { 
      grados = cantidad * 4 / 5;
    }
  } else if (de === "3") { 
    if (a === "1") { 
      grados = (cantidad * 9 / 5) - 459.67;
    } else if (a === "2") { 
      grados = cantidad - 273.15;
    } else if (a === "4") { 
      grados = cantidad * 9 / 5;
    } else if (a === "5") { 
      grados = (cantidad - 273.15) * 4 / 5;
    }
  } else if (de === "4") { 
    if (a === "1") { 
      grados = cantidad - 459.67;
    } else if (a === "2") { 
      grados = (cantidad - 491.67) * 5 / 9;
    } else if (a === "3") { 
      grados = cantidad * 5 / 9;
    } else if (a === "5") {
      grados = (cantidad - 491.67) * 4 / 9;
    }
  } else if (de === "5") { 
    if (a === "1") { 
      grados = (cantidad * 9 / 4) + 32;
    } else if (a === "2") { 
      grados = cantidad * 5 / 4;
    } else if (a === "3") { 
      grados = (cantidad * 5 / 4) + 273.15;
    } else if (a === "4") { 
      grados = (cantidad * 9 / 4) + 491.67;
    }
  }

  document.getElementById("grados").textContent = "Grados: " + grados.toFixed(2);
}

function actualizarValor() {
  var valor = document.getElementById("cantidad").value;
  document.getElementById("valor").textContent = valor;
}

