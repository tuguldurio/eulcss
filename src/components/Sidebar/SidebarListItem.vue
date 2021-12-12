<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>

<template>
  <li>
    <router-link :to="{ name: name }" 
      class="transition duration-100 relative inline-flex items-center justify-between pl-3 py-1 whitespace-nowrap border-l border-gray-100 dark:border-neutral-700 text-dark-200 dark:text-neutral-400 hover:text-sky-600 dark:hover:text-sky-400"
      :class="{ 'text-sky-600 dark:text-sky-400 border-sky-400 dark:border-sky-400': $route.name==name }"
    >
      {{ name }}
    </router-link>
  </li>
</template>