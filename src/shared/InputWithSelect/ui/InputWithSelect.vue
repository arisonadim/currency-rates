<script setup lang="ts">
import { Rates } from 'App/types'
import { ref, onMounted } from 'vue'

const props = defineProps<{
  placeholder?: string
  select?: Rates[]
  disabled?: boolean
}>()

const amount = defineModel('amount')
const currency = defineModel('currency');
const el = ref()

onMounted(() => {
  if(!props.disabled) {
    el.value.focus()
  }
})
</script>

<template>
  <div class="input-select">
    <input
      ref="el"
      type="number"
      min="0"
      :placeholder="props.placeholder"
      :disabled="props.disabled"
      v-model.number="amount"
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
@import 'Styles/imports';

.input-select {
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  gap: 1rem;
  border-radius: 4rem;
  padding: 1rem 2rem;
  font-size: 2rem;
  text-transform: uppercase;
  border: 1px solid grey;
  width: 32rem;

  @include sm {
    width: max(15rem, 100%);
  }

  input {
    box-shadow: none;
    outline: none;
    border: none;
    font-size: 2rem;
    width: max(11rem, 100%);
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

  select {
    border: none;
    background: transparent;
  }
}
</style>
