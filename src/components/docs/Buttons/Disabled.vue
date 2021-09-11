<template>
  <button type="button" disabled class="px-4 py-2 text-white font-medium text-sm bg-red-400 opacity-50 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150">
    Disabled
  </button>
</template>

<script>
import { escapeHtml } from '@/hooks/escapeHtml'

let code = 
`<button type="button" class="px-4 py-2 text-white font-medium text-sm bg-blue-500 hover:bg-blue-700 active:bg-blue-800 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150">
  Primary
</button>`

export default {
  code: escapeHtml(code)
}
</script>