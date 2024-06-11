let valores = [8,0,9,7,6]

console.log(valores)

for (let pos=0; pos < valores.length; pos++) {
    console.log (`A posição ${pos} tem o valor ${valores[pos]}`)
}

for (let pos in valores) {//for = para; in = dentro; para(for) cada posição(pos) dentro(in) de valores
// essa sintaxe funciona apenas com arrays e objetos
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}