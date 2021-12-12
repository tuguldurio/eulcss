<script setup lang="ts">
import Simple from '@/eulercss/docs/Breadcrumbs/Simple.html?raw'
import FullWidth from '@/eulercss/docs/Breadcrumbs/FullWidth.html?raw'
</script>

<template>
  <DocsContainer>
    <SimplePreview title="Simple" :code="Simple"/>
    <SimplePreview title="Full Width" :code="FullWidth" bgGray :paddingX="false"/>
  </DocsContainer>
</template>