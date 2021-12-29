<script setup lang="ts">
import Simple from './Simple.html?raw'
import Circle from './Circle.html?raw'
import WithBorder from './WithBorder.html?raw'
import FullWidth from './FullWidth.html?raw'
import Arrows from './Arrows.html?raw'
</script>

<template>
  <DocsContainer>
    <SimplePreview title="Simple" :code="Simple"/>
    <SimplePreview title="Circle" :code="Circle"/>
    <SimplePreview title="With Border" :code="WithBorder"/>
    <SimplePreview title="Full Width with Text" :code="FullWidth"/>
    <SimplePreview title="Arrows" :code="Arrows"/>
  </DocsContainer>
</template>