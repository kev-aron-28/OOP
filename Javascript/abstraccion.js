class Tv{

    #status = true
    constructor(brand,width,price ){
        this.brand = brand
        this.width = width
        this.price = price
        
    }

    showData(){
        return `Brand ${this.brand}, Width ${this.width}, Price $${this.price}`;
    }

    TurnOn(){
        return `${this.#status ? "Is on" : "Is Off"}`;
    }
}


let tv = new Tv("LG", "50x50", 1200);
console.log(tv.showData())
console.log(tv.TurnOn())