<script setup lang="ts">
import { useRates } from '../../app/providers'
import { onMounted } from 'vue'

const ratesStore = useRates()

onMounted(() => {
  ratesStore.fetchRates()
})
</script>

<template>
  <div class="rates-list">
    <div class="rates-list__table" v-if="ratesStore.rates.length">
      <div>Заголовок</div>
      <div
        v-for="item in ratesStore.rates"
        :key="item?.details.ID"
        class="rates-list__item"
      >
        {{ item.currency }} - {{ item.details.NumCode }} -
        {{ item.details.Value }}
        <img
          :src="`https://wise.com/public-resources/assets/flags/rectangle/${item.currency.toLowerCase()}.png`"
          :alt="`${item.currency} flag`"
        />
      </div>
    </div>
    <div v-else>loading ...</div>
  </div>
</template>

<style lang="scss">
.rates-list {
  &__table {
  }

  &__item {
    display: grid;
  }
}
</style>
