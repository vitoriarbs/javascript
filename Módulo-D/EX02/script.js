
function verificar() {
    //declaração de variáveis
    var data = new Date()
    var ano = data.getFullYear() //para pegar os quatro números do ano
    var fano = document.getElementById('ano') // fano = ano do formulário
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente!')} 
    
    else {
        var fsex = document.getElementsByName('radsex')
        var idade =  ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') //foi criado uma tag img com id="foto"//
        if (fsex[0].checked) {gênero = 'Homem'} 
        else if (fsex[1].checked) {gênero = 'Mulher'}
    
        if(idade <= 10) {
            // bebe
            img.setAttribute('src', `img/${gênero}/baby.jpg`)}
        
         else if(idade <= 21) {
            // teen - jovem - adolescente
            img.setAttribute('src', `img/${gênero}/teen.jpg`)}
        
         else if(idade <= 50) {
            // adulto
            img.setAttribute('src', `img/${gênero}/adult.jpg`)}
        
         else {
            // idoso
            img.setAttribute('src', `img/${gênero}/old.jpg`)}
    

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    
    }
}    