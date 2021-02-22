class Account {
    constructor( id, nombre, document, email,password) {
        this.id = id
        this.nombre = nombre
        this.document = document
        this.email = email
        this.password = password
    }
    
}

class Car {
    constructor(id, license, driver,passenger ){
        this.id = id
        this.license = license
        this.driver = driver
        this.passenger = passenger
    }
}

class Payment {
    constructor( id){
        this.id = id
    }
}

class Route{
    constructor(id,init, start){
        this.id = id
        this.init = init
        this.start = start
    }
}