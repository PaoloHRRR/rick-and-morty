export class Character {
    constructor ({ name = '',
        status = '',
        species = '',
        gender = '',
        origin = '',
        location = '',
        image='',
        url=''
                 }) {
        this.name = name;
        this.status = status;
        this.species = species;
        this.gender = gender;
        this.origin = origin.name;
        this.location = location.name;
        this.image = image;
        this.url = url;
    }
}