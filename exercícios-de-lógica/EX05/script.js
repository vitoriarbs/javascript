function media(){

let n1 = Number(window.document.getElementById('n1').value)
let n2 = Number(window.document.getElementById('n2').value)
let res = window.document.getElementById('res')

var media = (n1 + n2)/ 2

res.innerHTML = `A média entre ${n1} e ${n2} é igual a ${media}`
}