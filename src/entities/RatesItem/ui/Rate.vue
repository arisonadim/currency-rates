<script setup lang="ts">
const props = defineProps<{
  reverse: boolean
  nominal: number
  rate: number
  currency: string
}>()
</script>

<template>
  <div class="rate">
    <div v-if="!reverse">
      <span>{{ props.nominal }} {{ props.currency }}</span>
      <span>&nbsp;=&nbsp;</span>
      <span
        ><b>{{ props.rate.toFixed(3) }}</b> RUB</span
      >
    </div>
    <div v-else>
      <span>1 RUB </span> <span>&nbsp;=&nbsp;</span>
      <span
        ><b> {{ ((1 / props.rate) * props.nominal).toFixed(3) }}</b>
        {{ props.currency }}
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.rate {
  & > div {
    display: flex;
    gap: 1rem;

    span {
      &:first-child {
        text-align: right;
        flex: 1;
      }

      &:last-child {
        text-align: left;
        flex: 1;
      }
    }
  }
}
</style>
