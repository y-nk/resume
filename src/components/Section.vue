<template>
  <section class="section">
    <h2>{{ title }}</h2>
    <slot />
  </section>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style scoped>
.section {
  padding: 1em 0;
  page-break-after: always;
}

.section h2 {
  grid-area: title;
  position: relative;
  display: none;
  margin-bottom: .75em;
  color: #537496;
}
</style>
