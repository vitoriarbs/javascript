
function verificar(){
    let fnome = String(window.document.getElementById('fnome').value)
    let fsalario = Number(window.document.getElementById('fsalario').value)
    var res = window.document.getElementById('res')

    var hoje = new Date()
    var mes = hoje.getMonth()
    
    
    res.innerHTML = `O funcionário ${fnome} tem um salário de R$${fsalario} em ${mes}`
}

