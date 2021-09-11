import { ref, watch, Ref } from 'vue'
import { useClipboard } from '@vueuse/core'

import hljs from 'highlight.js'
// import hljs from 'highlight.js/lib/core'
// import html from 'highlight.js/lib/languages/vbscript-html'
// hljs.registerLanguage('html', html)

function htmlDecode(input: string): string {
  let e: HTMLDivElement = document.createElement('div')
  e.innerHTML = input
  return e.childNodes.length === 0 ? '' : <string> e.childNodes[0].nodeValue
}

export function useHighlighter(codeEl: Ref, input: string) {
  const { copy, copied } = useClipboard({
    // read: false,
    source: htmlDecode(input)
  })
  
  watch(codeEl, (current, _) => {
    if (current) {
      hljs.highlightElement(codeEl.value)
    }
  })
  
  return {
    copy,
    copied
  }
}