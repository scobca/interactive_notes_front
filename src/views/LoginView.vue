<template>
  <div class="container">
    <div class="form">
      <h2>Вход в аккаунт</h2>
      <div class="inputs_block">
        <div class="input_container">
          <p class="tag">Логин</p>
          <VInput v-model="this.email" :placeholder="'Иванов Иван Иванович'" class="input"/>
        </div>

        <div class="input_container">
          <p class="tag">Пароль</p>
          <VInput v-model="this.password" :placeholder="'example@name.ru'" class="input"/>
        </div>
        <div class="block">
          <h2 class="button" @click="login"> Войти </h2>
          <p v-bind:style="{fontSize: '0.85rem', paddingTop: '5px'}">
            Нет аккаунта?

            <span class="toReg"
                  v-bind:style="{borderBottom: '1px solid var(--d-text-color)', cursor: 'pointer'}"
                  @click="this.$router.push('/registration')">Регистрация
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import VInput from "@/components/VInput.vue";

@Options({
  name: 'LoginView',
  components: {VInput},
})
export default class LoginView extends Vue {
  email: string | null = null;
  password: string | null = null;

  login() {
    alert('Login')
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
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
    background-color: var(--d-background-color-60);
  }

  .button {
    background: var(--d-background-color);
    scale: 100%;
    transition-duration: 0.5s;
  }
}
</style>
