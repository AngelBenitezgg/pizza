let carros=JSON.parse(localStorage.getItem("carros"));
if(!carros){  localStorage.setItem("carros",JSON.stringify([]));}
var add=document.querySelector("#agregar")
add.onclick=()=>{
    //RECOPILA DATOS
    let nombre=document.querySelector("#nombre").value;
    let precio=document.querySelector("#precio").value;
    let stock=document.querySelector("#stock").value;
    let marca=document.querySelector("#marca").value;
    //VALIDAR DATOS
    if(nombre.trim()===''||precio.trim()===''||stock.trim()===''||marca.trim()===''){
        Swal.fire({
            icon: 'error',
            title: 'ERROR',
            text: 'CAMPOS VACIOS',
            footer: 'CARROS'
        })
        return;
    }
    let carros={nombre,precio,stock, marca}
    motos.push(carro);
    localStorage.setItem("carros",JSON.stringify(carros))
    document.querySelector("#formAdd").reset();
    document.querySelector("#addModalCarro").click()
    mostrarCarros();
}

const mostrarCarros=()=>{
    var motosHTML="";
    carros=JSON.parse(localStorage.getItem("carros"))
    let i=1;
    carros.map(carro=>{
        carrosHTML+=`<div class="card bg-white text-dark w-25 m-auto mb-2 p-4">
        <p><b>Nombre: </b>${carro.nombre}</p>
        <p><b>Stock: </b>${carro.stock}</p>
        <p><b>Precio: </b>$${carro.precio}</p>
        <p><b>Marca: </b>${carro.marca}</p>
        <button class="btn btn-Primary" onclick="eliminarCarro(${i})">Eliminar</button>
        </div>`
        
    })
    document.querySelector("#listCarris").innerHTML=carrosHTML;
    mostrarMarcas();
}

const eliminarCarro=(id)=>{
    Swal.fire({
        title: 'Estas seguro de eliminar tu carro?',
        showDenyButton: true,
        confirmButtonText: 'SI',
        denyButtonText: 'NO',
    }).then((result) => {
        if (result.isConfirmed) {
            motos=JSON.parse(localStorage.getItem("carro"))
            let carros2=new Array();
            let i=1
            carros.map(carro=>{
                if(i!=id){
                    carros2.push(carro)
                }
                i++;
            })
            localStorage.setItem("carros",JSON.stringify(carros))
            mostrarCarro();         
        } else if (result.isDenied) {
            return;
        }
    })
}

const mostrarMarcas=()=>{
    var marcasHTML="";
    marcas=JSON.parse(localStorage.getItem("marcas"))
    marcas.map(marca=>{
        marcasHTML+=`<option value="${marca.nombre}">${marca.nombre}</option>`;        
    })
    document.querySelector("#marca").innerHTML=marcasHTML;
}