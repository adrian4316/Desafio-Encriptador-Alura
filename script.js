const textArea = document.querySelector('.caja-texto')
const resultado = document.querySelector('.resultado')

function botonEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    resultado.textContent = textoEncriptado;
    textArea.value = "";

    const ocultarElementos = document.querySelectorAll('.muneco, .parrafos-resultado, .primer-parrafo, .segundo-parrafo');
    ocultarElementos.forEach(elemento => {
        elemento.style.display = 'none';
    });
}

function encriptar(stringEncriptar){
    let codigoMatriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptar = stringEncriptar.toLowerCase()

    for(let i = 0; i < codigoMatriz.length; i++){
        if(stringEncriptar.includes(codigoMatriz[i][0])){
            stringEncriptar = stringEncriptar.replaceAll(codigoMatriz[i][0], codigoMatriz[i][1])
        }
    }
    return stringEncriptar
}

function botonDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value);
    resultado.textContent = textoEncriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptar){
    let codigoMatriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptar = stringDesencriptar.toLowerCase()

    for(let i = 0; i < codigoMatriz.length; i++){
        if(stringDesencriptar.includes(codigoMatriz[i][1])){
            stringDesencriptar = stringDesencriptar.replaceAll(codigoMatriz[i][1], codigoMatriz[i][0])
        }
    }
    return stringDesencriptar
}

function botonCopiar() {
    const contenido = document.querySelector(".resultado").textContent;
    navigator.clipboard.writeText(contenido).then(() => {
        console.log("Texto copiado al portapapeles");
    }).catch(err => {
        console.error("Error al copiar el texto: ", err);
    });
}