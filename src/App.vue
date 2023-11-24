<template>
  <div class="main_wrapper">
    <VHeader/>
    <router-view/>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import VHeader from "@/components/VHeader.vue";

@Options({
  name: 'App',
  components: {VHeader},
})
export default class App extends Vue {

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
