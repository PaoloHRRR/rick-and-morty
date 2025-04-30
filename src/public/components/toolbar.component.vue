<script>

import LanguageSwitcher from "./language-switcher.component.vue";

export default {
  name: "toolbar-content",
  components: {LanguageSwitcher}
}
</script>

<template>
  <pv-toolbar class="on-top">
    <template #start>
      <p>{{ $t('title') }}</p>
    </template>

    <template #end>
      <LanguageSwitcher></LanguageSwitcher>
    </template>
  </pv-toolbar>
</template>

<style scoped>
.on-top {
  /**/
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  width: 100%;
  background-color: #34d399;
  color: white;
  border-radius: 0;
  border:0;
}

.on-top p {
  font-size: 1.25rem;
}

:global(body) {
  padding-top: 60px;
}
</style>
