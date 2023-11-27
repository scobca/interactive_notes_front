<template>
  <textarea
    @input="$emit('update:modelValue', $event.target.value)"
    class="input"
    :placeholder="placeholder"
    :value="modelValue"
    :disabled="disabled"
    :rows="rows"
  ></textarea>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import {Prop} from "vue-property-decorator";

@Options({
  name: 'VTextarea',
})
export default class VTextarea extends Vue {
  @Prop()
  placeholder!: string

  @Prop({default: false})
  disabled!: boolean

  @Prop()
  modelValue!: string

  @Prop({default: 10})
  rows!: number
}
</script>

<style scoped>
.input {
  background: rgba(7, 18, 25, 0.75);
  color: var(--light);
  border-color: var(--border-dark);
  border-width: 1px;
  border-style: solid;
  border-radius: 0.3rem;
  text-align: center;
  transition: all .3s ease-in-out;
  resize: none;
  height: 20rem;
  padding: .5rem;
}
.input::placeholder {
}
.input:hover {
  background: rgba(7, 18, 25, 0.75);
  color: var(--light);
  border-color: var(--border-dark);
  border-width: 1px;
  border-style: solid;
  border-radius: 0.3rem;
  text-align: center;
  transition: all .3s ease-in-out;
}

.input:invalid {
  background-color: hsla(0, 83%, 41%, 0.89);
}

::placeholder {
  font-style: italic;
  color: rgba(255, 255, 255, 0.53);
}
</style>
