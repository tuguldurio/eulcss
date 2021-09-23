<template>
  <div class="container mx-auto h-full py-8 flex justify-between relative">
    <Sidebar/>
    
    <main class="min-w-0 w-full flex-auto">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import Sidebar from '@/layouts/Sidebar.vue'
</script>