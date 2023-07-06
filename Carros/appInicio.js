let carros=JSON.parse(localStorage.getItem("carros"));
if(!carros){  localStorage.setItem("carros",JSON.stringify([]));}

const mostrarCarros=(marca)=>{
    var carrosHTML="";
    motos=JSON.parse(localStorage.getItem("carros"))
    let i=1;
    if(marca=="0"){
        carros.map(carro=>{       
            if(i%2==1){carrosHTML+=`<div class="row W-50">`}
            carrosHTML+=`<div class="col">
                            <div class="card bg-white text-dark w-100 m-auto mb-2 p-4">
                                <img src="img.png" width="100%">
                                <p><b>${carro.nombre.toUpperCase()}</b></p>
                                <p><b>$${carro.precio}</b></p>
                                <button class="btn btn-primary" onclick="comprarMoto(${i})">Comprar</button>
                            </div>
                            </div>`
            if(i%2==0){carrosHTML+=`</div>`}
            i++;
        })
        }else{
            carro.map(carro=>{                
                if(marca==carro.marca){
                    if(i%2==1){carrosHTML+=`<div class="row W-50">`}
                carrosHTML+=`<div class="col">
                                <div class="card bg-white text-dark w-100 m-auto mb-2 p-4">
                                    <img src="img2.png" width="100%">
                                    <p><b>${carro.nombre.toUpperCase()}</b></p>
                                    <p><b>$${carro.precio}</b></p>
                                    <button class="btn btn-primary" onclick="comprarCarro(${i})">Comprar</button>
                                </div>
                                </div>`                          
                    if(i%2==0){carrosHTML+=`</div>`}
                    i++;
                }                
            })
        }
        
    document.querySelector("#listCarros").innerHTML=carrosHTML;
}
const mostrarCarros=()=>{
    var marcasHTML="";
    marcas=JSON.parse(localStorage.getItem("marcas"))
    marcasHTML+=`<option value="0">TODAS</option>`; 
    marcas.map(marca=>{
        marcasHTML+=`<option value="${marca.nombre}">${marca.nombre}</option>`;        
    })
    document.querySelector("#marca").innerHTML=marcasHTML;
}

