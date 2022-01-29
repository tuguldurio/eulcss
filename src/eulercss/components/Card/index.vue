<script setup lang="ts">
import Simple from './Simple.html?raw'
import WithImage from './WithImage.html?raw'
import Product from './Product.html?raw'
</script>

<template>
  <DocsContainer>
    <IFramePreview title="Simple" :code="Simple" :paddingX="false"/>
    <IFramePreview title="With Image" :code="WithImage" :paddingX="false"/>
    <IFramePreview title="Product" :code="Product" :paddingX="false"/>
  </DocsContainer>
</template>