function sortear() {
    let quantidadeDeNumeros = parseInt(document.getElementById('quantidade').value);
    let doNumero = parseInt(document.getElementById('de').value);
    let ateONumero = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;

    if (doNumero >= ateONumero) {
        alert(`Campo "Do Numero" deve ser inferior ao campo "Ate o Número". Verifique!);`);
    }

    if (quantidadeDeNumeros > (ateONumero - doNumero + 1)) {
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!);');
    }

    for (let i = 0; i < quantidadeDeNumeros; i++) {
        numero = obterNumeroAleatorio(doNumero, ateONumero);

        while (sorteados.includes(numero)) {
           numero = obterNumeroAleatorio(doNumero, ateONumero);
        }

        sorteados.push(numero);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML= `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`;
    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');

    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}

