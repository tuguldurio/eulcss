<template>
  <button type="button" class="px-4 py-2 text-black hover:text-white font-medium text-sm bg-white hover:bg-black active:bg-gray-800 border border-black rounded outline-none focus:outline-none ease-linear transition-all duration-150">
    Primary
  </button>
</template>

<script>
import { escapeHtml } from '@/hooks/escapeHtml'

let code = 
`<button type="button" class="px-4 py-2 text-black hover:text-white font-medium text-sm bg-white hover:bg-black active:bg-gray-800 border border-black rounded outline-none focus:outline-none ease-linear transition-all duration-150">
  Primary
</button>`

export default {
  code: escapeHtml(code)
}
</script>