<template>
  <div class="main_wrapper">
<!--    <VHeader/>-->
<!--    <router-view/>-->
    <VNote :note="note"/>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import VHeader from "@/components/VHeader.vue";
import VNote from "@/components/VNote.vue";
import {NoteBodyDto} from "@/assets/dto/noteBody.dto";

@Options({
  name: 'App',
  components: {VNote, VHeader},
})
export default class App extends Vue {
  note: NoteBodyDto = {
    header: 'Заголовок',
    text: 'Текст заметки'
  }
}
</script>

<style scoped>
.main_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: .75rem;
  gap: 1rem;
}
</style>
