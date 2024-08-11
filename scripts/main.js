
function encrypt() {
   let contenido = document.getElementById('textArea').value;
   let textElement = document.getElementById('textConverted');

   if (contenido != '') {
      textElement.textContent = contenido

         .replace(/e/g, 'enter')
         .replace(/i/g, 'imes')
         .replace(/o/g, 'ober')
         .replace(/u/g, 'ufat')
         .replace(/a/g, 'ai');

      document.getElementById("initial_state").style.display = "none";
      document.getElementById("final_state").style.display = "flex";
   } else {
      document.getElementById("initial_state").style.display = "flex";
      document.getElementById("final_state").style.display = "none";
   }


}
function decrypt() {
   let contenido = document.getElementById('textArea').value;
   let textElement = document.getElementById('textConverted');

   if (contenido != '') {
      textElement.textContent = contenido

         .replace(/enter/g, 'e')
         .replace(/imes/g, 'i')
         .replace(/ober/g, 'o')
         .replace(/ufat/g, 'u')
         .replace(/ai/g, 'a');

      document.getElementById("initial_state").style.display = "none";
      document.getElementById("final_state").style.display = "flex";

   } else {
      document.getElementById("initial_state").style.display = "flex";
      document.getElementById("final_state").style.display = "none";
   }
}


async function copy() {
   let text = document.getElementById("textConverted").textContent;
   navigator.clipboard.writeText(text);
}
