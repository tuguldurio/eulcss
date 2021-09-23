<template>
  <SimplePreview title="With Label" :code="code">
    <div class="relative w-full h-5 bg-gray-100">
      <div class="absolute w-1/3 inset-0 bg-indigo-500 flex items-center justify-center text-white">
       33%
      </div>
    </div>
  </SimplePreview>
</template>

<script setup>
const code = 
`<div class="relative w-full h-5 bg-gray-100">
  <div class="absolute w-1/3 inset-0 bg-indigo-500 flex items-center justify-center text-white">
    33%
  </div>
</div>`
</script>