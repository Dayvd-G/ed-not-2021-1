let quadrado = (n) => n*n
console.log(quadrado(2))

function potencia(b, e){
    return b ** e
}

console.log(potencia(2,3))

let potencia2 = (b, e) => b ** e
console.log(potencia2(3,2))

function megasena() {
    //Esta função retorna um número aleatório entre 1 e 60
    //Math.random() -> retorna um número aleatório entre 0 (inclusive) e 1 (exclusive)
    // * 60 -> a faixa de valores para entre 0 e 59
    // + 1 -> ajusta a faixa de valores para entre 1 e 60
    return Math.random() * 60 + 1
}

console.log(megasena().toFixed(0),",", megasena().toFixed(0),",", megasena().toFixed(0),",",megasena().toFixed(0),",",megasena().toFixed(0),",",megasena().toFixed(0))


const megasena2 = () => Math.floor(Math.random() * 60 + 1)
console.log(megasena2().toFixed(0),",", megasena2().toFixed(0),",", megasena2().toFixed(0),",",megasena2().toFixed(0),",",megasena2().toFixed(0),",",megasena2().toFixed(0))

function somaVet(vet) {
    let soma = 0
    for(let n of vet) soma += n
    return soma
}

console.log(somaVet([12,-2,42,34,44,56,31,15]))

const somaVet2 = vet => {
    let soma = 0
    for(let n of vet) soma += n
    return soma
}
console.log(somaVet2([12,-2,42,34,44,56,31,15]))

//CONCLUSÃO: Arrow Functions foram concebidas para facilitar a escrita de
//funções de apenas uma linha, embora também possam ser usadas para funções
//de múltiplas linhas.