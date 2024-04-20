
const TextArea = document.querySelector('.sessaoInput__texto');
const AreaMsg = document.querySelector('.sessaoResult__texto');
const btnCopiar = document.getElementById('botao__copiar');


let MatrizCodigo = [["e", "enter"],
                    ["i", "imes"],
                    ["a", "ai"],
                    ["o", "ober"],
                    ["u", "ufat"]
                ];


function ativar(valor){
    var mensagem = document.getElementById("sessaoResult__mensagem");
    var aviso = document.getElementById("sessaoResult__avisoMensagem");
    var resultado = document.getElementById("sessaoResult__textarea")
    var botao = document.getElementById("sessaoResult__botao")
    if (valor != ""){
        mensagem.style.display = "none";
        aviso.style.display = "none";
        resultado.style.display = "flex";
        botao.style.display = "flex";
    } else {
        mensagem.style.display ="";
        aviso.style.display =""
        resultado.style.display = "none"
        botao.style.display = "none"
    }
}

function btnCriptografar() {
    var text = document.getElementById("aviso-text");
    const textCriptografado = Criptografado(TextArea.value);
    
    
    if (/[A-ZÁÉÍÓÚÂÊÔÎÛÀÈÌÒÙÃẼĨÕŨÄËÏÖÜáéíóúâêîôûàèìòùãẽĩõũäëïöü]/.test(textCriptografado))  {
        text.style.display = "flex"; 
    } else {
        ativar(textCriptografado); 
        AreaMsg.value = textCriptografado; 
        TextArea.value = '';
        text.style.display = "none"; 
    }
}


function Criptografado(stringCriptografada){

    for(let i = 0; i < MatrizCodigo.length; i++){
        if (stringCriptografada.includes(MatrizCodigo[i][0])){
            stringCriptografada = stringCriptografada.replaceAll(MatrizCodigo[i][0],MatrizCodigo[i][1]);
        }
    }
    return stringCriptografada
}

function btnDescriptografar(){
    var text = document.getElementById("aviso-text");
    const textDescriptografado = Descriptografar(TextArea.value);

    if (/[A-ZÁÉÍÓÚÂÊÔÎÛÀÈÌÒÙÃẼĨÕŨÄËÏÖÜáéíóúâêîôûàèìòùãẽĩõũäëïöü]/.test(textDescriptografado))  {
        text.style.display = "flex";  
    } else {
        ativar(textDescriptografado);
        AreaMsg.value = textDescriptografado;
        TextArea.value = '';
        text.style.display = "none"; 
    }
    
}

function Descriptografar(stringDescriptografada){

    for(let i = 0; i < MatrizCodigo.length; i++){
        if (stringDescriptografada.includes(MatrizCodigo[i][1])){
            stringDescriptografada = stringDescriptografada.replaceAll(MatrizCodigo[i][1],MatrizCodigo[i][0]);
        }
    }
    return stringDescriptografada
}


btnCopiar.addEventListener('click', () => {
   
    AreaMsg.select();
    AreaMsg.setSelectionRange(0, 99999);

    
    //document.execCommand('copy');

    
    btnCopiar.innerText = 'Texto Copiado!';

    
    setTimeout(() => {
        btnCopiar.innerText = 'Copiar Texto';
    }, 2000); 
});

