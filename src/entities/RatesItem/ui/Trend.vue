<script setup lang='ts'>
import { computed } from 'vue'

const props = defineProps<{
  current: number
  previous: number
}>()

const isGroing = computed(() => {
  return props.current >= props.previous
})
</script>

<template>
  <div class='trend' :class="{ 'trend--green': isGroing }">
    <span>{{ isGroing ? '&#8599;' :  '&#8600;' }}</span>&nbsp;
    <span>{{ isGroing ? '+' : '-'  }}</span>
    <span>{{ Math.abs((props.current - props.previous)).toFixed(3)  }}</span>
  </div>
</template>

<style lang='scss' scoped>
.trend {
  color: red;

  &--green {
    color: green;
  }
}
</style>