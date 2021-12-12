<script setup lang="ts">
import { ref, watch, watchEffect } from 'vue'

const className = ref(4)
const px = ref()
const rem = ref()

watchEffect(() => {
  px.value = className.value * 4
  rem.value = className.value / 4
})

watch(px, () => className.value = px.value / 4)
watch(rem, () => className.value = rem.value * 4)
</script>

<template>
<div class="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4">
  <div class="flex flex-col">
    <label>Name</label>
    <input v-model="className" type="number" min="0">
  </div>
  <div class="flex flex-col">
    <label>Pixels</label>
    <input v-model="px" type="number" min="0">
  </div>
  <div class="flex flex-col">
    <label>REM</label>
    <input v-model="rem" type="number" min="0">
  </div>
</div>
</template>

<style scoped>
input {
  @apply px-4 py-2 text-lg rounded bg-zinc-50 dark:bg-neutral-700 focus:outline-sky-500;
}
</style>