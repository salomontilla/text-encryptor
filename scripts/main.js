const mediaQuery = window.matchMedia("(max-width: 768px)");
function hideInitialDiv() {
   document.getElementById("initial_state").style.display = "none";
   document.getElementById("final_state").style.display = "flex";
}

    