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
      Нет подходящих результатов ¯\_(ツ)_/¯
    </div>
  </div>
  <div v-else>loading ...</div>
</template>

<style lang="scss">
.rates-table {
  gap: 0.5rem;
  display: grid;
  width: 100%;

  &__noresult {
    font-size: 1.7rem;
  }

  .rates-item {
    padding-top: 1rem;
    padding-bottom: 1rem;

    &:nth-child(odd) {
      background: rgba(0, 0, 0, 0.03);
    }
  }
}
</style>
