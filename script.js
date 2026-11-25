        const botones = document.querySelectorAll('.button-interactivo')
       
        botones.forEach(botones=> {
        botones.addEventListener("click", function() {
           botones.textContent = "¡Gracias por hacer clic!"
           botones.style.cursor = "not-allowed"
           botones.disabled = true
           botones.classList.add("is-active")
        });
        });