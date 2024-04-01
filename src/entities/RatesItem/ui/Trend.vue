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
    <span>{{ isGrowing ? '&#x2197;' :  '&#x2198;' }}</span>&nbsp;
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
}
</style>