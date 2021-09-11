<template>
  <button type="button" class="px-4 py-2 text-white font-medium text-sm bg-blue-500 hover:bg-blue-700 active:bg-blue-800 rounded shadow hover:shadow-md outline-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ease-linear transition-all duration-150">
    Ring
  </button>
</template>

<script>
import { escapeHtml } from '@/hooks/escapeHtml'

let code = 
`<button type="button" class="px-4 py-2 text-white font-medium text-sm bg-blue-500 hover:bg-blue-700 active:bg-blue-800 rounded shadow hover:shadow-md outline-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ease-linear transition-all duration-150">
  Ring
</button>`

export default {
  code: escapeHtml(code)
}
</script>