const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL ='people/:id';
const opts = { crossDomain: true };

function getCharacter(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;

    $
    .get(url, opts, callback);
    .fail(() => {
        console.log(`Sucedió un erro. No se pudo obtener el personaje ${id}`);
    });
}

getCharacter(1, function(persona) {
    console.log(`Hola, yo soy ${persona.name}`);

    getCharacter(2, function(persona) {
        console.log(`Hola, yo soy ${persona.name}`);

        getCharacter(3, function(persona) {
            console.log(`Hola, yo soy ${persona.name}`);

            getCharacter(4, function(persona) {
                console.log(`Hola, yo soy ${persona.name}`);

                getCharacter(5, function(persona) {
                    console.log(`Hola, yo soy ${persona.name}`);

                    getCharacter(6, function (persona){
                        console.log(`Hola, yo soy ${persona.name}`);
                    })
                });
            });
        });
    });
});

