<template>
  <SimplePreview title="Simple" :code="code" bgGray :paddingX="false">

    <header class="w-full dark:text-white bg-white dark:bg-gray-800 shadow">
      <div class="h-full flex items-center justify-between py-4 px-6">
        <div>
          <a href="#" class="text-2xl font-semibold">Name</a>
        </div>

        <nav class="space-x-4">
          <a href="#" class="font-semibold">Home</a>
          <a href="#" class="font-semibold">About</a>
          <a href="#" class="font-semibold">Services</a>
          <a href="#" class="font-semibold">Contact</a>
        </nav>
      </div>
    </header>

  </SimplePreview>
</template>

<script setup>
const code = 
`<header class="w-full dark:text-white bg-white dark:bg-gray-800 shadow">
  <div class="h-full flex items-center justify-between py-4 px-6">
    <div>
      <a href="#" class="text-2xl font-semibold">Name</a>
    </div>

    <nav class="space-x-4">
      <a href="#" class="font-semibold">Home</a>
      <a href="#" class="font-semibold">About</a>
      <a href="#" class="font-semibold">Services</a>
      <a href="#" class="font-semibold">Contact</a>
    </nav>
  </div>
</header>`
</script>