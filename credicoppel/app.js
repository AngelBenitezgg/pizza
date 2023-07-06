let cantidad=document.querySelector("#cantidad");
let vc=document.querySelector("#vcan")

cantidad.oninput=()=>{vc.innerHTML=cantidad.value;calcular();}

const calcular=()=>{
  
    var tamaño=document.querySelector("#tamaño").value;
    var img=document.querySelector("#img");
    var precio=document.querySelector("#res")
    var cantidad=document.querySelector("#cantidad")
    var precioCr=document.querySelector("#total")
    var uno=document.querySelector("#m6");
    var dos=document.querySelector("#m12");
    var tres=document.querySelector("#m18");
    
    var ingrediente2=document.querySelector("#dos");
    var ingrediente3=document.querySelector("#tres");

var u=document.querySelector("#uno");
var d=document.querySelector("#dos");
var t=document.querySelector("#tres");
var refresco=40;
var papas=50;
var alitas=40;
var total=0;
var aumento=0;
var cost=0;
var costo=0;

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
    }git

    if (d.checked){
      cost=20;
    }
    if (t.checked){
      cost=35;
    }
    
    var contado=(costo+cost)*can;
    var cr=contado+aumento;
    var Total=0;
    
precio.innerHTML=`<h3>Precio: $${cr.toFixed(2)} MXN</h3>`


}