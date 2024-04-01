<script setup lang='ts'>
import { computed } from 'vue'

const props = defineProps<{
  current: number
  previous: number
}>()

const isGrowing = computed(() => {
  return props.current >= props.previous
})
</script>

<template>
  <div class='trend' :class="{ 'trend--green': isGrowing }">
    <span v-if="isGrowing"><img src="Images/arrup.svg" alt="up" class="trend__arrow"></span>
    <span v-else><img src="Images/arrdown.svg" alt="up" class="trend__arrow"></span>
    <span>{{ isGrowing ? '+' : '-'  }}</span>
    <span>{{ Math.abs((props.current - props.previous)).toFixed(3)  }}</span>
  </div>
</template>

<style lang='scss' scoped>
.trend {
  color: red;
  font-size: 1.5rem;

  &--green {
    color: green;
  }

  &__arrow {
    fill: currentColor;
    width: 1.2rem;
    display: inline;
    margin-right: 1rem;
  }
}
</style>