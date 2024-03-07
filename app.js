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
// datos personales y contacto
const Personales = document.querySelector(".Personales")
function cargarDatosPersonales(datos, array) {
    if(array.length > 0) {
        array.forEach(elemento => {
            datos.innerHTML = losDatosPersonales(elemento)
        })
    }
}
cargarDatosPersonales(Personales, datosPersonales)


// mostrar medios de contacto

// envio de mail

function vaidarEnviarConsulta() {
    return (campoNombre.value !== "" &&  campoCorreo.value !== "" && campoTexto.value !== "")
}

const errorQuieroQueMeCotacten = () => {
    swal.fire ({
        title: 'Debe llenar los campos requeridos',
        icon: 'error',
        width: '70%',
        showConfirmButton: false,
        backdrop: 'true',
        html: '<button class="btn btn-danger" id="aceptar">Aceptar</button>'
    })
    const aceptar = document.getElementById("aceptar");
    aceptar.addEventListener ("click", () => {
        quieroQueMeContacten()
    })
}

const enlaceContacto = document.querySelector(".enlaceContacto")
const quieroQueMeContacten = () => {
    Swal.fire ({
        width: '50%',
        imageUrl: 'imagenes/lacaja.svg',
        imageWidth: '10%',
        showConfirmButton: false,
        title: 'Ingrese sus datos y sera contactado a la brevedad',
        html:   '<input class="form-control form-control-sm formQuieroQueMeContacten" name="from_name" id="campoNombre" type="text" placeholder="Nombre y apellido" aria-label=".form-control-lg">'+
                '<input class="form-control form-control-sm formQuieroQueMeContacten" name="email_id" id="campoCorreo" type="text" placeholder="Correo electronico" aria-label=".form-control-lg">'+
                '<textarea name="" class="form-control textAreaQuieroQueMeContacten" name="message" id="campoTexto" cols="20" rows="10" placeholder="Escriba su inquietud"></textarea>'+
                '<button class="btn btn-danger" id="enviar">Enviar</button>'
    })
    const campoNombre = document.querySelector("#campoNombre");
    const campoCorreo = document.getElementById("campoCorreo");
    const campoTexto = document.getElementById("campoTexto");
    const enviar = document.getElementById("enviar");
    enviar.addEventListener ("click", ()=> {
        if (vaidarEnviarConsulta()) {
            envioExitoso()
        } else {
            errorQuieroQueMeCotacten()
        }
    })
}

enlaceContacto.addEventListener("click", ()=>{
    quieroQueMeContacten()
})

// botonera de navegacion
const botonInicio = document.querySelector(".botonInicio");
const botonFormacion = document.querySelector(".botonFormacion")
const botonExperiencia = document.querySelector(".botonExperiencia");

botonFormacion.addEventListener("click", ()=> {
    Formacion.style.display = 'block'
    Inicio.style.display = 'none'
    Experiancia.style.display = 'none'
})

botonExperiencia.addEventListener("click", ()=> {
    Formacion.style.display = 'none'
    Inicio.style.display = 'none'
    Experiancia.style.display = 'block'
})

botonInicio.addEventListener("click", ()=> {
    Formacion.style.display = 'none'
    Inicio.style.display = 'block'
    Experiancia.style.display = 'none'
})

// carga de pantalla de inicio
// carta de presentacion
const unaCarta = document.querySelector("#unaCarta");
function cargarCarta(carta, array) {
    carta.innerHTML =  laCarta(array[0])                          
}
cargarCarta(unaCarta, cartaDePresentacion)

// portafolios
const unPortafolios = document.querySelector("#unPortafolios")
function cargarPortafolios(seccion, array) {
    if(array.length > 0) {
        array.forEach(elemento => {
            seccion.innerHTML +=  losPortafolios(elemento)
        })
    }
}
cargarPortafolios(unPortafolios, datosPortafolios)

// formacion y experiencia
// carga de acordeones de las secciones formacion y experiencia
const acordeonExperiencia = document.querySelector("#acordeonExperiencia")
const acordeonFormacion = document.querySelector("#acordeonFormacion")
const acordeonCursos = document.querySelector("#acordeonCursos")

function cargarAcordeon(acordeon, array) {
    if (array.length > 0) {
        array.forEach(elemento => {
            acordeon.innerHTML += losAcordeones(elemento)
        });
    }
}
cargarAcordeon(acordeonExperiencia, datosExperiencia)
cargarAcordeon(acordeonFormacion, datosSecundariaYSuperior)
cargarAcordeon(acordeonCursos, datosTecnicaturasYCursos)

function animarAcordeon(acordeon) {
    acordeon.addEventListener('click', (e) => {
        const targetElement = e.target.closest('.list');
        if (targetElement) {
            targetElement.classList.toggle('scale');
            targetElement.querySelector('.otraClase').children[1].classList.toggle('rotate');
        }
    });
}

// animacion de recuadro 
function ajustarAlturaSeccion() {
    const acordeones = document.querySelectorAll('.list');
    let alturaTotal = 0;

    acordeones.forEach(acordeon => {
        if (acordeon.classList.contains('scale')) {
            alturaTotal += acordeon.offsetHeight;
        }
    });
    miSeccion.style.height = alturaTotal + 'px';
}
animarAcordeon(acordeonExperiencia)
animarAcordeon(acordeonFormacion)
animarAcordeon(acordeonCursos)

// carga de cards seccion referecnias y titulos y certificaciones
const contTarjetas = document.querySelector('#tarjetasReferencias')
const contCertificaciones = document.querySelector('#tarjetasCertificaciones')
function cargarTarjetasReferencias(tarjeta, array) {
    if(array.length > 0) {
        array.forEach(elemento => {
            tarjeta.innerHTML += lasReferencias(elemento)
        })
    }
}
cargarTarjetasReferencias(tarjetasReferencias, datosReferencias)

function cargarTarjetasFormacion(tarjeta, array) {
    if(array.length > 0) {
        array.forEach(elemento => {
            tarjeta.innerHTML += losCertificados(elemento)
        })
    }
    activarClickDeBotones(datosCertificaciones)
}
cargarTarjetasFormacion(tarjetasCertificaciones, datosCertificaciones)

// click de botones de certificados
function activarClickDeBotones() {
    const botonesCertis = document.querySelectorAll(".botonCertis")
    for (boton of botonesCertis) {
        boton.addEventListener("click", (e) => {
            const botonId = e.target.id
            const datos =  obtenerDatos(botonId, datosCertificaciones)
            mostrarCertis(datos)
        })
    }
}
function obtenerDatos(botonId, datosCertificaciones) {
    const datos = datosCertificaciones.find(item => item.id === botonId)
    return datos
}










