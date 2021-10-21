<script setup lang="ts">
import { ref } from 'vue'
import { useToggle } from '@vueuse/core'
import { useHighlighter } from '@/hooks/useHighlighter'
import { escapeHtml } from '@/utils'

interface Props {
  title: string
  code: string,
  paddingX?: boolean,
  paddingY?: boolean,
  bgGray?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  paddingX: true,
  paddingY: true,
  bgGray: false
})

// code
const escapedCode = escapeHtml(props.code)

const codeEl = ref()
const [showCode, toggleCode] = useToggle(false)

const { copy, copied } = useHighlighter(codeEl, props.code)
</script>

<template>
  <div class="w-full border border-color rounded overflow-hidden">
    <!-- Header -->
    <preview-header
      :title="props.title"
      @toggleCode="toggleCode"
      @copy="copy"
      :copied="copied"
    />

    <!-- Preview -->
    <div 
      class="relative flex"
      :class="[props.bgGray ? 'bg-light-400 dark:bg-dark-400' : 'bg-white dark:bg-dark-600']"
    >
      <div 
        v-html="code"
        class="relative flex-1 flex items-center justify-center"
        :class="{ 'px-4': props.paddingX, 'py-4': props.paddingY }"
      ></div>
    </div>

    <!-- Code -->
    <transition name="fade">
      <pre v-show="showCode" class="overflow-x-auto border-t border-color"><code ref="codeEl" v-html="escapedCode" class="language-html"></code></pre>
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