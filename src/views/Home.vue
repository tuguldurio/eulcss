<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class="container mx-auto py-8">

    <h1 class="text-2xl">Components</h1>
    <div class="w-full grid grid-cols-5 gap-4 my-4">
      
      <div class="h-full">
        <router-link to="/components/buttons">
          <div class="relative inset-0 pb-[56.25%]">
            <img class="absolute w-full h-full"
              src="https://chromaticblog.ghost.io/content/images/downloaded_images/New-Library--for-UI-components/1-322vs0iEe5H-SMine_MYaQ.png"
            >
          </div>
          <div class="flex flex-col p-4 transition duration-300 ease-in-out border">
            <p>Buttons</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>