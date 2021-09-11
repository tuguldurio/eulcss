<script setup>
import { ref } from 'vue'
import { useHighlighter } from '@/hooks/useHighlighter'

const props = defineProps({
  title: String,
  code: String
})

const codeEl = ref()
const showCode = ref(false)

const { copy, copied } = useHighlighter(codeEl, props.code)
</script>

<template>
  <div class="shadow rounded overflow-hidden">
    <div class="flex justify-between py-1 px-3 bg-white">
      <div class="flex space-x-1 items-center">
        <h2 class="text-xl text-gray-600">{{ props.title }}</h2>
      </div>

      <div class="flex space-x-1">
        <button @click="showCode=!showCode" class="transition-colors duration-300 ease-in-out p-1 rounded-lg hover:text-gray-700 hover:bg-gray-200 focus:outline-none text-gray-600"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        </button>
        <button @click="copy()" :class="[copied ? 'text-green-500' : 'text-gray-600 hover:text-gray-700 hover:bg-gray-200']" class="transition-colors duration-300 ease-in-out p-1 rounded-lg focus:outline-none"
        >
          <svg v-if="copied" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </button>
      </div>
    </div>

    <div class="relative flex items-center justify-center p-4 bg-gray-50">
      <slot></slot>
    </div>

    <transition name="fade">
      <pre v-show="showCode" class="max-w-full max-h-92 overflow-x-auto"><code ref="codeEl" v-html="props.code" class="language-html"></code></pre>
    </transition>
  </div>
</template>

<style scoped>
::-webkit-scrollbar {
  width: 20px;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
}

::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
  border-radius: 20px;
}

::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
  border-radius: 20px;
  border: 6px solid transparent;
  background-clip: content-box;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #a8bbbf;
}
</style>