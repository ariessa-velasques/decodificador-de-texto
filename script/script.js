const textoParaCriptografar = document.querySelector("#textoParaCriptografar");
const mensagemPadrao = document.querySelector("#mensagemPadrao");
const resultadoContainer = document.querySelector("#resultado__container");
const textoResultado = document.querySelector("#textoResultado");

const botaoCriptografar = document.querySelector("#botaoCriptografar");
const botaoDescriptografar = document.querySelector("#botaoDescriptografar");
const botaoCopiar = document.querySelector("#botaoCopiar");

const regras = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
};

function processarTexto(texto, operacao) {
    let resultado = texto;
    for (const vogal in regras) {
        const substituto = regras[vogal];
        if (operacao === 'criptografar') {
            resultado = resultado.replaceAll(vogal, substituto);
        } else { 
            resultado = resultado.replaceAll(substituto, vogal);
        }
    }
    return resultado;
}

function mostrarResultado(textoProcessado) {
    mensagemPadrao.classList.add("hidden");
    resultadoContainer.classList.remove("hidden");
    textoResultado.value = textoProcessado;
}

botaoCriptografar.addEventListener('click', () => {
    const texto = textoParaCriptografar.value;
    if (texto.length > 0) {
        const textoCriptografado = processarTexto(texto, 'criptografar');
        mostrarResultado(textoCriptografado);
    }
});

botaoDescriptografar.addEventListener('click', () => {
    const texto = textoParaCriptografar.value;
    if (texto.length > 0) {
        const textoDescriptografado = processarTexto(texto, 'descriptografar');
        mostrarResultado(textoDescriptografado);
    }
});

botaoCopiar.addEventListener('click', () => {
    navigator.clipboard.writeText(textoResultado.value).then(() => {
        botaoCopiar.textContent = "Copiado!";
        setTimeout(() => {
            botaoCopiar.textContent = "Copiar";
        }, 2000); 
    });
});