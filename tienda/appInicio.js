let categorias = JSON.parse(localStorage.getItem("categorias"));
if (!categorias) {
  categorias = [];
}

let productos = JSON.parse(localStorage.getItem("productos"));
if (!productos) {
  productos = [];
}

const mostrarCategorias = () => {
  var categoriasHTML = "";
  categoriasHTML += `<option value="TODAS">TODAS</option>`;
  categorias.map(categoria => {
    categoriasHTML += `<option value="${categoria.categoria}">${categoria.categoria}</option>`;
  });
  document.querySelector("#categoria").innerHTML = categoriasHTML;
  mostrarProductos();
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

mostrarCategorias();
