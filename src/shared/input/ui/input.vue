<script setup lang="ts">
import { Rates } from 'App/types'

const props = defineProps<{
  placeholder?: string
  type?: 'text' | 'number'
  clear?: boolean
  select?: Rates[]
  icon?: boolean
  disabled?: boolean
}>()

const model = defineModel()

const emit = defineEmits<{
  (e: 'clearInput'): void
}>()

const clearInput = () => {
  emit('clearInput')
}
</script>

<template>
  <div class="input-wrapper">
    <div class="input-icon">
      <img src="Images/search.svg" alt="icon search" v-if="props.icon" />
    </div>
    <input
      :type="props.type"
      :placeholder="props.placeholder"
      :disabled="props.disabled"
      v-model="model"
    />
    <div class="input-action" v-if="props.clear" @click="clearInput">
      <img src="Images/close-circle.svg" alt="icon x" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.input {
  &-wrapper {
    display: grid;
    grid-template-columns: 2rem auto 2rem;
    align-items: center;
    gap: 1rem;
    border-radius: 4rem;
    padding: 1rem 1rem;
    font-size: 2rem;
    text-transform: uppercase;
    border: 1px solid grey;
    max-width: 25rem;
    margin: 1rem auto;

    input {
      box-shadow: none;
      outline: none;
      border: none;
      font-size: 2rem;
      width: 15rem;

      &:disabled {
        cursor: not-allowed;
        opacity: 0.9;
      }
    }
  }

  &-action {
    width: 1em;
    height: auto;

    svg {
      display: block;
    }
  }
}
</style>
