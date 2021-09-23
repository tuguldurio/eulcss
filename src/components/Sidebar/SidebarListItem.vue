<template>
  <li>
    <router-link :to="{ name }" 
      class="transition duration-100 relative inline-flex items-center justify-between pl-3 py-1 border-l border-gray-100 dark:border-true-gray-700 text-dark-200 dark:text-true-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
      :class="{ 'text-indigo-600 dark:text-indigo-400 border-indigo-400 dark:border-indigo-400': $route.name==name }"
    >
      {{ name }}
    </router-link>
  </li>
</template>

<script setup>
defineProps({
  name: String
})
</script>