let btnEvaluar=document.querySelector("#evaluar")
btnEvaluar.onclick=()=>{
    var correctas=[2,3,2,1,4,1,3,4,1,3,];
    var aciertos=0;
  for(i=1; i<=5; i++){
    let r1=document.querySelector("#p"+i+"r1");
    let r2=document.querySelector("#p"+i+"r2");
    let r3=document.querySelector("#p"+i+"r3");
    let r4=document.querySelector("#p"+i+"r4");
    if(!r1.checked&&!r2.checked&&!r3.checked&&!r4.checked){
      Swal.fire({
        icon:'error',
        title:'ERROR',
        text: 'FALTA SELECCIONAR RESPUESTA',
        footer:'Quiz' });
        return;
    }
    var correcta=document.querySelector("#p"+i+"r"+correctas[i-1]);
    if(correcta.checked){
      aciertos++;
    }
    if(aciertos>=4){
      Swal.fire({icon:'success',title:'APROBADO',text:'CALIFICACION'+(aciertos*2),footer:'Quiz'});
    }else{
      Swal.fire({icon:'error',title:'NO APROBADO',text:'CALIFICACION'+(aciertos*4),footer:'Quiz'});
    }
    let btnBorrar=document.querySelector("#borrar");
    btnBorrar.onclick=()=>{
    for(i=1; i<=10; i++){
    document.querySelector("#p"+i+"r1").checked=false;
    document.querySelector("#p"+i+"r2").checked=false;
    document.querySelector("#p"+i+"r3").checked=false;
    document.querySelector("#p"+i+"r4").checked=false;
  }
  }
}
}