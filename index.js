// Mapa para la encriptación
const hasMap = new Map(); // Lo llamé hasMap porque en Java los diccionarios se llaman HashMap
// Mapa para la desencriptación
const hasMapInvertido = new Map();
// Array para almacenar el texto encriptado
let textoEncriptado = [];
// Array para almacenar el texto desencriptado
let textoDesencriptado = [];

// Llenar los mapas de encriptación y desencriptación
llenarHasmap();
llenarHasmapInvertido();
// Iniciar el contador de caracteres
contadorCaracteres();

/**
 * Llena el mapa de encriptación con las letras y sus sustituciones encriptadas.
 */
function llenarHasmap() {
    hasMap.set("a", "ai");
    hasMap.set("e", "enter");
    hasMap.set("i", "imes");
    hasMap.set("o", "ober");
    hasMap.set("u", "ufat");
}

/**
 * Llena el mapa de desencriptación con las sustituciones encriptadas y sus letras originales.
 */
function llenarHasmapInvertido() {
    hasMapInvertido.set("ai", "a");
    hasMapInvertido.set("enter", "e");
    hasMapInvertido.set("imes", "i");
    hasMapInvertido.set("ober", "o");
    hasMapInvertido.set("ufat", "u");
}

/**
 * Encripta el texto ingresado en el área de texto.
 * Convierte cada letra según el mapa de encriptación y muestra el resultado.
 */
function encriptar() {
    const texto_input = document.getElementById("input").value;
    let charArray = [...texto_input];
    if (texto_input != "") {
        if (charArray.length <= 100) {
            textoEncriptado = charArray.map(char => hasMap.get(char) || char);
            agregarResultado(textoEncriptado);
        } else {
            alert("El numero de caracteres debe de ser menor que 100");
        }
    } else {
        alert("Ingrese texto");
    }
}

/**
 * Desencripta el texto ingresado en el área de texto.
 * Convierte cada sustitución encriptada según el mapa de desencriptación y muestra el resultado.
 */
function desencriptar() {
    const texto_input = document.getElementById("input").value;
    if (texto_input != "") {
        let tempTexto = texto_input;
        hasMapInvertido.forEach((value, key) => {
            tempTexto = tempTexto.split(key).join(value);
        });
        textoDesencriptado = [...tempTexto];
        agregarResultado(textoDesencriptado);
    } else {
        alert("Ingrese texto");
    }
}

/**
 * Muestra el resultado encriptado o desencriptado en la interfaz.
 * Oculta la imagen y el mensaje predeterminado y muestra el botón de copiar.
 * @param {Array} textoRes - El texto resultante (encriptado o desencriptado) como un array de caracteres.
 */
function agregarResultado(textoRes) {
    console.log(textoRes);
    const img = document.getElementById("imagen");
    const texto = document.getElementById("h1");
    const mensaje = document.getElementById("p");
    const boton = document.getElementById("botonCopiar");
    const textoResultado = document.getElementById("textoResultado");

    img.style.visibility = "hidden";
    mensaje.style.visibility = "hidden";
    texto.style.visibility = "hidden";
    boton.style.visibility = "visible";

    textoResultado.textContent = textoRes.join("");
}

/**
 * Copia el texto resultante al portapapeles.
 * Muestra una alerta confirmando que el texto ha sido copiado.
 */
function copiar() {
    const textoCopiar = document.getElementById("textoResultado").textContent;
    const textoAreaTemporal = document.createElement("textarea");
    textoAreaTemporal.value = textoCopiar;
    document.body.appendChild(textoAreaTemporal);
    textoAreaTemporal.select();
    document.execCommand("copy");
    document.body.removeChild(textoAreaTemporal);
    alert("¡Texto copiado!");
}

/**
 * Inicia un contador de caracteres para el área de texto.
 * Actualiza el contador en tiempo real mientras el usuario escribe.
 */
function contadorCaracteres() {
    const textoArea = document.getElementById("input");
    const contador = document.getElementById("contador");
    textoArea.addEventListener("input", function() {
        let texto = textoArea.value;
        let caracteres = texto.length;
        contador.textContent = `caracteres ${caracteres}/100`;
    });
}
