<script setup lang="ts">
import Simple from '@/eulercss/docs/Progress/Simple.html?raw'
import WithLabel from '@/eulercss/docs/Progress/WithLabel.html?raw'
import Circle from '@/eulercss/docs/Progress/Circle.html?raw'
</script>

<template>
  <DocsContainer>
    <SimplePreview title="Simple" :code="Simple"/>
    <SimplePreview title="With Label" :code="WithLabel"/>
    <SimplePreview title="Circle" :code="Circle"/>
  </DocsContainer>
</template>