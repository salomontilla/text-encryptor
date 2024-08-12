//this function encrypts the text 
function encrypt() {
   let textAreaContent = document.getElementById('textArea').value;
   let textElement = document.getElementById('textConverted');
   document.getElementById("btnCopiar").textContent = "Copiar";

   if (textAreaContent != '') {
      textElement.textContent = textAreaContent

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

//this function decrypt the text
function decrypt() {
   let textAreaContent = document.getElementById('textArea').value;
   let textElement = document.getElementById('textConverted');
   document.getElementById("btnCopiar").textContent = "Copiar";

   if (textAreaContent != '') {
      textElement.textContent = textAreaContent

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

//this function copies the text in the clipboard
function copy() {
   let text = document.getElementById("textConverted").textContent;
   navigator.clipboard.writeText(text);
   document.getElementById("btnCopiar").textContent = "Copiado!";
}
