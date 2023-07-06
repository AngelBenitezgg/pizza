let autos = JSON.parse(localStorage.getItem("autos"));

if (!autos) {
  localStorage.setItem("autos", JSON.stringify([]));
}

var add = document.querySelector("#agregar");
add.onclick = () => {

  let marca = document.querySelector("#marca").value;
  let modelo = document.querySelector("#modelo").value;
  let año = document.querySelector("#año").value;
  let color = document.querySelector("#color").value;

  if (marca.trim() === '' || modelo.trim() === '' || año.trim() === '' || color.trim() === '') {
    Swal.fire({
      icon: 'error',
      title: 'ERROR',
      text: 'CAMPOS VACIOS',
      footer: 'CECYTEM 2023'
    });
    return;
  }
  let auto = { marca, modelo, año, color };
  autos.push(auto);
  localStorage.setItem("autos", JSON.stringify(autos));
  document.querySelector("#formAdd").reset();
  document.querySelector("#addModalAuto").click();
  mostrarAutos();
};

const mostrarAutos = () => {
  var autosHTML = "";
  autos = JSON.parse(localStorage.getItem("autos"));
  autos.map((auto, index) => {
    autosHTML += `<div class="card bg-white text-dark w-50" id="auto-${index}">
      <h1>Marca</h1>
      <p>${auto.marca}</p>
      <h1>Modelos</h1>
      <p>${auto.modelo}</p>
      <h1>Año</h1>
      <p>${auto.año}</p>
      <h1>Color</h1>
      <p>${auto.color}</p>
      <button class="btn btn-danger" onclick="confirmarEliminarAuto(${index})">Eliminar</button>
      </div>`;
  });
  document.querySelector("#listaAutos").innerHTML = autosHTML;
};

function confirmarEliminarAuto(index) {
  Swal.fire({
    icon: 'question',
    title: '¿Estás seguro?',
    text: 'Esta acción eliminará el auto',
    showCancelButton: true,
    confirmButtonText: 'Sí',
    cancelButtonText: 'No'
  }).then((result) => {
    if (result.isConfirmed) {
      eliminarAuto(index);
      Swal.fire({
        icon: 'success',
        title: 'Auto eliminado',
        text: 'El auto ha sido eliminado correctamente'
      });
    }
  });
}

function eliminarAuto(index) {
  autos = JSON.parse(localStorage.getItem("autos"));
  autos.splice(index, 1); 
  localStorage.setItem("autos", JSON.stringify(autos));
  mostrarAutos(); 
}
