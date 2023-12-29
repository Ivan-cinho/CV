const correo = document.querySelector(".fa-envelope");
const wa = document.querySelector(".fa-whatsapp");
const github = document.querySelector(".fa-github");
const linkedin = document.querySelector(".fa-linkedin");
const phone = document.querySelector(".fa-phone");
const Inicio = document.querySelector(".Inicio");
const Formacion = document.querySelector(".Formacion");
const Experiancia = document.querySelector(".Experiancia");
const Referencias = document.querySelector(".Referencias");
const Certificaciones = document.querySelector(".Certificaciones");
const holder = document.querySelector(".holder")

// aside 
// botonera de navegacion
const botonInicio = document.querySelector(".botonInicio");
const botonFormacion = document.querySelector(".botonFormacion")
const botonExperiencia = document.querySelector(".botonExperiencia");
// const botonSecciones = document.querySelectorAll(".botonSecciones");


// function cargarSecciones(seccion) {
//     botonSecciones.forEach(boton => {
//         boton.addEventListener("click", (e)=>{
//             seccion.style.display = 'block'
//         })
//     })
// }
// cargarSecciones(Formacion)
// cargarSecciones(Experiancia)
// cargarSecciones(Referencias)
// cargarSecciones(Certificaciones)

botonFormacion.addEventListener("click", ()=> {
    Formacion.style.display = 'block'
    Inicio.style.display = 'none'
    Experiancia.style.display = 'none'
    Referencias.style.display = 'none'
    Certificaciones.style.display = "none"
})

botonExperiencia.addEventListener("click", ()=> {
    Formacion.style.display = 'none'
    Inicio.style.display = 'none'
    Experiancia.style.display = 'block'
    Referencias.style.display = 'none'
    Certificaciones.style.display = "none"
})

botonInicio.addEventListener("click", ()=> {
    Formacion.style.display = 'none'
    Inicio.style.display = 'block'
    Experiancia.style.display = 'none'
    Referencias.style.display = 'none'
    Certificaciones.style.display = "none"
})

// datos personales y contacto
const Personales = document.querySelector(".Personales")
function cargarDatosPersonales(datos, array) {
    if(array.length > 0) {
        array.forEach(elemento => {
            datos.innerHTML = `<p>${elemento.edad}</p>
                                <p>${elemento.nacionalidad}</p>
                                <p>${elemento.dni}</p>
                                <p>${elemento.domicilio}</p>`
        })
    }
}
cargarDatosPersonales(Personales, datosPersonales)


// carga de pantalla de inicio
// carta de presentacion
const Carta = document.querySelector("#unaCarta");
function cargarCarta(carta) {
    carta.innerHTML =   `<p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur aliquid quaerat deserunt laborum libero
                            necessitatibus esse atque? Expedita necessitatibus, itaque iusto veritatis nisi nihil dolore repellendus
                            eius ducimus ea dolorum officiis ratione exercitationem suscipit illo, quasi ad, velit saepe sit
                            consequatur
                            eaque! Magni, numquam sit. Aliquam ipsa qui, veniam consequatur atque deserunt molestias repellat dolore
                            autem rerum ex quia dignissimos nemo quidem exercitationem amet quasi non officiis rem ipsam ut a? Harum
                            accusamus velit, soluta explicabo ratione iure alias. Deleniti ad incidunt consequuntur quasi fugit,
                            voluptatibus harum ipsa doloremque impedit repellendus mollitia quibusdam excepturi enim officiis. Quod
                            cupiditate provident tempore?
                        </p>`                            
}
cargarCarta(Carta)

// portafolios
const unPortafolios = document.querySelector("#unPortafolios")
function cargarPortafolios(seccion, array) {
    if(array.length > 0) {
        array.forEach(elemento => {
            seccion.innerHTML +=    `<div class="card" style="min-width: 18rem;">
                                        <div class="card-body">
                                            <h5 class="card-title">${elemento.titulo}</h5>
                                            <p>${elemento.descripcion}</p>
                                            <a href="#" class="card-link"><i class="fa-solid fa-phone"></i>${elemento.enlace}</a>
                                        </div>
                                    </div>`
        })
    }
}
cargarPortafolios(unPortafolios, datosPortafolios)

// formacion y experiencia
// carga de acordeones de las secciones formacion y experiencia
const acordeonExperiencia = document.querySelector("#acordeonExperiencia")
const acordeonFormacion = document.querySelector("#acordeonFormacion")

function cargarAcordeon(acordeon, array) {
    if (array.length > 0) {
        array.forEach(elemento => {
            acordeon.innerHTML += `<li class="list">
                                        <div class="otraClase">
                                            <h4 class="lugar">${elemento.lugar}</h4><i class="fa-solid fa-chevron-down"></i>
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
            e.target.children[1].classList.toggle('rotate')
        }
    })
}
animarAcordeon(acordeonExperiencia)
animarAcordeon(acordeonFormacion)



// carga de cards seccion referecnias y titulos y certificaciones
const contTarjetas = document.querySelector('#tarjetasReferencias')
const contCertificaciones = document.querySelector('#tarjetasCertificaciones')
function cargarTarjetasReferencias(tarjeta, array) {
    if(array.length > 0) {
        array.forEach(elemento => {
            tarjeta.innerHTML +=   `<div class="card" style="min-width: 18rem;">
                                        <div class="card-body">
                                            <h5 class="card-title">${elemento.nombre}</h5>
                                            <a href="#" class="card-link"><i class="fa-solid fa-phone"></i>${elemento.telefono}</a>
                                            <a href="#" class="card-link"><i class="fa-solid fa-envelope"></i>${elemento.correo}</a>
                                            <a href="${elemento.linkedin}" class="card-link"><i class="fa-brands fa-linkedin"></i></a>
                                        </div>
                                    </div>`
        })
    }
}
cargarTarjetasReferencias(tarjetasReferencias, datosReferencias)

function cargarTarjetasFormacion(tarjeta, array) {
    if(array.length > 0) {
        array.forEach(elemento => {
            tarjeta.innerHTML +=    `<div class="card" id="tarjetaCertis" style="min-width: 18rem;">
                                        <div class="card-body">
                                            <h5 class="card-title">${elemento.nombre}</h5>
                                            <P>${elemento.descripcion}</p>
                                            <a href="#" class="card-link" id=""><img class="imagen" src="${elemento.imagen}"></a>
                                        </div>
                                    </div>`
        })
    }
}
cargarTarjetasFormacion(tarjetasCertificaciones, datosCertificaciones)

const mostrarCertificado = () => {
    swal.fire({
        title: '¿Cómo puedo pagar mi seguro?',
        width: '50%',
        backdrop: 'true',
        imageUrl: 'imagenes/lacaja.svg',
        imageWidth: '10%',
        imageAlt: 'La caja',
        showConfirmButton: false
    })
}

const btnCertificado = document.querySelectorAll("#btnCertificado")
const botonCertificados = () => {
    if (btnCertificado !== null) {
        for (boton of btnCertificado) {
            boton.addEventListener("click", () => {
                mostrarCertificado()
            })
        }
    }
}

