var textoParaCriptografar = document.querySelector("#textoParaCriptografar");
var textoCriptografado = document.querySelector("#textoDescriptografado");

function criptografar(){
    var texto = textoParaCriptografar.value;
    var textoDescriptografado = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    document.getElementById('textoDescriptografado').innerHTML = '<textarea readonly id="textoJaDescriptografado">'+ textoDescriptografado +'</textarea>' + '<button class="botao__copiar" onclick="copiar()">Copiar</button>';
}
function descriptografar(){
    var texto = textoParaCriptografar.value;
    var textoDescriptografado = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById('textoDescriptografado').innerHTML = '<textarea readonly id="textoJaDescriptografado">'+ textoDescriptografado +'</textarea>' + '<button class="botao__copiar" onclick="copiar()">Copiar</button>';
}
function copiar(){
    var textoCopiar = document.getElementById("textoJaDescriptografado");
    textoCopiar.select();
    navigator.clipboard.writeText(textoCopiar.value);
    alert("Texto copiado: " + textoCopiar.value);
}