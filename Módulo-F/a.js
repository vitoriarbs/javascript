var num = 10

 //num = Number(document.getElementById('fnum').value)
    //lista = document.querySelector('select#flista')
    //res = document.querySelector('div#res')
    //valores = []
    

    if(num < 1 || num > 100) { 
        window.alert('Valor inválido ou já encontrado na lista.')       
    } 
       
    else {
        valores.push(num) 
        item = document.createElement('option')
        item.text = `Valor ${num} adicionado.`
        lista.appendChild(item)
    }
}

/*function finalizar(){
    res.innerHTML = `Ao todo temos ${totv} números cadastrados`
    res.innerHTML = `O maior valor informado foi ${maiorv}`
    res.innerHTML = `O menor valor informado foi ${menorv}`
    res.innerHTML = `Somando todos os valores, temos ${soma}.`
    res.innerHTML = `A média dos valor digitados é ${media}`
}*/