<script setup lang="ts">
import Success from './Success.html?raw'
import SuccessAlt from './SuccessAlt.html?raw'
</script>

<template>
  <DocsContainer>
    <IFramePreview title="Success" :code="Success"/>
    <IFramePreview title="Success Alternate" :code="SuccessAlt"/>
  </DocsContainer>
</template>