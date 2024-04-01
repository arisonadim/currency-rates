<script setup lang="ts">
import { RatesItem } from 'Entities/RatesItem'
import { Rates } from 'App/types'

const props = defineProps<{
  showTable: boolean
  data: Rates[]
  reverse?: boolean
}>()
</script>

<template>
  <div class="rates-table" v-if="props.showTable">
    <RatesItem
      v-for="item in props.data"
      :key="item?.details.ID"
      :item="item"
      :reverse="reverse"
    />
    <div class="rates-table__noresult" v-if="!data.length">
      No results...
    </div>
  </div>
  <div class="rates-table__noresult" v-else>Loading ...</div>
</template>

<style lang="scss">
.rates-table {
  gap: 3rem;
  display: grid;
  width: 100%;

  &__noresult {
    color: grey;
    padding: 2rem;
    border-radius: 5rem;
    background: var(--cardbackground);
  }
}
</style>
