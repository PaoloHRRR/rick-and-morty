import axios from 'axios';

const rickAndMortyApiUrl = import.meta.env.VITE_RICKANDMORTY_API_URL;
const charactersEndpoint = import.meta.env.VITE_CHARACTERS_ENDPOINT_PATH

const http = axios.create({
    baseURL: rickAndMortyApiUrl
})

export class RickAndMortyApiService {
    getCharactersById(characterId){
        return http.get(`${charactersEndpoint}/${characterId}`)
    }
}