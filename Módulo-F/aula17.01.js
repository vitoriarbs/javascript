let amigo = {
    nome:'' ,
    sexo:'' ,
    peso: 12,
    engordar(p=0){
        console.log('engordou')
        this.peso += p //this é uma palavra atuoreferencia a objeto
    }
}

amigo.engordar(2) //engordou 2kg
console.log(`${amigo.nome} pesa ${amigo.peso} Kg`)