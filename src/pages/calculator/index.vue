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
  [fromAmount, () => fromCurrency.value, () => toCurrency.value],
  ([a, b, c]) => {
    toAmount.value = calcStore.calc(a, b, c)
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
    <Button @click="flip">&#8596;</Button>
    <InputWithSelect
      v-model:amount="toAmount"
      v-model:currency="toCurrency"
      :select="ratesStore.rates"
    />
  </div>
</template>

<style lang="scss">
.calculator {
  display: flex;
  justify-content: center;
  gap: 1rem;
}
</style>
