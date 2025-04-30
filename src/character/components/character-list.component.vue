<script>
import { ref } from 'vue';
import CharacterItem from './character-item.component.vue';

export default {
  name: 'CharacterList',
  components: {
    CharacterItem
  },
  props: {
    characters: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const filteredCharacters = ref(props.characters);
    return {
      filteredCharacters
    };
  }
};
</script>

<template>
  <div class="character-list">
    <p v-if="filteredCharacters.length === 0">No characters found.</p>
    <div class="p-d-flex p-flex-wrap">
      <character-item
          v-for="(character, index) in filteredCharacters"
          :key="index"
          :character="character" />
    </div>
  </div>
</template>

<style scoped>
.character-list {
  margin: 20px;
}

.character-list .p-d-flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.character-list .character-item {
  margin: 10px;
  width: 250px;
}
</style>
