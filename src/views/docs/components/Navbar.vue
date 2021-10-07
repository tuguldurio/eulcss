<script setup>
import Simple from '@/docs/Navbar/Simple.htm'
import WithSearch from '@/docs/Navbar/WithSearch.htm'
</script>

<template>
  <DocsContainer>
    <SimplePreview title="Simple" :code="Simple" bgGray :paddingX="false"/>
    <SimplePreview title="With Search" :code="WithSearch" bgGray :paddingX="false"/>
  </DocsContainer>
</template>