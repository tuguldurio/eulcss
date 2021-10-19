<script setup>
import Primary from '@/docs/Button/Primary.html?raw'
import WithIcon from '@/docs/Button/WithIcon.html?raw'
import Outlined from '@/docs/Button/Outlined.html?raw'
import Disabled from '@/docs/Button/Disabled.html?raw'
import Ring from '@/docs/Button/Ring.html?raw'
import FullWidth from '@/docs/Button/FullWidth.html?raw'
</script>

<template>
  <DocsContainer>
    <SimplePreview title="Primary" :code="Primary"/>
    <SimplePreview title="With icon" :code="WithIcon"/>
    <SimplePreview title="Outlined" :code="Outlined"/>
    <SimplePreview title="Disabled" :code="Disabled"/>
    <SimplePreview title="Ring on focus" :code="Ring"/>
    <SimplePreview title="Full Width" :code="FullWidth"/>
  </DocsContainer>
</template>