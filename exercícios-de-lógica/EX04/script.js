function soma(){

let n1 = Number(window.document.getElementById('n1').value)
let n2 = Number((window.document.getElementById('n2')).value)
let res = window.document.getElementById('res')

let soma = n1 + n2

res.innerHTML = `A soma entre ${n1} e ${n2} é igual a ${soma}`
}
