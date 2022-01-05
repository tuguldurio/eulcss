<script setup lang="ts">
import Simple from './Simple.html?raw'
import FullWidth from './FullWidth.html?raw'
</script>

<template>
  <DocsContainer>
    <IFramePreview title="Simple" :code="Simple"/>
    <IFramePreview title="Full Width" :code="FullWidth" :paddingX="false"/>
  </DocsContainer>
</template>