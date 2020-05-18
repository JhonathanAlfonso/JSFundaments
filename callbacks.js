const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL ='people/:id';
const opts = { crossDomain: true };

function getCharacter(id) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
        $
            .get(url, opts, function(data) {
                resolve(data)
            })
            .fail(() => reject(id))
            })
    }


function onError(id){
    console.log(`Sucedió un error al obtener el personaje ${id}`);
}

getCharacter(1)
    .then((persona) => {
        console.log(`El personaje 1 es ${persona.name}`);
        return getCharacter(2);
    })
    .then(persona => {
        console.log(`El personaje 2 es ${persona.name}`);
        return getCharacter(3);
    })
    .then(persona => {
        console.log(`El personaje 3 es ${persona.name}`);
        return getCharacter(4);
    })
    .then(persona => {
        console.log(`El personaje 4 es ${persona.name}`);
        return getCharacter(5);
    })
    .then(persona => {
        console.log(`El personaje 6 es ${persona.name}`);
    })
    .catch(onError);
