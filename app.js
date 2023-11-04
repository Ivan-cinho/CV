
const correo = document.querySelector(".fa-envelope");
const wa = document.querySelector(".fa-whatsapp");
const github = document.querySelector(".fa-github");
const linkedin = document.querySelector(".fa-linkedin");
const phone = document.querySelector(".fa-phone");
const botonCarta = document.querySelector(".botonCarta");
const botonFormacion = document.querySelector(".botonFormacion")
const botonExperiencia = document.querySelector(".botonExperiencia");
const botonReferencia = document.querySelector(".botonReferencia");
const botonCertificaciones = document.querySelector(".botonCertificaciones");
const Carta = document.querySelector(".Carta");
const Formacion = document.querySelector(".Formacion");
const Experiancia = document.querySelector(".Experiancia");
const Referencias = document.querySelector(".Referencias");
const Certificaciones = document.querySelector(".Certificaciones")




botonFormacion.addEventListener("click", ()=> {
    Formacion.style.display = 'block'
    Carta.style.display = 'none'
    Experiancia.style.display = 'none'
    Referencias.style.display = 'none'
    Certificaciones.style.display = "none"
})

botonExperiencia.addEventListener("click", ()=> {
    Formacion.style.display = 'none'
    Carta.style.display = 'none'
    Experiancia.style.display = 'block'
    Referencias.style.display = 'none'
    Certificaciones.style.display = "none"

})

botonReferencia.addEventListener("click", ()=> {
    Formacion.style.display = 'none'
    Carta.style.display = 'none'
    Experiancia.style.display = 'none'
    Referencias.style.display = 'block'
    Certificaciones.style.display = "none"

})

botonFormacion.addEventListener("click", ()=> {
    Formacion.style.display = 'block'
    Carta.style.display = 'none'
    Experiancia.style.display = 'none'
    Referencias.style.display = 'none'
    Certificaciones.style.display = "none"

})

botonCertificaciones.addEventListener("click", ()=> {
    Formacion.style.display = 'none'
    Carta.style.display = 'none'
    Experiancia.style.display = 'none'
    Referencias.style.display = 'none'
    Certificaciones.style.display = "block"

})

botonCarta.addEventListener("click", ()=> {
    Formacion.style.display = 'none'
    Carta.style.display = 'block'
    Experiancia.style.display = 'none'
    Referencias.style.display = 'none'
    Certificaciones.style.display = "none"

})


// carga de acordeones de las secciones formacion y experiencia
const acordeonExperiencia = document.querySelector("#acordeonExperiencia")
const acordeonFormacion = document.querySelector("#acordeonFormacion")

function cargarAcordeon(acordeon, array) {
    if (array.length > 0) {
        array.forEach(elemento => {
            acordeon.innerHTML += `<li class="list">
                                        <div class="otraClase">
                                            <a href="#" class="lugar">${elemento.lugar}</a><i class="fa-regular fa-chevron-down"></i>
                                        </div>
                                        <p class="descripcion">${elemento.descripcion}</p>
                                    </li>`
        });
    }
}
cargarAcordeon(acordeonExperiencia, datosExperiencia)
cargarAcordeon(acordeonFormacion, datosFormacion)

function animarAcordeon(acordeon){
    acordeon.addEventListener('click', (e)=> {
        if (e.target.classList.contains('otraClase')){
            e.target.parentElement.classList.toggle('scale')
        }
    })
}
animarAcordeon(acordeonExperiencia)
animarAcordeon(acordeonFormacion)

