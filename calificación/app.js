let cali=document.querySelector("#cali");
let res=document.querySelector("#res");
cali.oninput=()=>{
  document.querySelector("#vc").innerHTML=cali.value;
  if(cali.value=="10"||cali.value=="9"){res.innerHTML="EXELENTE"}
  else if(cali.value=="8"||cali.value=="7"){res.innerHTML="BUENO"}
  else if(cali.value=="6"){res.innerHTML="REGULAR"}
  else{res.innerHTML="NO SATISFACTORIO"}
  
}