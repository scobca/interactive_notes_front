<template>
  <div class="container">
    <div>
      <div class="buttons_block">
        <router-link to="/p">Назад</router-link>
      </div>
      <h2 class="note_header">
<!--        Заголовок -->
        {{note.header}}
      </h2>
      <div class="note_text">
<!--        Текст заметки-->
        <p>{{note.text}}</p>
      </div>
    </div>
    <div class="save_button buttons_block">
      Сохранить и закрыть
    </div>
  </div>
</template>

<script lang="ts">

import {Options, Vue} from 'vue-class-component';
import {Prop} from "vue-property-decorator";
import {NoteBodyDto} from "@/assets/dto/noteBody.dto";

@Options({
  name: 'VNote',
})
export default class VNote extends Vue {
  @Prop({default: null})
  note!: NoteBodyDto | null

}
</script>


<style scoped>
.container {
  width: 90%;
  min-height: 95vh;
  padding: 2rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
}

.buttons_block {
  width: 7rem;
  height: 2rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
  font-size: 1.15rem;
  border-radius: 1rem;

  scale: 100%;
  transition-duration: .3s;
}

.buttons_block:hover {
  scale: 105%;
  transition-duration: .3s;
}

.save_button {
  width: 15rem;
  margin-bottom: 0;
}

.note_header {
  margin-bottom: 2rem;
  font-size: 2rem;
}

.note_text {
  min-height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  border-radius: 1rem;
}

@media (prefers-color-scheme: dark) {
  .container, .note_text {
    background-color: var(--d-background-color-80);
  }

  .buttons_block {
    background: var(--d-border-color-3);
  }
}
</style>
