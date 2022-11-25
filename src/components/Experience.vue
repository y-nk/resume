<template>
  <article class="experience" v-on="$listeners">
    <hgroup>
      <h3>{{ title }}</h3>
      <h5>
        <a class="company" :href="website" target="_blank">{{ company }}</a>

        (<a class="location" :href="`https://www.google.com/maps/search/${city}`" target="_blank">{{ location }}</a>)
        </h5>
    </hgroup>

    <section v-show="toggle">
      <h6>
        <time rel="from" :datetime="from">
          {{ format(from, 'MMM ’yy') }}
        </time>

        <time rel="to" :datetime="to">
          {{ !to ? $t('now') : format(to, 'MMM ’yy') }}
        </time>
      </h6>

      <dl>
        <dt class="summary">{{ $t('labels.summary') }}</dt>
        <dd v-html="marked(summary)" />

        <template v-if="highlight">
          <dt class="highlight">{{ $t('labels.highlight') }}</dt>
          <dd v-if="highlight" v-html="marked(highlight)" />
        </template>
      </dl>
    </section>
  </article>
</template>

<script>
import marked from 'marked'
import { format } from 'date-fns'

export default {
  props: ['title', 'from', 'to', 'location', 'company', 'website', 'summary', 'highlight', 'toggle'],

  data: () => ({
    marked,
    format,
  }),

  computed: {
    city() {
      return this.location.split(', ')[0]
    },
  },
}
</script>

<style scoped>
.experience {
  position: relative;
  margin-top: -1px;
  padding: 1.5em;
  padding-left: 3em;
  border-top: 1px solid #eaeaea;
  border-bottom: 1px solid #eaeaea;
  cursor: pointer;
  color: var(--primary);
  transition: color .3s;
  page-break-after: always;
}

.experience:before {
  counter-increment: experiences;
  content: "0" counter(experiences);
  position: absolute;
  display: block;
  left: 0;
  margin-top: 1px;
  width: 3em;
  font-size: 1em;
  font-weight: bold;
}

.experience hgroup {
  margin: 0;
}

.experience:hover {
  color: var(--strong);
}

.experience h3 {
  display: inline;
  color: inherit;
  font-family: 'Raleway', sans-serif;
  font-size: 1em;
  font-weight: bold;
  letter-spacing: .25;
}

.experience h5 {
  display: inline;
  font-family: 'Arapey', serif;
  font-size: 1em;
  font-weight: normal;
}

.experience .company {
  position: relative;
  color: inherit;
  text-decoration: none;
}

.experience .company:before {
  content: '–';
  color: inherit;
  margin: 0 .25em;
}

.experience .company:after {
  left: .9em;
}

.experience .location {
  font-size: .9em;
}

.experience h6 {
  opacity: .4;
  color: inherit;
  font-style: italic;
  text-transform: uppercase;
}

.experience time + time:before {
  content: ' – ';
}

.experience time + a:before {
  content: ' in ';
}

.experience dl {
  margin-top: calc(1em / .8);
  color: var(--primary);
  opacity: .8;
  font-size: .8em;
  line-height: 1.6;
  letter-spacing: .25;
}

.experience dt {
  display: none;
}

.experience dd {
  margin: 1.5em 0 0;
}

.experience dd > :first-child {
  display: inline;
}

@media only print {
  .experience .highlight,
  .experience .highlight + dd {
    display: none !important;
  }
}
</style>
