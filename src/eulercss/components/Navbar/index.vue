<script setup lang="ts">
import Simple from './Simple.html?raw'
import WithSearch from './WithSearch.html?raw'
</script>

<template>
  <DocsContainer>
    <IFramePreview title="Simple" :code="Simple" :paddingX="false"/>
    <IFramePreview title="With Search" :code="WithSearch" :paddingX="false"/>
  </DocsContainer>
</template>