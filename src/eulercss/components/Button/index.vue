<script setup lang="ts">
import Primary from './Primary.html?raw'
import WithIcon from './WithIcon.html?raw'
import Outlined from './Outlined.html?raw'
import Disabled from './Disabled.html?raw'
import Ring from './Ring.html?raw'
import FullWidth from './FullWidth.html?raw'
</script>

<template>
  <DocsContainer>
    <IFramePreview title="Primary" :code="Primary"/>
    <IFramePreview title="With icon" :code="WithIcon"/>
    <IFramePreview title="Outlined" :code="Outlined"/>
    <IFramePreview title="Disabled" :code="Disabled"/>
    <IFramePreview title="Ring on focus" :code="Ring"/>
    <IFramePreview title="Full Width" :code="FullWidth"/>
  </DocsContainer>
</template>