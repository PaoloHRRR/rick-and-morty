<script>
export default {
  name: 'CharacterItem',
  props: {
    character: {
      type: Object,
      required: true
    }
  }
};
</script>

<template>
  <div class="character-item p-card p-m-2">
    <img :src="character.image" alt="character.name" class="p-card-img-top" />
    <div class="p-card-body">
      <h5 class="p-card-title">{{ character.name }}</h5>
      <p><strong>Species:</strong> {{ character.species }}</p>
      <p><strong>Gender:</strong> {{ character.gender }}</p>
      <p><strong>Origin:</strong> {{ character.origin }}</p>
      <p><strong>Location:</strong> {{ character.location }}</p>
    </div>
  </div>
</template>

<style scoped>
.character-item {
  width: 240px;
  margin: 10px;
}

.character-item img {
  max-height: 200px;
  object-fit: cover;
}

.character-item .p-card-title {
  font-size: 1.2em;
}
</style>
