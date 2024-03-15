let cont = document.getElementById('contra');

 function crearContraseña() {
    let contraseña = "";
    let longitud = 12;
    let letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

    for (let i = 0; i < longitud; i++) {
        let letrasrandom = Math.floor(Math.random() * letras.length);
        contraseña += letras.substring(letrasrandom, letrasrandom + 1);
    }
    document.getElementById("contra").value = contraseña;
 }
//ANIMACION EN EL TITULO
//  const div = document.querySelector(".cabezera");
//  const text = "Generador de Contraseñas";

//  function textTypingEffect(element, text, i=0){
//     element.textContent += text[i];



//     setTimeout(()=>textTypingEffect(element,text,i + 1),50);
//  }

//  textTypingEffect(div,text); 


