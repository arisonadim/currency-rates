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
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 7rem;

  a {
    padding: 1rem 2rem;
    border-radius: 2rem 2rem 0 0;
    border: 2px solid var(--cardbackground);

    &.router-link-active {
      font-weight: 700;
      background: var(--cardbackground);
    }
  }
}
</style>
