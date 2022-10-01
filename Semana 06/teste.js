function executarExercicio() {
    var r = Number(document.getElementById('a').value);
   
    var resultado;
     if (r > 0){
         resultado = "positivo";
     } else if (r < 0) {
         resultado = "negativo"
       }  else { 
           resultado = ("O valor é zero")
     }
   
     document.getElementById('resultado').innerHTML = resultado;   
   }
   