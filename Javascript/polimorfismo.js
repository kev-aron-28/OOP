class Forma{
    constructor(){

    }

    dibujar(){
        console.log("Dibujando Forma")
    }

    borrar(){
        console.log("Borrando forma")
    }
}


class Cuadrado extends Forma{
    
    dibujar(){
        console.log("Dibujando Cuadrado")
    }
}


class Circulo extends Forma{
    dibujar(){
        console.log("Dibujando Circulo")
    }
}

const form = new Forma();
const cua = new Cuadrado()
const circulo = new Circulo()
form.dibujar()
cua.dibujar()
circulo.dibujar()