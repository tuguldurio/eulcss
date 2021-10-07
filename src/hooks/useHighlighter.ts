import { watch, Ref } from 'vue'
import { useClipboard } from '@vueuse/core'

import hljs from 'highlight.js'
// import hljs from 'highlight.js/lib/core'
// import html from 'highlight.js/lib/languages/vbscript-html'
// hljs.registerLanguage('html', html)

export function useHighlighter(codeEl: Ref, input: string) {
  const { copy, copied } = useClipboard({
    // read: false,
    source: input
  })
  
  watch(codeEl, () => {
    if (codeEl.value) {
      hljs.highlightElement(codeEl.value)
    }
  })
  
  return {
    copy,
    copied
  }
}