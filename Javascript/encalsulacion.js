class Bank {
    #password = "kevin"

    constructor(pass, user){
        this.pass = pass
        this.user = user
    }

    verify(){
        return `${(this.pass == this.#password) ? "Correct" : "Incorrect"}`
    }

    setPassword(nPass){
        this.#password = nPass
    }

    getPasword(){
        const verified = this.verify()
        if( verified == "Correct"){
            return this.#password
        }else {
            throw new Error("Incorrect pasword")    
        }
    }
}


const account = new Bank("kevin", "yo")

console.log(account.verify())

try{
    console.log(account.getPasword())
} catch(e){
    console.log(e)
}
