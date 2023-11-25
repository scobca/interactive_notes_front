<template>
  <input
    @input="$emit('update:modelValue', $event.target.value)"
    class="input"
    :placeholder="placeholder"
    :value="modelValue"
    :disabled="disabled"
  >
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {Prop} from "vue-property-decorator";

@Options({
  name: 'VInput',
})
export default class VInput extends Vue {
  @Prop()
  placeholder!: string

  @Prop()
  modelValue!: string

  @Prop({default: false})
  disabled!: boolean

}
</script>

<style scoped>
.input {
  background: rgba(7, 18, 25, 0.75);
  color: var(--light);
  border-color: var(--border-dark);
  border-width: 1px;
  border-style: solid;
  height: 2rem;
  border-radius: 0.3rem;
  text-align: center;
  transition: all .3s ease-in-out;
}
.input:focus {
  background: rgba(7, 18, 25, 0.75);
  color: var(--light);
  border-color: var(--border-dark);
  border-width: 1px;
  border-style: solid;
  height: 2rem;
  border-radius: 0.3rem;
  text-align: center;
  transition: all .3s ease-in-out;
}

.input:hover {
  background: rgba(7, 18, 25, 0.75);
  color: var(--light);
  border-color: var(--border-dark);
  border-width: 1px;
  border-style: solid;
  height: 2rem;
  border-radius: 0.3rem;
  text-align: center;
  transition: all .3s ease-in-out;
}

.input:active {
  background: rgba(7, 18, 25, 0.75);
  color: var(--light);
  border-color: var(--border-dark);
  border-width: 1px;
  border-style: solid;
  height: 2rem;
  border-radius: 0.3rem;
  text-align: center;
  transition: all .3s ease-in-out;
}

.input:invalid {
  background: rgba(7, 18, 25, 0.75);
  color: var(--light);
  border-color: var(--border-dark);
  border-width: 1px;
  padding-left: 1rem !important;
  border-style: solid;
  height: 2rem;
  border-radius: 0.3rem;
  text-align: center;
  transition: all .3s ease-in-out;
}

::placeholder {
  font-style: italic;
  color: rgba(255, 255, 255, 0.53);
}
</style>
