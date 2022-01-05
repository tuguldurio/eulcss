<script setup lang="ts">
import Simple from './Simple.html?raw'
import WithLabel from './WithLabel.html?raw'
import Circle from './Circle.html?raw'
</script>

<template>
  <DocsContainer>
    <IFramePreview title="Simple" :code="Simple"/>
    <IFramePreview title="With Label" :code="WithLabel"/>
    <IFramePreview title="Circle (Needs fix)" :code="Circle"/>
  </DocsContainer>
</template>