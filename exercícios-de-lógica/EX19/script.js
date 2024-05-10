function media(){

    let nome = String(window.document.getElementById('nome').value)

    let n1 = Number(window.document.getElementById('n1').value)
    let n2 = Number(window.document.getElementById('n2').value)
    let res = window.document.getElementById('res')

    var media = (n1 + n2)/ 2

    if (media > 7){ //teve bom aproveitamento 
        res.innerHTML = `<p>A média do aluno é ${media}<p/>
        O aluno(a) ${nome} ficou acima da média e teve um bom aproveitamento!`
    }

    else {
        res.innerHTML = `<p>A média do aluno é ${media}<p/>
        O aluno ${nome} ficou abaixo da média e não teve um bom aproveitamento` 
    }

}