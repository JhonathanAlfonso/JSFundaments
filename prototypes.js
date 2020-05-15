function Persona(name, lastname, heigth) {
    this.name = name;
    this.lastname = lastname;
}

Persona.prototype.greet = function () {
    console.log(`Hola me llamo ${this.name} ${this.lastname}`);
}

Persona.prototype.tall = function () {
    return this.heigth > 1.8;
}

function inheritFrom(sonPrototype, fatherPrototype) {
    var fn = function () {};
    fn.prototype = fatherPrototype.prototype;
    sonPrototype.prototype = new fn;
    sonPrototype.prototype.constructor = sonPrototype;
}

function Desarrollador(name, lastname) {
    this.name = name;
    this.lastname = lastname;
}

inheritFrom(Desarrollador, Persona);

Desarrollador.prototype.greet = function () {
    console.log(`Hola, me llamo ${this.name} ${this.lastname} y soy desarrollador.`);
}



// var user1 = new Persona('Jhonathan', 'Alfonso', 1.52);
// var user2 = new Persona('Erica', 'Luna', 1.72);
// var user3 = new Persona('Camilo', 'Conde', 1.85);

