let cantidad=document.querySelector("#cantidad");
let vc=document.querySelector("#vcan")

cantidad.oninput=()=>{vc.innerHTML=cantidad.value;calcular();}

const calcular=()=>{
  var precioC=document.querySelector("#precioC")
    var tamaño=document.querySelector("#tamaño").value;
    var img=document.querySelector("#img");
    var precio=document.querySelector("#precio")
    var cantidad=document.querySelector("#cantidad")
    var precioCr=document.querySelector("#total")
    var uno=document.querySelector("#m6");
    var dos=document.querySelector("#m12");
    var tres=document.querySelector("#m18");
    var costopizza=document.querySelector("costopizza");
var vc=document.querySelector("#vcan")
    var costo=0;
    var plazo=0;
    var aumento=0;
    var can=parseInt(cantidad.value)
    
    switch(tamaño){
        case "individual":costo=100;break;
        case "grande":costo=120;break;
        case "familiar":costo=150;break;
        case "jumbo":costo=180;break;
    }
    
    if (uno.checked){
      aumento=+40;
    }
    if(dos.checked){
      aumento+=50;
    }
    if(tres.checked){
      aumento+=75;
    }

    
    
    
    var contado=costo*can;
    var cr=contado+aumento;
    
precio.innerHTML=`<h3>Precio: $${cr.toFixed(2)} MXN</h3>`
precioC.innerHTML=`<h3>Precio: $${contado.toFixed(2)} MXN</h3>`
}