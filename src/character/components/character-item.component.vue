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
  <pv-card class="character-item p-m-2" :title="character.name">
    <template #header>
      <div class="p-d-flex image-container">
        <pv-image :src="character.image" alt="character.name" preview class="character-img" />
        <div class="character-info p-ml-3">
          <h5 class="p-card-title">{{ character.name }}</h5>
        </div>
      </div>
    </template>

    <template #content>
      <div class="character-details">
        <p><strong>Species:</strong> {{ character.species }}</p>
        <p><strong>Gender:</strong> {{ character.gender }}</p>
        <p><strong>Origin:</strong> {{ character.origin }}</p>
        <p><strong>Location:</strong> {{ character.location }}</p>
      </div>
    </template>
  </pv-card>
</template>

<style scoped>
.character-item {
  width: 320px;
  margin: 10px;
  border-radius: 8px;
}

.character-img {
  width: 160px;
  height: 160px;
  object-fit: cover;
  border-radius: 50%;
}

.character-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.character-details {
  margin-top: 10px;
}

.character-item .p-card-title {
  font-size: 1.4em;
  font-weight: bold;
  margin-bottom: 10px;
}

.character-item p {
  margin: 4px 0;
  font-size: 0.9em;
}
.image-container {
  padding: 30px;
}
</style>
