<template>
  <div class="container">
    <div class="form">
      <h2>Регистрация</h2>
      <div class="inputs_block">
        <div class="input_container">
          <p class="tag">Ваше ФИО</p>
          <VInput v-model="username" :placeholder="'Иванов Иван Иванович'" class="input"/>
        </div>

        <div class="input_container">
          <p class="tag">Ваша почта</p>
          <VInput v-model="email" :placeholder="'example@name.ru'" class="input"/>
        </div>

        <div class="input_container">
          <p class="tag">Введите пароль</p>
          <VInput v-model="password" :placeholder="'Пароль'" class="input"/>
        </div>

        <div class="input_container">
          <p class="tag">Повторите пароль</p>
          <VInput v-model="repeatPassword" :placeholder="'Повторите пароль'" class="input"/>
        </div>
      </div>
      <div class="block">
        <h2 class="button" @click="checkValid"> Зарегистрироваться </h2>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import VInput from "@/components/VInput.vue";

@Options({
  name: 'RegistrationView',
  components: {VInput},
})
export default class RegistrationView extends Vue {
  username: string | null = null;
  email: string | null = null;
  password: string | null = null;
  repeatPassword: string | null = null;

  checkValid() {
    if (this.username && this.email) {
      if (this.password == this.repeatPassword) {
        this.auth()
      } else {
        alert("Пароли не совпадают!")
      }
    } else {
      alert("Проверьте заполнение полей ФИО и Эл. почта!")
    }
  }

  auth() {
    alert("It's OK!")
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
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
  width: 20rem;
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
}

.button:hover {
  scale: 103%;
  transition-duration: 0.25s;
}

@media (prefers-color-scheme: dark) {
  .form {
    background-color: var(--d-background-color-60);
  }

  .button {
    background: var(--d-background-color);
    scale: 100%;
    transition-duration: 0.5s;
  }
}
</style>
