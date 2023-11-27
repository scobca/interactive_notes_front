<template>
  <div class="container">
    <h2 class="container_header">{{ header }}</h2>
    <p class="container_text">{{ date }}</p>
  </div>
</template>

<script lang="ts">

import {Options, Vue} from 'vue-class-component';
import {Prop} from "vue-property-decorator";
@Options({
  name: 'VNoteCard',
})
export default class VNoteCard extends Vue {
  @Prop()
  header!: string | any

  @Prop()
  date!: any
}
</script>

<style scoped>
.container {
  width: 15rem;
  height: 15rem;
  padding: .75rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
  align-content: flex-start;
}

.container_header {
  margin-bottom: .5rem;
  max-width: 90%;
  height: 1rem;
}

@media (prefers-color-scheme: dark) {
  .container {
    background-color: var(--d-background-color-80);
  }
}
</style>
