

function contador(){
    let n1 = Number(window.document.getElementById('n1').value)
    let n2 = Number(window.document.getElementById('n2').value)
    let c  = Number(window.document.getElementById('pas').value)
    var res = window.document.getElementById('res')
    

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




