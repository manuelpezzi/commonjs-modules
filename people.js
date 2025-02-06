const createName = require('./names');
const createHobbies = require('./hobbies')

function getPerson() {
    const fullName = createName('manuel', 'Pezzi');
    const hobbies = createHobbies('videogames', 'lettura', 'cucina');

    return {
        fullName,
        hobbies
    }
}
console.log(getPerson());