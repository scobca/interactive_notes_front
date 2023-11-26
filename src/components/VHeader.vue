<template>
  <div class="container">
    <div class="name">
      <h1 class="header_text">Interactive notes</h1>
    </div>
    <div class="block_buttons">
      <ul class="buttons_list">
        <li class="button">Создать заметку</li>
        <router-link to="/login">
          <li class="button" v-if="!login && !visibleButtons">Войти</li>
        </router-link>
        <li class="button" v-if="login && !visibleButtons">Профиль</li>
        <router-link to="/">
          <li class="button" v-if="visibleButtons">На главную</li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';

@Options({
  name: 'VHeader'
})
export default class VHeader extends Vue {
  login: boolean = false

  get visibleButtons() {
    if (this.$route.name == 'reg' || this.$route.name == 'login') {
      return true
    } else if (this.$route.name == '/') {
      return false
    }
  }
}
</script>

<style scoped>
.container {
  height: 10vh;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem .5rem 2rem;
  border-radius: 1rem;
}

.buttons_list {
  max-height: 5vh;
  display: flex;
  text-decoration: none;
  list-style: none;
  margin-top: .3rem;
}

.button {
  border-radius: .5rem;
  padding: .4rem;
  margin: 0 1rem
}

.header_text {
  font-weight: 100;
  font-size: 1.75rem;
}

@media (prefers-color-scheme: dark) {
  .container {
    background-color: var(--d-background-color-darker) !important;
  }

  .button {
    border: .1rem solid var(--d-border-color-1);
    transition-duration: .5s;
  }

  .button:hover {
    background: #bdbdbd;
    box-shadow: 0 0 5px 3px rgba(189, 189, 189, 0.95);
    border-color: #bdbdbd;
    color: black;
    transition-duration: .5s;
  }
}
</style>
