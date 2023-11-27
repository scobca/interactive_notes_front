<template>
  <div class="container">
    <div class="notes_container" v-for="(item) in notes">
      <VNoteCard :header="item.header" :date="item.text" @click="selectNote(item.id)"/>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {NoteBodyDto} from "@/assets/dto/noteBody.dto";
import VNoteCard from "@/components/VNoteCard.vue";

@Options({
  name: 'NotesView',
  components: {VNoteCard}
})
export default class NotesView extends Vue {
  notes: NoteBodyDto[] | null = null

  created() {
    this.notes = this.$store.getters.getAllNotes
  }

  selectNote(id: number | null) {
    console.log(id)
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
  max-width: 90%;
  margin-top: 1rem;
}

.notes_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
}
</style>
