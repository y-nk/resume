<template>
  <div class="rate">
    <div :style="`width: ${value * 100}%`">{{ 100 * value }}%</div>
  </div>
</template>

<script>
export default {
  props: ['value', 'hover']
}
</script>

<style scoped>
.rate {
  position: relative;
  display: inline-block;
  overflow: hidden;
  width: 6em;
  height: .5em;
  background: var(--light);
  border-radius: 1em;
  color: inherit;
}

.rate > div {
  height: inherit;
  background: currentColor;
  border-radius: inherit;
  color: inherit;
  text-indent: 9999em;
}

.rate:hover > div {
  background: currentColor;
}
</style>
