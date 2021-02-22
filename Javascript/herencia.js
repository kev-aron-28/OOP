class Humano{
    #curp = ''
    constructor(name, age, born){
        this.name = name
        this.age = age
        this.born = born
    }

    getInfo(){
        console.log(`Name ${this.name}, Age ${this.age}, Born ${this.born}`)
    }

    sayHi(person){
        if(!person){
            console.log("Hi, everyone")
        }

        console.log(`Hi, ${person.name}, my name is ${this.name}`)
    }

    getSkill(){
        console.log(`My own skill is talk`)
    }

    setCurp(curp){
        
        this.#curp = curp
        console.log(this.#curp,)
        
    }
}


class Programador extends Humano{
    #skill = "Programar"
    constructor(name, age, born){
        super(name, age, born)
    }
    
    getSkill(){
        console.log("My Skill is programming")
    }
}

const kevin = new Humano("Kevin", 17, 2003)
const aron = new Programador("Aron", 18, 2002)
// kevin.getInfo()

kevin.setCurp("TKAS12KCK")
aron.setCurp("KKDO12K3K")