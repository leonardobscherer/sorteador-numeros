
function gerarNumero(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function alterarStatusBotao() {
    let botao = document.getElementById("btn-reiniciar");
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}



function sortear() {
    var quantidadeDeNumeros = document.getElementById("quantidade").value;
    var de = document.getElementById("de").value;
    var ate = document.getElementById("ate").value;


    var numerosSorteados = [];
    var numero;



    for (var i = 0; i < quantidadeDeNumeros; i++) {
        numero = gerarNumero(de, ate);

        if (de > ate || quantidadeDeNumeros > de - ate) {
            alert('Não é possível sortear essa quantidade de números nesse intervalo');
            break
           }



        while (numerosSorteados.includes(numero)) {
            numero = gerarNumero(de, ate);
        }
        numerosSorteados.push(numero);
    }
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numerosSorteados}</label>`
    alterarStatusBotao();
}


function reiniciar() {
    document.getElementById("quantidade").value = '';
    document.getElementById("de").value = '';
    document.getElementById("ate").value = '';
    document.getElementById("resultado").innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
    alterarStatusBotao();
}


