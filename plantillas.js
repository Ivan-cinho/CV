
//template strings

// seccion aside
// datos personales
function losDatosPersonales (dato) {
    return `<p>${dato.edad}</p>
            <p>${dato.nacionalidad}</p>
            <p>${dato.dni}</p>
            <p>${dato.domicilio}</p>`
}

// seccion inicio
// carta de presentacion
function laCarta(dato) {
    return `<p>${dato.carta}</p>`  
}


function losPortafolios(dato) {
    return `<div class="card cardPorta" style="min-width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${dato.titulo || 'Sin título'}</h5>
                    ${dato.descripcion ? `<p>${dato.descripcion}</p>` : ''}
                    ${dato.enlace ? `<a href="${dato.enlace}" target="_blank" class="card-link"><img id="${dato.id}" class="imagen" src="${dato.imagen || 'placeholder.jpg'}"></a>` : ''}
                    ${dato.referencia ? `<button class="btn btn-primary"><a class="referenciaPortafolios" href="${dato.referencia}" target="_blank">Referencia</a></button>` : ''}
                </div>
            </div>`;
}

// experiencia laboral y formacion
// acordeones
function losAcordeones(dato) {
    return  `<li class="list">
                <div class="otraClase">
                    <h4 class="lugar">${dato.lugar}</h4><i class="fa-solid fa-chevron-down"></i>
                </div>
                <p class="descripcion">${dato.descripcion}</p>
            </li>`
}


function lasReferencias(dato) {
    let cardContent = `<div class="card" style="min-width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">${dato.nombre}</h5>`;

    if (dato.telefono) {
        cardContent += `<p><i class="fa-solid fa-phone iconoCard"></i>${dato.telefono}</p>`;
    }

    if (dato.correo) {
        cardContent += `<p><i class="fa-solid fa-envelope iconoCard"></i>${dato.correo}</p>`;
    }

    if (dato.linkedin) {
        cardContent += `<a href="${dato.linkedin}" target="_blank" class="enlaceLinked"><i class="fa-brands fa-linkedin linkedRefes"></i></a>`;
    }

    cardContent += `</div></div>`;

    return cardContent;
}


// cards certificados
function losCertificados(dato) {
    return `<div class="card" id="tarjetaCertis" style="min-width: 18rem;">
                <div class="card-body">                                        
                    <h5 class="card-title">${dato.nombre}</h5>
                    <button class="card-link botonCertis" "><img id="${dato.id}" class="imagen" src="${dato.imagen}"></button>                                        
                </div>
            </div>`
}

// pop up certificados
function mostrarCertis(datos) {
    swal.fire({
        width: '50%',
        backdrop: 'true',
        imageUrl: datos.imagen,
        imageWidth: '70%',
        showConfirmButton: false,
        showClass: {
            popup: `
                animate__animated
                animate__fadeInUp
                animate__fast
                `
            },
            hideClass: {
                popup: `
                animate__animated
                animate__fadeOutDown
                animate__fast
                `
            }
    })  
}


// card error
function error() {
    return
}