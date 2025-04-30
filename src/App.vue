<script>

import {RickAndMortyApiService} from "./character/services/rick-and-morty.api.service.js";
import characterListComponent from "./character/components/character-list.component.vue";
import {CharacterAssembler} from "./character/services/character.assembler.js";

export default {
  name: 'App',
  components: {
    characterListComponent,
  },
  data() {
    return {
      characters: [],
      errors: [],
      api: new RickAndMortyApiService()
    };
  },
  created() {
    this.loadCharacters();
  },
  methods: {
    loadCharacters() {
      this.api.getCharactersById([1, 2, 3, 4, 5]) // IDs de ejemplo
          .then((response) => {
            this.characters = CharacterAssembler.toEntitiesFromResponse(response);
          })
          .catch((error) => {
            console.error(error);
            this.errors.push(error);
            this.characters = [];
          });
    }
  }
};
</script>

<template>
  <div>
    <div>
      <characterListComponent v-if="characters.length" :characters="characters" />
    </div>

  </div>
</template>

<style scoped>
/* estilos opcionales */
</style>
