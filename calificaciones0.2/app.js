let modulo=document.querySelector("#modulo");
let calculo=document.querySelector("#calculo");
let ingles=document.querySelector("#ingles");
let fisica=document.querySelector("#fisica");
let ecologia=document.querySelector("#ecologia");
let res=document.querySelector("#promedio");

modulo.oninput=()=>{calcular();}
calculo.oninput=()=>{calcular();}
ingles.oninput=()=>{calcular();}
fisica.oninput=()=>{calcular();}
ecologia.oninput=()=>{calcular();}

const calcular=()=>{
  document.querySelector("#cm").innerHTML=modulo.value;
  document.querySelector("#cc").innerHTML=calculo.value;
  document.querySelector("#ci").innerHTML=ingles.value;
 document.querySelector("#cf").innerHTML=fisica.value;
  document.querySelector("#ce").innerHTML=ecologia.value;

let m=parseFloat(modulo.value)
let c=parseFloat(calculo.value)
let i=parseFloat(ingles.value)
let f=parseFloat(fisica.value)
let e=parseFloat(ecologia.value)
let promedio=(m+c+i+f+e)/5;
res.innerHTML=promedio.toFixed(1);
if(promedio>=5&&promedio<7){
  res.className="bg-danger text-white";
  
}else if(promedio>=7&&promedio<9){
  res.className="bg-warning text-white";
}else{
  res.className="bg-success text-white";
}
}