<script setup lang="ts">
import Simple from './Simple.html?raw'
import Circle from './Circle.html?raw'
import WithBorder from './WithBorder.html?raw'
import FullWidth from './FullWidth.html?raw'
import Arrows from './Arrows.html?raw'
import Dots from './Dots.html?raw'
</script>

<template>
  <DocsContainer>
    <IFramePreview title="Simple" :code="Simple"/>
    <IFramePreview title="Circle" :code="Circle"/>
    <IFramePreview title="With Border" :code="WithBorder"/>
    <IFramePreview title="Full Width with Text" :code="FullWidth"/>
    <IFramePreview title="Arrows" :code="Arrows"/>
    <IFramePreview title="Dots" :code="Dots"/>
  </DocsContainer>
</template>