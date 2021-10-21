<script setup lang="ts">
const props = defineProps<{
  title: string
  copied: boolean
}>()

const emits = defineEmits(['toggleCode', 'copy'])
</script>

<template>
  <div class="flex flex-col sm:flex-row justify-between items-center py-1 px-3 bg-white dark:bg-dark-600 border-b border-color">
    <div class="flex space-x-1 items-center">
      <h2 class="text-xl text-dark-50 dark:text-light-300">{{ props.title }}</h2>
    </div>

    <div class="flex space-x-1">
      <button
        @click="emits('toggleCode')"
        class="transition-colors duration-300 ease-in-out p-1 rounded-lg text-dark-50 dark:text-true-gray-300 hover:bg-light-300 dark:hover:bg-dark-300 focus:outline-none"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      </button>

      <button
        @click="emits('copy')"
        class="transition-colors duration-300 ease-in-out p-1 rounded-lg focus:outline-none"
        :class="[props.copied ? 'text-green-500' : 'text-dark-50 dark:text-true-gray-300 hover:bg-light-300 dark:hover:bg-dark-300']"
      >
        <svg v-if="props.copied" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
svg {
  @apply w-6 h-6;
}
</style>