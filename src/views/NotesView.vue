<template>
  <div class="container">
    <div class="notes_container" v-for="(item) in notes">
      <VNoteCard :header="item.header" :date="item.text"/>
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
  notes: NoteBodyDto[] = [
    {
    header: 'Сделать проект',
    text: 'Напомнить о выполнении проекта',
    date: Date.now(),
    },
    {
    header: 'Рецепт супа',
    text: 'Как сделать борщ за час и не сломаться...',
    date: Date.now(),
    },
    {
    header: 'Список покупок',
    text: 'Огурцы, помидоры, салат, майонез',
    date: Date.now(),
    },
    {
      header: 'Сделать проект',
      text: 'Напомнить о выполнении проекта',
      date: Date.now(),
    },
    {
      header: 'Рецепт супа',
      text: 'Как сделать борщ за час и не сломаться...',
      date: Date.now(),
    },
    {
      header: 'Список покупок',
      text: 'Огурцы, помидоры, салат, майонез',
      date: Date.now(),
    },
    {
      header: 'Рецепт супа',
      text: 'Как сделать борщ за час и не сломаться...',
      date: Date.now(),
    },
    {
      header: 'Список покупок',
      text: 'Огурцы, помидоры, салат, майонез',
      date: Date.now(),
    },
  ]
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
