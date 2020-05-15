class Persona {
    constructor(name, lastname, heigth) {
        this.name = name;
        this.lastname = lastname;
    }

    greet(fn) {
        console.log(`Hola me llamo ${this.name} ${this.lastname}`);
        
        if(fn) {
            fn(this.name, this.lastname)
        }
    }

    tall() {
        return this.heigth > 1.8;
    }
}

class Desarrollador extends Persona {
    constructor(name, lastname, heigth) {
        super(name, lastname, heigth);
    }
    
    greet(fn) {
        console.log(`Hola, me llamo ${this.name} ${this.lastname} y soy desarrollador.`);

        if(fn) {
            fn(this.name, this.lastname, true)
        }
    }
}

function answerGreet(name, lastname, isDev) {
    console.log(`Buen día ${name} ${lastname}`);

    if(isDev){
        console.log(`Ah no sabia que eras desarrollador`);
    }
}

var user1 = new Persona('Jhonathan', 'Alfonso', 1.52);
var user2 = new Persona('Erica', 'Luna', 1.72);
var user3 = new Desarrollador('Camilo', 'Conde', 1.85);

user1.greet();
user2.greet(answerGreet);
user3.greet(answerGreet);
