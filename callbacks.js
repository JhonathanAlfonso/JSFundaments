const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL ='people/1';
const lukeurl = `${API_URL}${PEOPLE_URL}`;
const opts = { crossDomain: true };

$.get(lukeurl, opts, function (luke) {
    console.log(`Hola yo soy ${luke.name}`);
});