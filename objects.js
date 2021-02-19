//Objetos são estruturas que permitem armazenar diversos valores
// Em uma mesma variável, permitindo acessá-los por meio de um nome

//Criação de um objeto vazio

let vazio1 = {}           //Forma "moderna"
let vazio2 = new Object() //Forma "Tradicional"

//Objeto com propriedades, valor ou também chamado de atributo: valor
let object = [
{
    nome:"Dayvd", 
    idade:'18', 
    poupança:'9000,00',
    trabalho: ['Raes Alimentos', 'Agnello', 'LuizaLabs']    
}
, 
{
    nome:"Estefani", 
    idade:'18', 
poupança:'5000,00'}]
console.table(object)

let object2 = 
{
    nome:"Dayvd", 
    idade:'18', 
    poupança:'9000,00',
    trabalho: ['Raes Alimentos', 'Agnello', 'LuizaLabs'],
    'gostos': ['Valorant', 'Program', 'Namorar']
}

console.log(object2.trabalho[0])
console.log(object2['gostos'][0])

object2.email = 'dayvdg@gmail.com'

console.table(object2)

//commit:
//git add .
//git commit -m "(data) Arrow functions e objetos"