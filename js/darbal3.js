
/* EFECTO APARECER con JAVASCRIPT */

window.addEventListener('scroll', function() {

    var imagen = document.querySelectorAll('.animado')[0]; //Clase animado

    var altura = window.innerHeight/1.3; //primer valor la altura de mi ventana

    var distancia =imagen.getBoundingClientRect().top;

    console.log(altura) //verifico en consola que me tome la altura y la distancia 
    console.log(distancia)

    imagen.classList.add('transform_dow')

    if(distancia <= altura){

        imagen.classList.add('aparece')

    } else {
        imagen.classList.remove('aparece')
    }

})


