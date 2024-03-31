<script setup lang="ts">
import { useRates } from '../../app/providers'
import { onMounted, ref } from 'vue'

const ratesStore = useRates()
const str = ref('')

onMounted(() => {
  ratesStore.fetchRates()
})
</script>

<template>
  <div class="rates-list">
    <input type="text" v-model="str">
    <div class="rates-list__table" v-if="ratesStore.rates.length">
      <div>Заголовок</div>
      <div
        v-for="item in ratesStore.filterRates(str)"
        :key="item?.details.ID"
        class="rates-list__item"
      >
        {{ item.currency }} - {{ item.details.NumCode }} -
        {{ item.details.Value }} - {{ item.details.Value >= item.details.Previous ? '&#8599;' :  '&#8600;' }} 
        {{ Math.round((item.details.Value-item.details.Previous) * 1000) / 1000 }}
        <img
          :src="`https://wise.com/public-resources/assets/flags/rectangle/${item.currency.toLowerCase()}.png`"
          :alt="`${item.currency} flag`"
        />
      </div>
      <div class="rates-list__item" v-if="!ratesStore.filterRates(str).length">
        Нет подходящих результатов ¯\_(ツ)_/¯ 
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
