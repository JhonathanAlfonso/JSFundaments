var name;
name = 'Jhonathan';
var lastname = 'Alfonso';
var age = 24;
var weigth = 75;

var nameUpperCase = name.toUpperCase();
var lastnameLoweCase = lastname.toLowerCase();
var firtLetter = name.charAt(0);
var lengthName = name.length;
var str = name.charAt(1) + name.charAt(2);
var substr = name.substr(1, 3);

console.log(`Hola ${name} ${lastname}`);
console.log(`Tengo ${age} años`);
console.log(`Hola ${nameUpperCase} ${lastnameLoweCase}`);
console.log(`Primera letra de nombre ${firtLetter} tiene ${lengthName} letras`);