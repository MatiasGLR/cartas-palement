function crearcarta() {
    const nombre = document.querySelector("#nombre").value;
    const color_nombre = document.querySelector("#color-nombre").value;
    const sombra = document.querySelector("#color-nombre-sombra").value;
    const elemento = document.querySelector("#elemento").value;
    const imagen = document.querySelector("#imagen").value;
    const texto = cambiariconos(document.querySelector("#texto").value);
    const rareza = document.querySelector("#rareza").value;
    const numero = document.querySelector("#numero").value;
    const color = document.querySelector("#color").value;
    const tipo_carta = document.querySelector("#tipo_carta").value;
    const costo_1 = document.querySelector("#costo_1").value;
    const costo_1_tipo = document.querySelector("#costo_1_tipo").value;
    const costo_2 = document.querySelector("#costo_2").value;
    const costo_2_tipo = document.querySelector("#costo_2_tipo").value;
    const costo_3 = document.querySelector("#costo_3").value;
    const costo_3_tipo = document.querySelector("#costo_3_tipo").value;
//<img src="Clanes/cat.png" alt="Marco Inferior" class="clan-icono">
    const carta = document.querySelector(".cards").innerHTML = `
        <div class="nombre-carta">${nombre}</div>
        <img src="${elemento}/marcosup.png" alt="Marco Superior" class="marco-arriba">
        <img src="${tipo_carta == "Hechizo" ? "Hechizos" : "Cartas"}/${imagen}" alt="Fondo de la Carta" class="fondo-carta">
        
        <img src="${elemento}/marcoinf.png" alt="Marco Inferior" class="marco-abajo">
        <img src="${elemento}/caja.png" alt="Marco Inferior" class="marco-fondo">
        ${elemento !== "Abominación" ?
            `<img src="${elemento}/icono.png" alt="Marco Inferior" class="marco-icono">
            <div class="texto-bajo">
                <h5>${formatNumber(numero)}</h5>
                <h5>Zyon</h5>
            </div>
            <div class="texto-centro" id="texto">
                ${texto}
            </div>
            <div class="rareza" style="color:${color_nombre}">
                ${rareza}
            </div>
            <div style="position:relative; height:100%">
            ${tipo_carta == "Hechizo" ? `
                ${costo_1_tipo != "" ? `
                    <div class="hechizocosto1" style="background-image: url('${costo_1_tipo}/hexagono.png')"><p class="numero_costo">${costo_1}</p></div>` : ``
                }
                ${costo_2_tipo != "" ? `
                    <div class="hechizocosto2" style="background-image: url('${costo_2_tipo}/hexagono.png')"><p class="numero_costo">${costo_2}</p></div>` : ``
                }
                ${costo_3_tipo != "" ? `
                    <div class="hechizocosto3" style="background-image: url('${costo_3_tipo}/hexagono.png')"><p class="numero_costo">${costo_3}</p></div>` : ``
                }
            `:``}</div>`:
            `<div class="texto-bajo">
                <h5>${formatNumber(numero)}</h5>
                <h5>Zyon</h5>
            </div>
            <div class="texto-centro" style="color:${color}" id="texto">
                ${texto}
            </div>
            <div class="rareza" style="color:${color_nombre}">
                ${rareza}
            </div>
            `
        }
    `;

    ajustarTexto();

    const textoCentro = document.querySelector(".texto-centro");
    if (textoCentro) {
        textoCentro.style.color = color;  // Asigna el color directamente
    }

    const nombreCarta = document.querySelector(".nombre-carta");
    if (nombreCarta) {
        nombreCarta.style.color = color_nombre;  // Asigna el color directamente
        nombreCarta.style.textShadow = `0px 0px 5px ${sombra}, 
                                    0px 0px 10px ${sombra}, 
                                    0px 0px 15px ${sombra}, 
                                    0px 0px 20px ${sombra}`;  // Asigna el color directamente

    }

    document.querySelector(".rareza").style.textShadow = `0px 0px 5px ${sombra}, 
                                    0px 0px 10px ${sombra}, 
                                    0px 0px 15px ${sombra}, 
                                    0px 0px 20px ${sombra}`;  // Asigna el color directamente

    if(rareza == "●") document.querySelector(".rareza").style.top = "6.7%";

    if(rareza == "▲") {
        document.querySelector(".rareza").style.top = "9.4%";
        document.querySelector(".rareza").style.fontSize = "40px";
    }

    if(rareza == "◆") {
        document.querySelector(".rareza").style.top = "9.9%";
        document.querySelector(".rareza").style.fontSize = "40px";
    }

    if(rareza == "✦") {
        document.querySelector(".rareza").style.top = "8.7%";
        document.querySelector(".rareza").style.fontSize = "50px";
    }

    if(rareza == "★") {
        document.querySelector(".rareza").style.top = "8.2%";
        document.querySelector(".rareza").style.fontSize = "50px";
    }

    if(rareza == "✪") {
        document.querySelector(".rareza").style.top = "8.5%";
        document.querySelector(".rareza").style.fontSize = "50px";
    }

    ajustarFondo();

    crearimagen();
}

function formatNumber(number) {
    const tipocarta = document.querySelector("#tipo_carta").value;
    let numero = "";
    if(tipocarta == "Hechizo") numero = "H";
    else numero = "A";
    return numero + number.toString().padStart(4, '0');
}

