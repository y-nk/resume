<template>
  <section class="skillset">
    <h3>{{ title }}</h3>
    <dl>
      <template v-for="([k, v], i) in Object.entries(skills)">
        <dt :key="`dt#${i}`">{{ $t(`labels.${k}`) }}</dt>
        <dd :key="`dd#${i}`"><y-rate :value="v" /></dd>
      </template>
    </dl>
  </section>
</template>

<script>
import YRate from '@/components/Rate'
export default {
  components: { YRate },
  props: ['title', 'skills']
}
</script>

<style>
.skillset {
  transition: color .3s;
  color: var(--primary);
}

.skillset:hover {
  color: var(--strong);
}

.skillset h3 {
  margin: 0 0 .5em;
  font-family: 'Raleway', sans-serif;
  font-size: 1em;
}

.skillset dl {
  display: grid;
  grid-template-columns: auto min-content;
  grid-gap: calc(.25em/.9) 0;
  align-items: center;
  font-family: 'Arapey', serif;
  font-size: .9em;
}

.skillset dt {
  display: flex;
  margin-right: 1em;
  color: var(--secondary);
  white-space: nowrap;
}

.skillset dt:after {
  flex: 1 1 0%;
  content: '........................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................';
  width: 1px;
  padding: 0 .25em;
  overflow: hidden;
}

.skillset dd {
  text-align: end;
}
</style>
