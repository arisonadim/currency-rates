<script setup lang="ts">
const props = defineProps<{
  href?: string
  to?: string
}>()

console.log(props.to);

const emit = defineEmits<{
  (e: 'click'): void
}>()

const btnClick = () => {
  emit('click')
}

</script>

<template>
  <button class="btn" @click="btnClick"><slot></slot></button>
</template>

<style lang="scss" scoped>
.btn {
  width: 5rem;
  height: 5rem;
  box-shadow: none;
  border: none;
  border-radius: 5rem;
  font-size: 2rem;
  line-height: 3rem;

  &--margin {
    margin-top: 5rem;
    margin-bottom: 5rem;
  }
}
</style>