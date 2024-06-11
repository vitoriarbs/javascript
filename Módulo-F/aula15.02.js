let num = [5, 6, 7, 88,64, 4]

num.sort() //ordena os valores de menor para maior
num.push(1) // adicionar um valor ao array, no caso vai ser adicionado o valor 1  

console.log(num)
console.log(`O valor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(8) //procurando o valor 8
if (pos == -1) {
    console.log(`O valor não foi encontrado`)

} else {
    console.log(`O valor está na posição ${pos}`)
}
