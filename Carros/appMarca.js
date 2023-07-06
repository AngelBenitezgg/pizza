let marcas=JSON.parse(localStorage.getItem("marcas"));
if(!marcas){  localStorage.setItem("marcas",JSON.stringify([]));}
var add=document.querySelector("#agregar")
add.onclick=()=>{
    //RECOPILA DATOS
    let nombre=document.querySelector("#nombre").value;
    //VALIDAR DATOS
    if(nombre.trim()===''){
        Swal.fire({
            icon: 'error',
            title: 'ERROR',
            text: 'CAMPO VACIO',
            footer: 'CARROS'
        })
        return;
    }
    let marca={nombre}
    marcas.push(marca);
    localStorage.setItem("marcas",JSON.stringify(marcas))
    document.querySelector("#formAdd").reset();
    document.querySelector("#addModalMarca").click()
    mostrarMarcas();
}

const mostrarMarcas=()=>{
    var marcasHTML="";
    marcas=JSON.parse(localStorage.getItem("marcas"))
    let i=1;
    marcas.map(marca=>{
        marcasHTML+=`<div class="card bg-white text-dark w-25 m-auto mb-2 p-4">
        <p><b>MARCA <br></b>${marca.nombre}</p>
        <button class="btn btn-Primary" onclick="eliminarMarca(${i})">Eliminar</button>
        </div>`
        
    })
    document.querySelector("#listMarcas").innerHTML=marcasHTML;
}

const eliminarMarca=(id)=>{
    Swal.fire({
        title: 'Estas seguro de eliminar marca?',
        showDenyButton: true,
        confirmButtonText: 'SI',
        denyButtonText: 'NO',
    }).then((result) => {
        if (result.isConfirmed) {
            marcas=JSON.parse(localStorage.getItem("marcas"))
            let marcas2=new Array();
            let i=1
            marcas.map(marca=>{
                if(i!=id){
                    marcas2.push(marca)
                }
                i++;
            })
            localStorage.setItem("marcas",JSON.stringify(marcas2))
            mostrarMarcas();         
        } else if (result.isDenied) {
            return;
        }
    })
}