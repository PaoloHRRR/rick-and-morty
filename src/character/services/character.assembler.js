import {Character} from "../model/character.entity.js";

export class CharacterAssembler {
    static toEntityFromResource(resource) {
        return new Character({
            name: resource.name,
            species: resource.species,
            gender: resource.gender,
            origin: resource.origin,
            location: resource.location,
            image: resource.image,
            url: resource.url
        });
    }

    static toEntitiesFromResponse(response) {
        const data = Array.isArray(response.data) ? response.data : [response.data];
        return data.map((item) => this.toEntityFromResource(item));
    }
}
