        const boton = document.querySelector('#super_boton')
        console.log(boton)
        
        boton.addEventListener("click", function() {
           boton.textContent = "¡Gracias por hacer clic!"
           boton.style.backgroundColor = "green"
           boton.style.cursor = "not-allowed"
           boton.disabled = true
        }); 
    

    