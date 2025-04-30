<script>

export default {
  name: "more-info.component.vue",
  props: {
    url: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <pv-button as="a" :label="$t('article.read-more')" :href="url" target="_blank" rel="noopener" />
</template>

<style scoped>
</style>