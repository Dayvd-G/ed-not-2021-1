let frutas = []
frutas.unshift('beterraba')
frutas.unshift('batata')
frutas.unshift('uva')
frutas.splice(1, 0, "morango");
frutas.splice(2, 0, "amora");
console.table(frutas)

console.log('----------------------------------')

//1) Percurso com for tradicional
// a) A contagem começa em zero (0 - primeiro elemento)
// b) Ocorre enquanto o contador for MENOR que o número de elementos do vetor
// c) length termina com TH 

for(let i = 0; i < frutas.length; i++) {
    console.log(i, frutas[i])
}