<script setup>
import Simple from '@/docs/Breadcrumbs/Simple.html?raw'
import FullWidth from '@/docs/Breadcrumbs/FullWidth.html?raw'
</script>

<template>
  <DocsContainer>
    <SimplePreview title="Simple" :code="Simple"/>
    <SimplePreview title="Full Width" :code="FullWidth" bgGray :paddingX="false"/>
  </DocsContainer>
</template>