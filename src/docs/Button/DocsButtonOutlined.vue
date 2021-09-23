<template>
  <SimplePreview title="Outlined" :code="code">
    <button type="button" class="px-4 py-2 text-black hover:text-white font-medium text-sm bg-white hover:bg-black active:bg-gray-800 border border-black rounded outline-none focus:outline-none ease-linear transition-all duration-150">
      Outlined
    </button>
  </SimplePreview>
</template>

<script setup>
const code = 
`<button type="button" class="px-4 py-2 text-black hover:text-white font-medium text-sm bg-white hover:bg-black active:bg-gray-800 border border-black rounded outline-none focus:outline-none ease-linear transition-all duration-150">
  Outlined
</button>`
</script>