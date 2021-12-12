<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>

<template>
  <li>
    <h5 class="font-semibold text-lg subtitle-color">{{ name }}</h5>

    <!-- sidebar-list-items -->
    <ul>
      <slot></slot>
    </ul>
  </li>
</template>