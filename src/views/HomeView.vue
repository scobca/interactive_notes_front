<template>
  <div class="container">
    <div class="block">
      <div class="column">
        "Interactive notes" - это веб-приложение, предназначенное для эффективного и удобного управления вашими
        заметками. Оно сочетает в себе простоту использования с интересными возможностями взаимодействия, делая процесс
        создания и управления заметками более приятным и увлекательным.
      </div>
    </div>
    <div class="block">
      <div class="column">
        <img src="@/assets/images/starbucks.png" alt="" class="img">
        <div class="vertical_list">
          <h2 class="header_list">Наши преимущества</h2>
          <ul>
            <li class="list_text">Динамическое создание и редактирование заметок</li>
            <li class="list_text">Многозадачность</li>
            <li class="list_text">Группировка заметок</li>
            <li class="list_text">Экономия Вашего времени</li>
            <li class="list_text">Постоянное развитие и совершенствование</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="block">
      <h2 class="button"> К заметкам!</h2>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';

@Options({})
export default class HomeView extends Vue {

}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin-top: 3rem;
  gap: 2rem;
}

.block {
  display: flex;
  width: 80%;
  justify-content: center;
  gap: 5%;
  scale: 100%;
  transition-duration: 0.5s;
}

.column {
  padding: 1rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: row;
  gap: 7%;
}

.img {
  width: 40%;
  border-radius: 1rem;
  box-shadow: 0 0 15px var(--d-image-shadow-transparent-grey);
}

.header_list {
  font-weight: 400;
  margin-bottom: 1rem;
  font-size: 1.8rem;
}

.list_text {
  font-size: 1.2rem;
}

.button {
  font-weight: 400;
  border-radius: 1rem;
  width: 25%;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 5px;
  font-size: 1.25rem;
}

@media (prefers-color-scheme: dark) {
  .column {
    background: linear-gradient(200.42deg, var(--d-card-background-color-1) 13.57%, var(--d-card-background-color-2) 98.35%);
    box-shadow: 0 0 10px var(--d-border-color-2);
  }

  .button {
    background: var(--d-background-color);
    scale: 100%;
    transition-duration: 0.5s;
  }

  .button:hover, .block:hover {
    //box-shadow: 0 0 5px 3px var(--d-background-color);
    scale: 102%;
    transition-duration: 0.5s;
  }
}
</style>
