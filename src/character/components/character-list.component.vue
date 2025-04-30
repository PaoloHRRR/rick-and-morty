<script>
import CharacterItem from './character-item.component.vue';

export default {
  name: 'character-list',
  components: { CharacterItem },
  props: {
    characters: {
      type: Array,
      required: true
    }
  }
};
</script>

<template>
  <div class="character-list">
    <p v-if="characters.length === 0" class="no-characters">No characters found.</p>
    <div class="character-items">
      <character-item
          v-for="(character, index) in characters"
          :key="index"
          :character="character"
      />
    </div>
  </div>
</template>

<style scoped>
.character-list {
  margin: 20px;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 8px;
  color:black;
}

.no-characters {
  text-align: center;
  font-size: 18px;
  color: #888;
}

.character-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
}

.character-item {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 15px;
  width: 250px;
  text-align: center;
  transition: transform 0.3s ease-in-out;
}

.character-item img {
  width: 100%;
  height: auto;
  border-radius: 4px;
}

.character-item h3 {
  font-size: 1.2rem;
  margin: 10px 0;
  color: #333;
}

.character-item p {
  font-size: 1rem;
  color: #666;
}
.character-list {
  margin: 0;
  padding: 0;
  border-radius: 0;
}
</style>
