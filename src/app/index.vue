<script setup lang="ts">
import { useRates } from 'App/providers'
import { onMounted } from 'vue'

const ratesStore = useRates()

onMounted(() => {
  ratesStore.fetchRates()
})
</script>

<template>
  <nav>
    <RouterLink :to="{ name: 'Home'}">Currency rates</RouterLink>
    <RouterLink :to="{ name: 'Calc'}">Converter</RouterLink>
  </nav>
  <RouterView/>
</template>

<style lang="scss">
nav {
  margin: 5rem auto;

  a:not(:last-child) {
    margin-right: 5rem;
  }
}
</style>
