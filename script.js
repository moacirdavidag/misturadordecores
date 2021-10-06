let vermelho = document.querySelector("#vermelho"),
    verde = document.querySelector("#verde"),
    azul = document.querySelector("#azul"),
    resultado = document.querySelector("#resultado"),
    botoes = document.querySelector("#botoes"),
    pcVermelho = document.querySelector("#pcVermelho"),
    pcVerde = document.querySelector("#pcVerde"),
    pcAzul = document.querySelector("#pcAzul");

let conteudo = document.querySelector("#conteudo"), 
    article = document.querySelector("article"),
    count = 0,
    sinal = document.querySelector ("#sinal");
    

conteudo.addEventListener("click", mostrar);

window.onload = () => {
    
        pcVermelho.innerText = porcentagemVermelho + '%';
        pcVerde.innerText = porcentagemVerde + '%';
        pcAzul.innerText = porcentagemAzul + '%';  
        resultado.style.background = `rgb(${vermelho.value}, ${verde.value}, ${azul.value})`;
}

let porcentagemVermelho = (vermelho.value * 100 / 255).toFixed(0),
    porcentagemVerde = (verde.value * 100 / 255).toFixed(0),
    porcentagemAzul = (azul.value * 100 / 255).toFixed(0);


let btn = [vermelho, verde, azul];

for(const botao of btn) {
    botao.addEventListener("change", mudaCor)
}


function mudaCor() {
    resultado.style.background = `rgb(${vermelho.value}, ${verde.value}, ${azul.value})`;
    porcentagemVermelho = (vermelho.value * 100 / 255).toFixed(0),
    porcentagemVerde = (verde.value * 100 / 255).toFixed(0),
    porcentagemAzul = (azul.value * 100 / 255).toFixed(0);    
    pcVermelho.innerText = porcentagemVermelho + '%';
    pcVerde.innerText = porcentagemVerde + '%';
    pcAzul.innerText = porcentagemAzul + '%';
}

function mostrar() {
    count++;
    if(count == 1) {
        article.style.display = "block";
        sinal.innerHTML = "-";
    } else if(count > 1){
        article.style.display = "none";
        sinal.innerHTML = "+";
        count = 0;
    }
}