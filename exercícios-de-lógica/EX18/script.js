function verificar() { 



    let fano = Number(window.document.getElementById('ano').value)
    let res = window.document.getElementById('res')

    var hoje = new Date()
    var ano = hoje.getFullYear()

    var idade = ano - fano

    if (idade < 16) {
        //menor de 16 não pode votar
        res.style.textAlign = 'center'
        res.innerHTML = `Você não pode votar!`
    }

    else if (idade >= 16) {
        res.style.textAlign = 'center'
        res.innerHTML = `Você pode votar!`
    }
}