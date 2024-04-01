<script setup lang="ts">
import { Rates } from 'App/types'
import { Trend } from 'Entities/RatesItem'
import { Rate } from 'Entities/RatesItem'
import { Currency } from 'Entities/RatesItem'

const props = defineProps<{
  item: Rates
  reverse?: boolean
}>()
</script>

<template>
  <div class="rates-item">
    <Currency
      :currency="props.item.currency"
      :code="props.item.details.NumCode"
      :name="props.item.details.Name"
    />
    <Rate
      :reverse="props.reverse"
      :nominal="props.item.details.Nominal"
      :rate="props.item.details.Value"
      :currency="props.item.currency"
    />
    <Trend
      :current="props.item.details.Value"
      :previous="props.item.details.Previous"
    />
  </div>
</template>

<style lang="scss">
.rates-item {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
}
</style>
