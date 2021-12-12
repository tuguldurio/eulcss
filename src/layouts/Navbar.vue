<script setup lang="ts">
import { watch } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import useInfo from '@/hooks/useInfo'

const { title } = useInfo()

const isDark = useDark()
const toggleDark = useToggle(isDark)

function lookupCodeLink() {
  if (isDark.value) {
    document.querySelector('link[title=codeDark]')?.removeAttribute('disabled')
    document.querySelector('link[title=codeLight]')?.setAttribute('disabled', 'disabled')
  } else {
    document.querySelector('link[title=codeLight]')?.removeAttribute('disabled')
    document.querySelector('link[title=codeDark]')?.setAttribute('disabled', 'disabled')
  }
}

lookupCodeLink()
watch(isDark, () => {
  lookupCodeLink()
})
</script>

<template>
  <header class="fixed top-0 w-full h-header z-50 py-2 bg-white dark:bg-dark-600 border-b border-color transition"
  >
    <div class="container w-full h-full flex items-center mx-auto">
      <div class="w-full flex items-center justify-between">
        <a href="/" class="inline-flex items-center space-x-2 text-3xl title-color">
          <img src="@/assets/icon.svg" class="w-8">
          <span>{{ title }}</span>
        </a>
        
        <nav class="flex items-center space-x-1 sm:space-x-4">
          <button @click="toggleDark()">
            <svg v-if="isDark" class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path d="M12.998 22h-2v-3h2v3zm5.364-2.222l-2.121-2.121l1.414-1.414l2.122 2.122l-1.413 1.413h-.002zm-12.728 0L4.22 18.364l2.12-2.122l1.415 1.414l-2.12 2.121v.001zm6.364-2.771a5.007 5.007 0 1 1 .004-10.014a5.007 5.007 0 0 1-.004 10.014zm0-8.014a3.007 3.007 0 1 0 .004 6.014a3.007 3.007 0 0 0-.004-6.014zm10 4.007h-3v-2h3v2zm-17 0h-3v-2h3v2zm12.656-5.242l-1.413-1.415l2.121-2.122l1.415 1.415l-2.122 2.121l-.001.001zm-11.313 0l-2.12-2.121l1.415-1.414l2.12 2.122l-1.414 1.412v.001zM12.998 5h-2V2h2v3z" fill="currentColor"/></g></svg>
            <svg v-else class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.248 16.997A10.76 10.76 0 0 1 18 17C11.925 17 7 12.075 7 6c0-.083 0-.166.003-.248a8 8 0 1 0 11.245 11.245zm1.218-2.116A9 9 0 0 1 9.822 2.238A9.999 9.999 0 0 0 2 12c0 5.523 4.477 10 10 10a10 10 0 0 0 9.762-7.822c-.72.332-1.49.571-2.296.703z" fill="currentColor"/></g></svg>
          </button>
          <a href="https://github.com/tuguldurio/eulcss" target="_blank">
            <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792"><path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path></svg>
          </a>
        </nav>
      </div>
    </div>
  </header>
</template>