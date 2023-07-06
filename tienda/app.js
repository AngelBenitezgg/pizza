let productos = JSON.parse(localStorage.getItem("productos"));
if (!productos) {
  productos = [];
}

let categorias = JSON.parse(localStorage.getItem("categorias"));
if (!categorias) {
  categorias = [];
}

const mostrarCategorias = () => {
  var categoriasHTML = "";
  categoriasHTML += `<option value="TODAS">TODAS</option>`;
  categorias.map(categoria => {
    categoriasHTML += `<option value="${categoria.categoria}">${categoria.categoria}</option>`;
  });
  document.querySelector("#categoria").innerHTML = categoriasHTML;
};

const mostrarProductos = () => {
  var productosHTML = "";
  productos = JSON.parse(localStorage.getItem("productos"));
  let i = 1;
  let fila = 2;
  productos.map(producto => {
    if (i % 2 == 1) {
      productosHTML += `<div class="row W-50">`;
    }
    productosHTML += `<div class="col">
                        <div class="card bg-white text-dark w-100 m-auto mb-2 p-4">
                            <img src="img.jpg" width="100%">
                            <p><b>${producto.nombre.toUpperCase()}</b></p>
                            <p><b>$${producto.precio}</b></p>
                            <button class="btn btn-danger" onclick="comprarProducto(${i})">Comprar</button>
                        </div>
                      </div>`;
    if (i % 2 == 0) {
      productosHTML += `</div>`;
    }
    i++;
  });
  document.querySelector("#listProductos").innerHTML = productosHTML;
};


var add = document.querySelector("#agregar");
add.onclick = () => {
 
  let nombre = document.querySelector("#nombre").value;
  let precio = document.querySelector("#precio").value;
  let stock = document.querySelector("#stock").value;
  let categoria = document.querySelector("#categoria").value;


  if (nombre.trim() === '' || precio.trim() === '' || stock.trim() === '' || categoria.trim() === '') {
    Swal.fire({
      icon: 'error',
      title: 'ERROR',
      text: 'CAMPOS VACIOS',
      footer: 'CECYTEM 2023'
    });
    return;
  }

  let producto = { nombre, precio, stock, categoria };

  productos.push(producto);

  localStorage.setItem("productos", JSON.stringify(productos));

  document.querySelector("#formAdd").reset();

  document.querySelector("#addModalProducto").click();

  mostrarProductos();
};
mostrarCategorias();

mostrarProductos();
