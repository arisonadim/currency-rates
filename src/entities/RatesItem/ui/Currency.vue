<script setup lang="ts">
const props = defineProps<{
  currency: string
  code: string
  name: string
}>()

// TODO fallback fo flag img
</script>

<template>
  <div class="currency">
    <div class="currency__flag">
      <img
        :src="`https://wise.com/public-resources/assets/flags/rectangle/${props.currency.toLowerCase()}.png`"
        :alt="`${props.currency} flag`"
      />
    </div>
    <div class="currency__char">
      <div><b>{{ props.currency }}</b></div>
      <div class="currency__info">{{ props.code }}</div>
    </div>
    
  </div>
</template>

<style lang="scss">
.currency {
  display: flex;
  gap: 1rem;
  align-items: center;

  &__flag {
    border-radius: 1px;
    overflow: hidden;

    img {
      display: block;
    }
  }

  &__info {
    color: grey;
    font-size: 0.7rem;
  }
}
</style>
