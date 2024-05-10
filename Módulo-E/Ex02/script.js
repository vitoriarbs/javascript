
function contador(){
    let n1 = Number(window.document.getElementById('n1').value)
    var res = window.document.getElementById('res')
    

    for (var c = 1; c<=10 ; c++) {
        var mult = n1 * c
        res.innerHTML += `<p>${n1} x ${c} = ${mult}</p>`
    }
}




