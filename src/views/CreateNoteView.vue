<template>
  <div class="container">
    <div class="form">
      <h2>Создание новой заметки</h2>
      <div class="inputs_block">
        <div class="input_container">
          <p class="tag">Название заметки</p>
          <VInput v-model="note.header" :placeholder="'Заметка 1'" class="input"/>
        </div>

        <div class="input_container">
          <p class="tag">Текст заметки</p>
          <v-textarea :placeholder="'За одним словом следует другое... Напишите же первое.'" v-model="note.text"/>
        </div>

        <div class="block">
          <h2 class="button" @click="createNewNote"> Создать заметку </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import {Options, Vue} from 'vue-class-component';
import VInput from "@/components/VInput.vue";
import VTextarea from "@/components/VTextarea.vue";
import {NoteBodyDto} from "@/assets/dto/noteBody.dto";

@Options({
  name: 'CreateNoteView',
  components: {VTextarea, VInput},
})
export default class CreateNoteView extends Vue {
  note: NoteBodyDto = {
    header: null,
    text: null,
    date: null,
  }

  createNewNote() {
    alert('created')
  }
}
</script>

<style scoped>
.area {
}

.container {
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 60%;
}

.form {
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.tag {
  font-weight: 400;
  font-size: 1.25rem;
}

.inputs_block {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.input_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

.input {
  width: 30rem;
  scale: 100%;
  transition-duration: 0.25s;
}

.input:hover {
  scale: 103%;
  transition-duration: 0.25s;
}

.button {
  font-weight: 400;
  font-size: 1rem;
  border-radius: 1rem;
  padding: .6rem;
  scale: 100%;
  transition-duration: 0.25s;
  width: 15rem;
  text-align: center;
}

.button:hover {
  scale: 103%;
  transition-duration: 0.25s;
}

.block {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (prefers-color-scheme: dark) {
  .form {
    background-color: var(--d-background-color-80);
  }

  .button {
    background: var(--d-background-color);
    scale: 100%;
    transition-duration: 0.5s;
  }
}
</style>
