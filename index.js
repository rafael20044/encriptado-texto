const hasMap = new Map();
const hasMapInvertido = new Map();
let textoEncriptado = [];
let textoDesencriptado = []
llenarHasmap();
llenarHasmapInvertido();
contadorCaracteres();

function llenarHasmap() {
    hasMap.set("a", "ai");
    hasMap.set("e", "enter");
    hasMap.set("i", "imes");
    hasMap.set("o", "ober");
    hasMap.set("u", "ufat");
}

function llenarHasmapInvertido() {
    hasMapInvertido.set("ai", "a");
    hasMapInvertido.set("enter", "e");
    hasMapInvertido.set("imes", "i");
    hasMapInvertido.set("ober", "o");
    hasMapInvertido.set("ufat", "u");
}

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

function contadorCaracteres() {
    const textoArea = document.getElementById("input");
    const contador = document.getElementById("contador");
    textoArea.addEventListener("input",function(){
        let texto = textoArea.value;
        let caracteres = texto.length;
        contador.textContent =`caracteres ${caracteres}/100`;
    });
}