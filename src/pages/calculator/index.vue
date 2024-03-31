<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRates, useCalc } from 'App/providers'

// TODO validate on input, watch and calc

const ratesStore = useRates()
const calcStore = useCalc()

const fromAmount = ref(0)
const toAmount = ref(0)
const fromCurrency = ref('EUR')
const toCurrency = ref('USD')

const flip = () => {
  const amount = fromAmount.value
  fromAmount.value = toAmount.value
  toAmount.value = amount
  const currency = fromCurrency.value
  fromCurrency.value = toCurrency.value
  toCurrency.value = currency
}

onMounted(() => {
  calcStore.calc()
})

const update = () => {
  console.log('update');
  
}

</script>

<template>
  <div class="calculator">
    <input type="number" v-model="fromAmount" @update="() => update"/>
    <select v-model="fromCurrency">
      <option
        v-for="item in ratesStore.rates"
        :value="item.currency"
        :key="item.details.ID"
      >
        {{ item.currency }}
      </option>
    </select>
    <button @click="flip">&#8596;</button>
    <input type="number" v-model="toAmount" disabled />
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
