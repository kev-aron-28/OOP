enum Prices{
    A= 100,
    B= 80,
    C = 60,
    D = 50,
    E = 30,
    F = 10
}

type colors = "N" | "B" | "R" | "A" | "G";

class Electrodomestico{
    protected precio_base:number;
    protected color:colors;
    protected consumo_energetico:number;
    protected weigth:number

    public constructor(p:number =100, c:colors = "B", c_e:number = Prices.F, w:number){
        this.precio_base = p;
        this.color = c;
        this.consumo_energetico = c_e;
        this.weigth  = w;
    }


    public show_consumo_energetico(letra:number){
        if(letra === this.consumo_energetico){
            return true;
        }

        return this.consumo_energetico;
    }

    protected calc_price_weigth(){
        let current:number = 0;
        if(this.weigth < 20){
            current += 19
        } else if(this.weigth > 0 && this.weigth < 50){
            current += 50;
        } else if(this.weigth > 50 && this.weigth < 80){
            current += 80;
        } else{
            current += 100
        }

        return current;
    }

    public precio_final(){
        let current_price = this.calc_price_weigth();

        return current_price + this.consumo_energetico + this.precio_base;

    } 

}
    

const electrodomestico:Electrodomestico = new Electrodomestico(100, "G", Prices.C, 51);
console.log(electrodomestico.precio_final());