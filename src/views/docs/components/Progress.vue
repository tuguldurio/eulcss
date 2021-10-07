<script setup>
import Simple from '@/docs/Progress/Simple.htm'
import WithLabel from '@/docs/Progress/WithLabel.htm'
</script>

<template>
  <DocsContainer>
    <SimplePreview title="Simple" :code="Simple"/>
    <SimplePreview title="With Label" :code="WithLabel"/>
  </DocsContainer>
</template>