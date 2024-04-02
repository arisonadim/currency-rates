<script setup lang="ts">
import { filename } from 'pathe/utils'

const props = defineProps<{
  currency: string
  code: string
  name: string
}>()

const glob = import.meta.glob('@/assets/images/flags/*.png', { eager: true })
const images = Object.fromEntries(
  Object.keys(glob).map((key) => [filename(key), key])
)
</script>

<template>
  <div class="currency">
    <div class="currency__flag">
      <img :src="images[props.currency.toLowerCase()]" :alt="`${props.currency} flag`" />
    </div>
    <div class="currency__info">
      <div class="currency__char">
        <b>{{ props.currency }}</b>
      </div>
      <div class="currency__code">{{ props.code }}</div>
    </div>
  </div>
</template>

<style lang="scss">
@import 'Styles/imports';

.currency {
  display: flex;
  gap: 1.5rem;
  align-items: center;

  &__flag {
    border-radius: 10rem;
    height: 4rem;
    width: 4rem;
    overflow: hidden;

    img {
      display: block;
      object-fit: cover;
      height: 100%;
    }
  }

  &__code {
    color: grey;
    font-size: 1.5rem;
  }

  &__info {
    @include sm {
      display: flex;
      gap: 1rem;
      align-items: center;
    }
  }
}
</style>
