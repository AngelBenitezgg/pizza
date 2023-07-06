let categorias = JSON.parse(localStorage.getItem("categorias"));
if (!categorias) {
  localStorage.setItem("categorias", JSON.stringify([]));
}

var add = document.querySelector("#agregar");
add.onclick = () => {
  let categoria = document.querySelector("#categoria").value;
  if (categoria.trim() === '') {
    Swal.fire({
      icon: 'error',
      title: 'ERROR',
      text: 'Campos vacios',
      footer: 'CECYTEM 2023'
    });
    return;
  }
  let cate = { categoria };
  categorias.push(cate);
  localStorage.setItem("categorias", JSON.stringify(categorias));
  document.querySelector("#addCategorias").reset();
  mostrarCategoria();
};

const mostrarCategoria = () => {
  var categoriasHTML = "";
  categorias = JSON.parse(localStorage.getItem("categorias"));
  let i = 1;
  categorias.map(cate => {
    categoriasHTML += `<div class="card bg-white text-dark w-50 m-auto mb-2 p-4">
    <p><b>Nombre: </b>${cate.categoria}</p>
    <button class="btn btn-danger" onclick="eliminarCategoria(${i})">Eliminar</button>
    </div>`;
    i++;
  });
  document.querySelector("#listCategorias").innerHTML = categoriasHTML;
};

const eliminarCategoria = (id) => {
  Swal.fire({
    title: '¿Estás seguro de eliminarlo?',
    showDenyButton: true,
    confirmButtonText: 'Sí',
    denyButtonText: 'No',
  }).then((result) => {
    if (result.isConfirmed) {
      categorias = JSON.parse(localStorage.getItem("categorias"));
      let categorias2 = new Array();
      let i = 1;
      categorias.map(cate => {
        if (i != id) {
          categorias2.push(cate);
        }
        i++;
      });
      localStorage.setItem("categorias", JSON.stringify(categorias2));
      mostrarCategoria();
    } else if (result.isDenied) {
      return;
    }
  });
};
