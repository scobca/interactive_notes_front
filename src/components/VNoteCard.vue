<template>
  <div class="container">
    <h2 class="container_header">{{ note.header }}</h2>
    <p class="container_text">{{ note.date }}</p>
  </div>
</template>

<script lang="ts">

import {Options, Vue} from 'vue-class-component';
import {Prop} from "vue-property-decorator";
import {NoteBodyDto} from "@/assets/dto/noteBody.dto";
@Options({
  name: 'VNoteCard',
})
export default class VNoteCard extends Vue {
  @Prop()
  note!: NoteBodyDto
}
</script>

<style scoped>
.container {
  width: 15rem;
  height: 15rem;
  padding: .75rem;
  border-radius: 1rem;
}

.container_header {
  margin-bottom: .5rem;
  max-width: 90%;
}

@media (prefers-color-scheme: dark) {
  .container {
    background-color: var(--d-background-color-80);
  }
}
</style>
