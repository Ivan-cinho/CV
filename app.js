
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
const accordionExperiencia = document.querySelector(".accordionExperiencia")
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

// bloque de acordeon del gallego
// function cargarDatos(accordion, array) {
//     if (array.length > 0) {
//         array.forEach(elemento => {
//             accordion.innerHTML += `<div class="acordeon">
//                                         <div class="bloque activo">
//                                         <i class="fa-regular fa-chevron-down"></i>
//                                             <h4 class="h4">${elemento.lugar}</h4>
//                                             <p class="contenido">${elemento.descripcion}</p>
//                                         </div>
//                                     </div>`
//         });
//     }
// }
// cargarDatos(Experiancia, datosExperiencia)
// cargarDatos(Formacion, datosFormacion)

// const bloque = document.querySelectorAll(".bloque")
// const h4 = document.querySelectorAll(".h4")

// h4.forEach( ( cadaH4 , i)=> {
//     h4[i].addEventListener('click', ()=> {
//         bloque.forEach( ( cadaBloque, i)=> {
//             bloque[i].classList.remove('activo')
//         })
//         bloque[i].classList.add('activo')
//     })
// })


// bloque de acordeon del mexicano

function cargarDatos(accordion, array) {
    if (array.length > 0) {
        array.forEach(elemento => {
            accordion.innerHTML += `<div id="contenedorAcordeon">
                                        <nav class="menu">
                                            <ul>
                                                <li class="list">
                                                    <div class="otraClase">
                                                        <a href="#" class="lugar">${elemento.lugar}</a><i class="fa-regular fa-chevron-down"></i>
                                                    </div>
                                                    <p class="descripcion">${elemento.descripcion}</p>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>`
        });
    }
}
cargarDatos(Experiancia, datosExperiencia)
cargarDatos(Formacion, datosFormacion)

const acordeon = document.querySelectorAll(".acordeon")
const contenedorAcordeon = document.getElementById("contenedorAcordeon")


contenedorAcordeon.addEventListener('click', (e)=> {
    if (e.target.classList.contains('otraClase')){
        e.target.parentElement.classList.toggle('scale')
    }
})