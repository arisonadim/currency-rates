<script setup lang="ts">
import { Rates } from 'App/types'

const props = defineProps<{
  placeholder?: string
  select?: Rates[]
  disabled?: boolean
}>()

// TODO validate on input

const amount = defineModel('amount')
const currency = defineModel('currency');

</script>

<template>
  <div class="input-select">
    <input
      type="number"
      :placeholder="props.placeholder"
      :disabled="props.disabled"
      v-model="amount"
    />
    <select v-model="currency">
      <option
        v-for="item in props.select"
        :value="item.currency"
        :key="`to${item.details.ID}`"
      >
        {{ item.currency }}
      </option>
    </select>
  </div>
</template>

<style lang="scss" scoped>
.input-select {
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  gap: 1rem;
  border-radius: 4rem;
  padding: 1rem 2rem;
  font-size: 2rem;
  text-transform: uppercase;
  border: 1px solid grey;
  max-width: 25rem;

  input {
    box-shadow: none;
    outline: none;
    border: none;
    font-size: 2rem;
    width: 11rem;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.9;
    }
  }
}
</style>
