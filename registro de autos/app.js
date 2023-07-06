let autos=JSON.parse(localStoragelocalStorage.getItem("autos"));
if(!autos){ localStorage.setItem("autos",JSON.stringify([]));}
var add=document.querySelector("#agregar")
add.onclick=()=>{
    //RECOPILA DATOS
    let marca=document.querySelector("#marca").value;
    let modelo=document.querySelector("#modelo").value;
    let año=document.querySelector("#año").value;
    let color=document.querySelector("#color").value;
    //VALIDAR DATOS
    if(marca.trim()===''||modelo.trim()===''||año.trim()===''||color.trim()===''){
        Swal.fire({
            icon: 'error',
            title: 'ERROR',
            text: 'CAMPOS VACIOS',
            footer: 'CECYTEM 2023'
        })
        return;
    }
    let auto={marca,modelo,año,color }
    auto.push(auto);
    localStorage.setItem("autos",JSON.stringify(autos))
    document.querySelector(“#formAdd”).reset();
    document.querySelector(“#addModalAuto”).click();
    mostrarAutos();
}
const mostrarAutos=()=>{
var autosHTML="";
autos=JSON.parse(localStorage.getItem(“autos”))
autos.map(auto=>{
  autosHTML+=‘<div class="card bg-white text-dark w-25 m-auto mb-2 p-4">
  </div>
}
    

}