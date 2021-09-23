<template>
  <router-link :to="to" class="shadow rounded overflow-hidden">
    <div class="relative inset-0 pb-[56.25%]">
      <img class="absolute w-full h-full"
        src="https://chromaticblog.ghost.io/content/images/downloaded_images/New-Library--for-UI-components/1-322vs0iEe5H-SMine_MYaQ.png"
      >
    </div>
    <div class="flex flex-col p-4 text-gray-800">
      <p>{{ to.name }}</p>
    </div>
  </router-link>
</template>

<script setup>
defineProps({
  to: Object
})
</script>