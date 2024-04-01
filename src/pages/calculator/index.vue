<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRates, useCalc } from 'App/providers'
import { Input } from 'UI/Input'
import { Button } from 'UI/Button'

// TODO validate on input

const ratesStore = useRates()
const calcStore = useCalc()

const fromAmount = ref(0)
const toAmount = ref(0)
const fromCurrency = ref('EUR')
const toCurrency = ref('USD')

const flip = () => {
  [ fromAmount.value, toAmount.value ] = [ toAmount.value, fromAmount.value ];
  [ fromCurrency.value, toCurrency.value ] = [ toCurrency.value, fromCurrency.value ];
}

watch([fromAmount, () => fromCurrency.value, () => toCurrency.value], ([a, b, c ]) => {
  toAmount.value = calcStore.calc(a, b, c)
})
</script>

<template>
  <div class="calculator">
    <Input v-model="fromAmount" type="number"/>
    <select v-model="fromCurrency">
      <option
        v-for="item in ratesStore.rates"
        :value="item.currency"
        :key="item.details.ID"
      >
        {{ item.currency }}
      </option>
    </select>
    <Button @click="flip">&#8596;</Button>
    <Input v-model="toAmount" type="number" disabled/>
    <select v-model="toCurrency">
      <option
        v-for="item in ratesStore.rates"
        :value="item.currency"
        :key="`to${item.details.ID}`"
      >
        {{ item.currency }}
      </option>
    </select>
  </div>
</template>

<style lang="scss">
.calculator {
  display: flex;
  justify-content: center
}
</style>