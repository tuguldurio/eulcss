<script setup>
import Simple from './Simple.html?raw'
import WithSearch from './WithSearch.html?raw'
</script>

<template>
  <DocsContainer>
    <SimplePreview title="Simple" :code="Simple" bgGray :paddingX="false"/>
    <SimplePreview title="With Search" :code="WithSearch" bgGray :paddingX="false"/>
  </DocsContainer>
</template>