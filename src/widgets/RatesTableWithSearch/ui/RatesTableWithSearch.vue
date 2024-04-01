<script setup lang="ts">
import { useRates } from 'App/providers'
import { ref, computed } from 'vue'
import { RatesTable } from 'Features/RatesTable'
import { Input } from 'UI/Input'
import { Button } from 'UI/Button'

const ratesStore = useRates()
const search = ref('')
const reverse = ref(false)

const toggleReverse = () => {
  reverse.value = !reverse.value
}

const showTable = computed(() => {
  return ratesStore.rates.length > 0
})
</script>

<template>
  <div class="rates-list">
    <Input
      type="text"
      v-model.trim="search"
      :icon="true"
      :clear="true"
      @clear-input="() => (search = '')"
    />
    <Button @click="toggleReverse" class="btn--margin">&#8596;</Button>
    <RatesTable
      :data="ratesStore.filterRates(search)"
      :show-table="showTable"
      :reverse="reverse"
    />
  </div>
</template>

<style lang="scss"></style>
