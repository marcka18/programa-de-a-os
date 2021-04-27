let año1 = prompt("Ingrese el año actual");
let año2 = prompt("Ingrese otro año");
if (año2 < año1){ 
   console.log("Han pasado ", año1-año2,"años");
}else{ 
   if (año2 > año1) { 
      console.log("Hacen falta ", año2-año1, "años"); 
  }
}