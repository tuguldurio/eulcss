<template>
  <SimplePreview title="Simple" :code="code">
    <div class="relative w-full h-5 bg-gray-100">
      <div class="absolute w-2/3 inset-0 bg-indigo-500">
      </div>
    </div>
  </SimplePreview>
</template>

<script setup>
const code = 
`<div class="relative w-full h-5 bg-gray-100">
  <div class="absolute w-2/3 inset-0 bg-indigo-500">
  </div>
</div>`
</script>