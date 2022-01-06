<script setup lang="ts">
import { ref } from 'vue'
import { useToggle } from '@vueuse/core'
import { useHighlighter } from '@/hooks/useHighlighter'
import { escapeHtml } from '@/utils/escapeHtml'
import { useDocument } from '@/hooks/preview'
import useDark from '@/hooks/isDark'

interface Props {
  title: string
  code: string,
  paddingX?: boolean,
  paddingY?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  paddingX: true,
  paddingY: true
})

const escapedCode = escapeHtml(props.code)

// syntax highlighting
const codeEl = ref<HTMLElement | null>(null)
const { copy, copied } = useHighlighter(codeEl, props.code)

// dark mode for iframe
const { isDark: globalDark } = useDark()
const [isDark, toggleDark] = useToggle(globalDark.value)

// formatting for the iframe srcdoc
const { document } = useDocument(props.code, props.paddingX, props.paddingY, isDark)

// toggler for previewing code
const [showCode, toggleCode] = useToggle(false)

// TODO: resizing
// iframe width
// const frameWidth = ref<number>()

// const resizeEl = ref<HTMLElement | null>(null)

// const { x: dragX } = useDraggable(resizeEl)

// onMounted(() => {
//   frameWidth.value = resizeEl.value!.parentElement!.getBoundingClientRect().width
// })

// watch(dragX, () => {
//   const rect = resizeEl.value!.parentElement!.getBoundingClientRect()
//   frameWidth.value = dragX.value - rect.left + resizeEl.value!.clientWidth
// })
</script>

<template>
  <div class="w-full border border-color rounded overflow-hidden">
    <!-- Header -->
    <PreviewHeader
      :title="props.title"
      @toggleCode="toggleCode"
      @copy="copy"
      :copied="copied"
      :isDark="isDark"
      @toggleDark="toggleDark"
    />

    <!-- Preview -->
    <div class="relative ">
      <div class="max-w-full flex">
        <iframe :title="props.title" class="w-full" :srcdoc="document" onload='javascript:(function(o){o.style.height=o.contentWindow.document.body.scrollHeight+"px";}(this));'/>
      </div>
    </div>

    <!-- Code -->
    <transition name="fade">
      <pre v-show="showCode" class="overflow-x-auto border-t border-color"><code ref="codeEl" v-html="escapedCode" class="language-html"></code></pre>
    </transition>
  </div>
</template>

<style scoped>
iframe {
  min-width: 360px;
  resize: horizontal;
  overflow: auto;
}

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