function cambiariconos(texto) {
    // Usamos un array para almacenar las partes del texto
    let partes = texto.split(/(\btr\d*;|\bti\d*;|\bfu\d*;|\bfa\d*;|\bag\d*;|\btu\d*;|\bat\d*;)/g);

    let colorTexto = document.querySelector("#color").value;

    let textoConIconos = partes.map(p => {
        if (/tr\d*;/.test(p)) {
            let numero = p.match(/\d+/)?.[0] || '';
            let icono = '<i class="fa-solid fa-bolt"></i>';
            let color = colorTexto;
            return `<span class="yellow" style="color: ${color};">${numero ? numero + icono : icono}</span>`;
        } else if (/ti\d*;/.test(p)) {
            let numero = p.match(/\d+/)?.[0] || '';
            let icono = '<i class="fa-solid fa-earth-americas"></i>';
            let color = colorTexto;
            return `<span class="green" style="color: ${color};">${numero ? numero + icono : icono}</span>`;
        } else if (/fu\d*;/.test(p)) {
            let numero = p.match(/\d+/)?.[0] || '';
            let icono = '<i class="fa-solid fa-fire"></i>';
            let color = colorTexto;
            return `<span class="red" style="color: ${color};">${numero ? numero + icono : icono}</span>`;
        } else if (/fa\d*;/.test(p)) {
            let numero = p.match(/\d+/)?.[0] || '';
            let icono = '<i class="fa-solid fa-ghost"></i>';
            let color = colorTexto;
            return `<span class="purple" style="color: ${color};">${numero ? numero + icono : icono}</span>`;
        } else if (/ag\d*;/.test(p)) {
            let numero = p.match(/\d+/)?.[0] || '';
            let icono = '<i class="fa-solid fa-droplet"></i>';
            let color = colorTexto;
            return `<span class="blue" style="color: ${color};">${numero ? numero + icono : icono}</span>`;
        } else if (/tu\d*;/.test(p)) {
            let numero = p.match(/\d+/)?.[0] || '';
            let color = numero === '' ? 'transparent' : 'black';
            if(numero === '') numero = 0;
            return `<span class='circle-number white' style="color: ${color};">${numero}</span>`;
        } else if (/at\d*;/.test(p)) {
            let numero = p.match(/\d+/)?.[0] || '';
            let icono = '<i class="fa-brands fa-rebel"></i>';
            let color = colorTexto;
            return `<span class="orange" style="color: ${color};">${numero ? numero + icono : icono}</span>`;
        } else {
            return `<span class="highlighted-text">${p}</span>`;
        }
    });

    return textoConIconos.join('');
}

function ajustarFondo() {
    const textoCentro = document.querySelector('.texto-centro');
    const fondo = document.querySelector('.marco-fondo');

    document.querySelector(".fondo-carta").style.top = ""+document.querySelector("#ajuste_altura_imagen").value+"px";
    document.querySelector(".fondo-carta").style.height = ""+document.querySelector("#ajuste_tamaño_imagen").value+"%";
    document.querySelector(".fondo-carta").style.transform = `translateX(${document.querySelector("#ajuste_horizontal_imagen").value}px)`;

    if (textoCentro && fondo) {
        // Obtener la altura del contenido de texto
        const alturaTexto = textoCentro.offsetHeight;

        // Ajustar la posición del fondo para que suba con más texto
        fondo.style.top = `calc(55% - ${alturaTexto}px)`; // Se sube a medida que el texto crece

        if(document.querySelector(".hechizocosto1")) document.querySelector(".hechizocosto1").style.top = `calc(69% - ${alturaTexto}px)`; // Se sube a medida que el texto crece
        if(document.querySelector(".hechizocosto2")) document.querySelector(".hechizocosto2").style.top = `calc(69% - ${alturaTexto}px)`; // Se sube a medida que el texto crece
        if(document.querySelector(".hechizocosto3")) document.querySelector(".hechizocosto3").style.top = `calc(69% - ${alturaTexto}px)`; // Se sube a medida que el texto crece
    }

}

function ajustarTexto() {
    const nombreCarta = document.querySelector('.nombre-carta');
    if (nombreCarta) {
        const textoLength = nombreCarta.textContent.length;

        // Ajustar el tamaño de la fuente según la longitud del texto
        if (textoLength > 15) {
            nombreCarta.style.fontSize = 'calc(16px + 0.3vw)';  // Reduce el tamaño si el texto es largo
            nombreCarta.style.top = '1%';  // Reduce el tamaño si el texto es largo
        } else if (textoLength > 10) {
            nombreCarta.style.fontSize = 'calc(16px + 0.4vw)';  // Ajuste mediano
            nombreCarta.style.top = '0.9%';  // Ajuste mediano
        } else {
            nombreCarta.style.fontSize = 'calc(16px + 0.5vw)';  // Ajuste para textos pequeños
            nombreCarta.style.top = '0.8%';  // Ajuste para textos pequeños
        }
    }
}

function crearimagen() {
    const div = document.querySelector(".cards");

    // Usamos html2canvas para capturar el div
    html2canvas(div, {
        useCORS: true, // Permite CORS para cargar imágenes externas
        allowTaint: false, // Desactiva la "contaminación" de canvas por imágenes no CORS
        backgroundColor: null  // Esto asegura que el fondo sea transparente y no cause bordes blancos
    }).then(function (canvas) {
        const img = canvas.toDataURL("image/png");
        const resultado = document.getElementById("resultado");

        // Mostrar la imagen generada en el resultado
        resultado.innerHTML = `<img src="${img}" alt="Imagen PNG">`;

        // Crear el enlace para descargar la imagen
        const enlaceDescarga = document.createElement('a');
        enlaceDescarga.href = img;
        enlaceDescarga.download = 'captura.png';
        enlaceDescarga.innerText = 'Descargar Imagen';
        resultado.appendChild(enlaceDescarga);
    }).catch(function (error) {
        console.error("Error al capturar el div:", error);
        alert("Ocurrió un error al intentar capturar el div. Asegúrate de que las imágenes se carguen correctamente.");
    });
}

document.getElementById("descargarBtn").addEventListener("click", crearimagen());