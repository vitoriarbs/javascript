

function contador(){
    let n1 = Number(window.document.getElementById('n1').value)
    let n2 = Number(window.document.getElementById('n2').value)
    let c  = Number(window.document.getElementById('pas').value)
    var res = window.document.getElementById('res')
    
    if (n1.value.length == 0 || n2.value.length == 0 || c.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } /* else {//como o professor resolveu
        res.innerHTML = 'Contando: '
        let i = Number(n1,value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        for(let c = i; c <= f; c += p){
            res.innerHTML += `${c} \u{1F603}`
        }*/

    while(n1 <= n2) {
        res.innerHTML += `${n1}.. `
        n1 = n1 + c
    }
    
    while(n2 < n1) {
        res.innerHTML += `${n1}.. `
        n1 = n1 - c
    }

    res.innerHTML += `.`
}




