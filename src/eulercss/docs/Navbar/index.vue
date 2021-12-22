<script setup lang="ts">
import Simple from '@/eulercss/docs/Navbar/Simple.html?raw'
import WithSearch from '@/eulercss/docs/Navbar/WithSearch.html?raw'
</script>

<template>
  <DocsContainer>
    <SimplePreview title="Simple" :code="Simple" :paddingX="false"/>
    <SimplePreview title="With Search" :code="WithSearch" :paddingX="false"/>
  </DocsContainer>
</template>