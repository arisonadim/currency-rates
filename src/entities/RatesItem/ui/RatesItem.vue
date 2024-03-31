<script setup lang="ts">
import { Rates } from 'App/types'

const props = defineProps<{
  item: Rates
  reverse?: boolean
  
}>()


</script>

<template>
  <div class="rates-list__item">
    <img
          :src="`https://wise.com/public-resources/assets/flags/rectangle/${item.currency.toLowerCase()}.png` || 'default'"
          :alt="`${props.item.currency} flag`"
        />
    <span><b>{{ props.item.currency }}</b> <sup>{{ props.item.details.NumCode }}</sup></span>
    <span v-if="!reverse">{{ props.item.details.Nominal }} {{ props.item.currency }} = <b>{{ props.item.details.Value.toFixed(3) }}</b> RUB</span>
    <span v-else> 1 RUB = <b> {{ ((1 / props.item.details.Value) * props.item.details.Nominal).toFixed(3) }}</b> {{ props.item.currency }} </span>
    <span>{{ props.item.details.Value >= props.item.details.Previous ? '&#8599;' :  '&#8600;' }} 
    {{ (props.item.details.Value - props.item.details.Previous).toFixed(3) }}</span>
  </div>
</template>

<style lang="scss">
.rates-list__item {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr 3fr 1fr;
}
</style>