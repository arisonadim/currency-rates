<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{
  placeholder?: string
  type?: 'text' | 'number'
  clear?: boolean
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

const element = ref()

onMounted(() => {
  element.value.focus()
})
</script>

<template>
  <div class="input-wrapper">
    <div class="input-icon" v-if="props.icon">
      <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.5 15.5L19 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5 11C5 14.3137 7.68629 17 11 17C12.6597 17 14.1621 16.3261 15.2483 15.237C16.3308 14.1517 17 12.654 17 11C17 7.68629 14.3137 5 11 5C7.68629 5 5 7.68629 5 11Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
    <input
      ref="element"
      :type="props.type"
      :placeholder="props.placeholder"
      :disabled="props.disabled"
      v-model="model"
    />
    <div class="input-action" v-if="props.clear" @click="clearInput">
      <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
          <path d="m12 22c5.5 0 10-4.5 10-10s-4.5-10-10-10-10 4.5-10 10 4.5 10 10 10z"/>
          <path d="m9.16998 14.83 5.66002-5.65996"/>
          <path d="m14.83 14.83-5.66002-5.65996"/>
        </g>
      </svg>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import 'Styles/imports';

.input {
  &-wrapper {
    display: grid;
    grid-template-columns: repeat(3, auto);
    align-items: center;
    gap: 1rem;
    border-radius: 4rem;
    padding: 1rem 1rem;
    font-size: 2rem;
    text-transform: uppercase;
    border: 1px solid grey;
    width: 32rem;
    margin: 0 auto;

    input {
      box-shadow: none;
      outline: none;
      border: none;
      width: max(15rem, 100%);
      background: transparent;
      font-size: 2.7rem;

      @include sm {
        font-size: 2rem;
      }

      &:disabled {
        cursor: not-allowed;
        opacity: 0.9;
      }
    }
  }

  &-icon,
  &-action {
    svg {
      display: block;
    }
  }

  &-action {
    cursor: pointer;
  }
}
</style>
