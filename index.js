class Hero {
    constructor(name, age, type) {
        this.name = name
        this.age = age
        this.type = type
    }

    toAttack () {
        let attack
        switch (this.type) {
            case "mago":
                attack = "magia"
                break

            case "guerreiro":
                attack = "espada"
                break

            case "monge":
                attack = "marciais"
                break

            case "ninja":
                attack = "shuriken"
        }

        console.log(`O ${this.type} atacou usando ${attack}`)
    }
}

let hero1 = new Hero("Alanzoka", 18, "mago")
let hero2 = new Hero("Naruto", 17, "ninja")

hero1.toAttack()
hero2.toAttack()