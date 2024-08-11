
function encrypt() {
   let textarea = document.getElementById('textArea');    
   let contenido = textarea.value;
   let textElement = document.getElementById('textConverted');

   if(contenido != ''){
      textElement.textContent = contenido
      
      .replace('e', 'enter')
      .replace('i', 'imes')
      .replace('o', 'ober')
      .replace('u', 'ufat')
      .replace('a', 'ai');
       
      document.getElementById("initial_state").style.display = "none";
      document.getElementById("final_state").style.display = "flex";
   }
   
   
}
function decrypt(){

}

    