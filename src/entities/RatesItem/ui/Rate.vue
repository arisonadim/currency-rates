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
      <div>{{ props.nominal }} <span class="rate__currency">{{ props.currency }}</span></div>
      <div>&nbsp;=&nbsp;</div>
      <div><b>{{ props.rate.toFixed(3) }}</b> <span class="rate__currency">RUB</span></div>
    </div>
    <div v-else>
      <div>1 <span class="rate__currency">RUB</span></div>
      <div>&nbsp;=&nbsp;</div>
      <div>
        <b>{{ ((1 / props.rate) * props.nominal).toFixed(3) }}</b> <span
          class="rate__currency"> {{ props.currency }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import 'Styles/imports.scss';

.rate {
  font-size: 1.75rem;

  @include sm {
    font-size: inherit;
  }

  & > div {
    display: flex;

    div {
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
