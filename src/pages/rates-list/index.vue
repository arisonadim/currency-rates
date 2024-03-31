<script setup lang="ts">
import { useRates } from 'App/providers'
import { onMounted, ref, computed } from 'vue'
import { RatesTable } from 'Features/RatesTable'

const ratesStore = useRates()
const str = ref('')
const reverse = ref(false)

const toggleReverse = () => {
  reverse.value = !reverse.value
}

const showTable = computed(() => {
  return ratesStore.rates.length > 0
})

onMounted(() => {
  ratesStore.fetchRates()
})


</script>

<template>
  <div class="rates-list">
    <input type="text" v-model.trim="str">
    <span @click="() => str = ''">&nbsp;X</span>
    <div><button @click="toggleReverse">reverse</button></div>
    <RatesTable 
      :data="ratesStore.filterRates(str)"
      :show-table="showTable"
      :reverse="reverse"
    />
  </div>
</template>

<style lang="scss">
.rates-list {
  &__table {
    gap: 2rem;
    display: grid;
  }
}
</style>
