<script setup>
import Simple from '@/docs/Breadcrumbs/Simple.htm'
import FullWidth from '@/docs/Breadcrumbs/FullWidth.htm'
</script>

<template>
  <DocsContainer>
    <SimplePreview title="Simple" :code="Simple"/>
    <SimplePreview title="Full Width" :code="FullWidth" bgGray :paddingX="false"/>
  </DocsContainer>
</template>