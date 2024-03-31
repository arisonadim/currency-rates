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
    <div class="rates-list__table" v-if="props.showTable">
      <RatesItem 
        v-for="item in props.data"
        :key="item?.details.ID"
        :item="item"
        :reverse="reverse"
      />
      <div class="rates-list__noresult" v-if="!data.length">
        Нет подходящих результатов ¯\_(ツ)_/¯ 
      </div>
    </div>
    <div v-else>loading ...</div>
</template>

<style lang="scss">
.rates-list__table {
  gap: 2rem;
  display: grid;
}

.rates-list__noresult {
  font-size: 1.7rem;
}
</style>
