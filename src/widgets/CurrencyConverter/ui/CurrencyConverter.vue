<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRates, useCalc } from 'App/providers'
import { Button } from 'UI/Button'
import { InputWithSelect } from 'UI/InputWithSelect'

const ratesStore = useRates()
const calcStore = useCalc()

const fromAmount = ref(0)
const toAmount = ref(0)
const fromCurrency = ref('EUR')
const toCurrency = ref('USD')

const flip = () => {
  ;[fromAmount.value, toAmount.value] = [toAmount.value, fromAmount.value]
  ;[fromCurrency.value, toCurrency.value] = [
    toCurrency.value,
    fromCurrency.value,
  ]
}

watch(
  [fromAmount, fromCurrency, toCurrency],
  ([fromAmount, fromCurrency, toCurrency]) => {
    toAmount.value = calcStore.calc(fromAmount, fromCurrency, toCurrency)
  }
)
</script>

<template>
  <div class="calculator">
    <InputWithSelect
      v-model:amount="fromAmount"
      v-model:currency="fromCurrency"
      :select="ratesStore.rates"
    />
    <Button class="calculator__btn" @click="flip">&#8596;</Button>
    <InputWithSelect
      v-model:amount="toAmount"
      v-model:currency="toCurrency"
      :select="ratesStore.rates"
      :disabled="true"
    />
  </div>
</template>

<style lang="scss">
@import 'Styles/imports';

.calculator {
  display: grid;
  grid-template-rows: auto;
  gap: 5rem;
  justify-items: center;

  @include sm {
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: 1rem;
  }

  &__btn {
    transform: rotate(-90deg);

    @include sm {
      transform: rotate(0deg);
    }
  }
}
</style>
