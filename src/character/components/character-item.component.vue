<script>
import moreInfoComponent from "./more-info.component.vue";

export default {
  name: 'CharacterItem',
  components: {moreInfoComponent},
  props: {
    character: {
      type: Object,
      required: true
    }
  },
  created() {
    console.log(this.character)
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
        <p><strong>{{ $t('character.specie') }}:</strong> {{ character.species }}</p>
        <p><strong>{{ $t('character.gender') }}:</strong> {{ character.gender }}</p>
        <p><strong>{{ $t('character.origin') }}:</strong> {{ character.origin }}</p>
        <p><strong>{{ $t('character.location') }}:</strong> {{ character.location }}</p>
      </div>
    </template>
    <template #footer>
      <moreInfoComponent :url="character.url" />
    </template>
  </pv-card>
</template>

<style scoped>

.character-item {
  width: 30%;
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
