<script setup lang="ts">
const props = defineProps<{
  title: string
  copied: boolean
  isDark: boolean
}>()

const emits = defineEmits(['toggleDark', 'toggleCode', 'copy'])
</script>

<template>
  <div class="flex flex-col sm:flex-row justify-between items-center py-1 px-3 text-neutral-700 dark:text-neutral-300 bg-white dark:bg-zinc-900 border-b border-color">
    <div class="flex space-x-1 items-center">
      <h2 class="text-xl">{{ props.title }}</h2>
    </div>

    <div class="flex space-x-1">
      <button @click="emits('toggleDark')">
        <svg v-if="isDark" class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path d="M12.998 22h-2v-3h2v3zm5.364-2.222l-2.121-2.121l1.414-1.414l2.122 2.122l-1.413 1.413h-.002zm-12.728 0L4.22 18.364l2.12-2.122l1.415 1.414l-2.12 2.121v.001zm6.364-2.771a5.007 5.007 0 1 1 .004-10.014a5.007 5.007 0 0 1-.004 10.014zm0-8.014a3.007 3.007 0 1 0 .004 6.014a3.007 3.007 0 0 0-.004-6.014zm10 4.007h-3v-2h3v2zm-17 0h-3v-2h3v2zm12.656-5.242l-1.413-1.415l2.121-2.122l1.415 1.415l-2.122 2.121l-.001.001zm-11.313 0l-2.12-2.121l1.415-1.414l2.12 2.122l-1.414 1.412v.001zM12.998 5h-2V2h2v3z" fill="currentColor"/></g></svg>
        <svg v-else class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.248 16.997A10.76 10.76 0 0 1 18 17C11.925 17 7 12.075 7 6c0-.083 0-.166.003-.248a8 8 0 1 0 11.245 11.245zm1.218-2.116A9 9 0 0 1 9.822 2.238A9.999 9.999 0 0 0 2 12c0 5.523 4.477 10 10 10a10 10 0 0 0 9.762-7.822c-.72.332-1.49.571-2.296.703z" fill="currentColor"/></g></svg>
      </button>

      <button
        @click="emits('toggleCode')"
        class="transition-colors duration-300 ease-in-out p-1 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
        </svg>
      </button>

      <button
        @click="emits('copy')"
        class="transition-colors duration-300 ease-in-out p-1 rounded-lg focus:outline-none"
        :class="[props.copied ? 'text-green-500' : 'hover:bg-neutral-100 dark:hover:bg-neutral-800']"
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