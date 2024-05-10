

function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')

    var data = new Date()
    //var hora = data.getHours()
    var hora = 23
    
    msg.innerHTML = `Agora são ${hora} horas.` 

    if (hora >= 0 && hora <12) {
        //BOM DIA!
        img.src = "img/manha.jpg"
        document.body.style.background = '#BFC2C7'
    }

    else if (hora >= 12 && hora < 18) {
        //BOA TARDE!!
        img.src = 'img/tarde.jpg'
        document.body.style.background = '#F7B592'
    }

    else {
        //BOA NOITE!!
       img.src = 'img/noite.jpg' 
       document.body.style.background = '#0D0D0D'
    }

}




