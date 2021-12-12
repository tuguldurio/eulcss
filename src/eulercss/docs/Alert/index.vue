<script setup lang="ts">
import Success from '@/eulercss/docs/Alert/Success.html?raw'
import SuccessAlt from '@/eulercss/docs/Alert/SuccessAlt.html?raw'
</script>

<template>
  <DocsContainer>
    <SimplePreview title="Success" :code="Success"/>
    <SimplePreview title="Success Alternate" :code="SuccessAlt"/>
  </DocsContainer>
</template>